from flask_cors import CORS
import json
from flask import Flask, request, jsonify
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch

app = Flask(__name__)
CORS(app)


tokenizer = AutoTokenizer.from_pretrained("siebert/sentiment-roberta-large-english")
model = AutoModelForSequenceClassification.from_pretrained("siebert/sentiment-roberta-large-english")

@app.route('/senti', methods=['POST'])
def analyze_sentiment():
    review_texts = request.json.get('reviewTexts') 
    print("Review texts in flask = ",review_texts)
    if not review_texts or not isinstance(review_texts, list):
        return jsonify({"error": "Invalid input, expected an array of review texts."}), 400
    
    sentiment_results = []
    positive_count = 0
    negative_count = 0
    
    for review in review_texts:
        # Tokenize the input review text
        inputs = tokenizer(review, return_tensors="pt", truncation=True, padding=True, max_length=512)

        # Run the model and get the output
        with torch.no_grad():
            outputs = model(**inputs)
        
        # Get the predicted sentiment (0 = negative, 1 = positive)
        logits = outputs.logits
        sentiment = torch.argmax(logits, dim=-1).item()
        
        if sentiment == 1:
            positive_count += 1
        else:
            negative_count += 1
    

    return jsonify({
        "positive": positive_count,
        "negative": negative_count
    })
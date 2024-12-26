const express = require('express');
const cors = require('cors');
// const userModel = require('../models/user');
const sumRouter = express.Router();
sumRouter.use(cors());
sumRouter.use(express.json());

const { HfInference } = require('@huggingface/inference');
const client = new HfInference("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");

// const User = mongoose.model('User', userSchema);
sumRouter.post("/summarize", async (req, res) => {
    console.log("Received request to summarize:");
    const { reviews } = req.body;
  
    if (!reviews || !Array.isArray(reviews)) {
        return res.status(400).json({ error: "Invalid input. Expected an array of reviews." });
    }
  
    try {
        const chatCompletion = await client.chatCompletion({
            model: "mistralai/Mistral-7B-Instruct-v0.3",
            messages: [
            {
                role: "user",
                content: `Please provide a  summary of the following reviews in 75 words:\n\n${reviews}`,
            },
            ],
            max_tokens: 400, 
          });
        const summary = chatCompletion.choices[0].message.content;
        return res.json({ summary });
    } 
    catch (error) {
      console.error("Error processing reviews:", error);
      return res.status(500).json({ error: "Failed to process reviews"});
    }
  });
  module.exports = sumRouter;
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bcrypt = require('bcrypt');
// const User = require('./models/user'); // Ensure the path is correct
// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json()); // Enable parsing of JSON requests
// mongoose.connect('mongodb+srv://sagarika:SagarikaM5028@cluster0.ymycf.mongodb.net/reviewbot?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('MongoDB connection error:', err));

// // Signup route
// app.post('/signup', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     // Check if the username already exists
//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//       return res.status(400).json({ error: 'The username is already used.' });
//     }

//     // Hash the password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     const user = new User({
//       username,
//       password: hashedPassword,
//     });
//     await user.save();

//     res.status(201).json({ message: 'User created successfully!' });
//   } catch (error) {
//     console.error('Error during signup:', error);
//     res.status(500).json({ error: 'An error occurred during signup.' });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const dotenv = require('dotenv');
const signRouter = require('./routes/signup'); // Import signup router
const logRouter = require('./routes/login');   // Import login router
const sumRouter = require('./routes/summarize');


//dotenv.config(); // Load environment variables

const app = express();

// MongoDB Connection
const db = async () => {
    try { //
        await mongoose.connect("mongodb+srv://banurisagarika:SagarikaM5028@taskmanager.hmm3o.mongodb.net/reviewbot2?retryWrites=true&w=majority&appName=taskmanager");
        console.log("Connected to the database");
    } catch (error) {
        console.log("Error connecting to the database", error);
    }
};
db();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// Routes
app.use('/api', signRouter);  // Signup route
app.use('/api', logRouter);
app.use('/api', sumRouter);    // Login route

// Start Server
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});

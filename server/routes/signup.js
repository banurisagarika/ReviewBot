// // const express = require('express');
// // const mongoose = require('mongoose');
// // const bcrypt = require('bcrypt');
// // const cors = require('cors');
// // const userModel = require('../models/user');
// // const signRouter = express.Router();

// // signRouter.use(cors());
// // signRouter.use(express.json());

// // signRouter.post('/signup', async (req, res) => {
// //     const { username, password ,confrimpassword} = req.body

// //     // Check if username or password is missing
// //     if (!username || !password) {
// //         return res.status(400).send("Username and password are required");
// //     }

// //     // Hash the password
// //     // const hashedPassword = await bcrypt.hash(password, 10);

// //     // Create new user object with hashed password
// //     const newUser = new userModel({
// //         username,
// //         password,
// //         reenterPassword,
// //     });

// //     try {
// //         await newUser.save(); // Save the new user to the database
// //         console.log("User created successfully!");
// //         res.status(201).send("User created successfully!");
// //     } catch (err) {
// //         console.error("Error creating user:", err);
// //         res.status(500).send("Error creating user");
// //     }
// // });

// // module.exports = signRouter;
// const express = require('express');
// const cors = require('cors');
// const userModel = require('../models/user');
// const signRouter = express.Router();

// signRouter.use(cors());
// signRouter.use(express.json());


// // Signup Route
// signRouter.post('/signup', async (req, res) => {
//     const { username, password } = req.body;
//     // console.log("hello");

//     // Validate inputs
//     if (!username || !password) {
//         return res.status(400).json({ error: "Username and password are required." });
//     }

//     try {
//         // Check if the username already exists
//         const existingUser = await userModel.findOne({ username });
//         if (existingUser) {
//             return res.status(400).json({ error: "Username already exists. Please choose another one." });
//         }

//         // Create a new user
//         const newUser = new userModel({ username, password });
//         await newUser.save();

//         console.log("User created successfully!");
//         res.status(201).json({ message: "User created successfully!" });
//     } catch (err) {
//         console.error("Error creating user:", err);
//         res.status(500).json({ message: err.message });

//     }
// });

// module.exports = signRouter;


const express = require('express');
const cors = require('cors');
const userModel = require('../models/user');
const signRouter = express.Router();

signRouter.use(cors());
signRouter.use(express.json());

// Signup Route
signRouter.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    // Validate inputs
    if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required." });
    }

    try {
        // Check if the username already exists
        const existingUser = await userModel.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: "Username already exists. Please choose another one." });
        }

        // Create a new user with plain text password
        const newUser = new userModel({ username, password });
        await newUser.save();

        console.log("User created successfully!");
        res.status(201).json({ message: "User created successfully!" });
    } catch (err) {
        console.error("Error creating user:", err);
        res.status(500).json({ message: err.message });
    }
});

module.exports = signRouter;

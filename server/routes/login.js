const express = require('express');
const bcrypt = require('bcrypt');
const userModel = require('../models/user');
const logRouter = express.Router();

logRouter.use(express.json());

logRouter.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username or password missing' });
    }

    try {
        const user = await userModel.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: 'Invalid username' });
        }

        // const isPasswordValid = await bcrypt.compare(password, user.password);
        // if (!isPasswordValid) {
        //     return res.status(400).json({ error: 'Invalid password' });
        // }

        if (user.password !== password) {
            return res.status(400).send('Invalid password');
        }

        res.status(200).json({ message: 'Login successful!' });
    } catch (err) {
        res.status(500).json({ error: 'Server error. Please try again later.' });
    }
});

logRouter.get('/getUsers', async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: 'Server error. Please try again later.' });
    }
});

logRouter.post('/create', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username or password missing' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new userModel({ username, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully!' });
    } catch (err) {
        res.status(500).json({ error: 'Error creating user' });
    }
});

module.exports = logRouter;

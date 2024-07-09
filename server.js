const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS middleware
const connectDB = require('./db');
const FAQ = require('./models/FAQ');
const natural = require('natural');
const fs = require('fs');
require('dotenv').config(); // Load environment variables

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Detailed CORS Configuration
const corsOptions = {
    origin: 'http://localhost:3000', // Allow only this origin to access the server
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
    preflightContinue: false,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions)); // Enable CORS with options

// Handle preflight requests
app.options('*', cors(corsOptions));

// Initialize NLP manager
let classifier = new natural.BayesClassifier();
if (fs.existsSync('model.json')) {
    natural.BayesClassifier.load('model.json', null, (err, loadedClassifier) => {
        if (err) {
            console.error('Failed to load model:', err);
            process.exit(1);
        } else {
            classifier = loadedClassifier;
            console.log('NLP model loaded successfully');
        }
    });
} else {
    console.error('NLP model file not found. Please run the training script first.');
    process.exit(1);
}

// Routes
app.post('/query', async (req, res) => {
    try {
        const { text } = req.body;
        const response = classifier.classify(text);
        res.json({ answer: response });
    } catch (error) {
        console.error('Error processing query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/faq', async (req, res) => {
    try {
        const faqs = await FAQ.find();
        res.json(faqs);
    } catch (err) {
        console.error('Error fetching FAQs:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

// Entry Point to the Backend with Express App

const express = require('express');

require('dotenv').config();

const mongoose = require('mongoose')
const diagramRoutes = require('./routes/diagrams');

// eypress app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})
/*
app.use(cors({
    origin: 'http://localhost:3000'
})); */

// Routes
app.use('/api/scooters', diagramRoutes);

// Connect to db
mongoose.connect(process.env.ATLAS_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`connected to db & listening on port:`, process.env.PORT);
        })
    }).catch((error) => {
        console.log(error)
    })



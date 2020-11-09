const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Snippet = require('../models/snippet'); 

// Create a new snippet in the Database
router.post("/", (req, res, next) => {
    const snippet = new Snippet({
        _id: mongoose.Types.ObjectId(),
        title: "Test Snippet",
        content: "Content of the test Snippet"
    });
    snippet.save() //Save the post to the database 
    .then( result => {
        console.log(result);
        res.status(201).json({
            message: 'Snippet added correctly',
            snippet: {
                id: result._id,
                title: result.title,
                content: result.content
            }
        });
    })
    .catch( error => {
        console.log(error);
        res.status(500).json({
            message: error
        });
    });
});

// Get All Snippets from the DataBase
router.get('/',(req, res, next) => {
    const snippetQuery = Snippet.find();
    snippetQuery
    .then(snippets => {
        res.status(200).json({
            'message': 'Snippets fetched succesfully',
            'Snippets': snippets
        });
    })
    .catch(err => {
        console.log(err);
        res.status.json({
            message: "Something went wrong",
            error: err
        });
    });    
});

module.exports = router;
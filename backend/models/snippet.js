const mongoose = require('mongoose');

const snippetSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {type: String, required: true},
    content: {type: String, required: true}
});

module.exports = mongoose.model('Snippet', snippetSchema);
// Schema: we create a blueprint for the model so we can export that 
// format to our express server and eventually link it to your routes {CRUD operations}.

const mongoose = require('mongoose');

// Defining the schema with validations
const musicLibrarySchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    genre: { type: [String], required: true } 
});

// Creating the model
const Music_Library = mongoose.model("Music_Library", musicLibrarySchema);

module.exports = Music_Library;

const mongoose = require('mongoose');
mongoose.Promise = global.Promise
require('dotenv').config();

//  Connect to MongoDB Server using the connection string in the `.env` file.
const conn = process.env.DB_STRING;


mongoose.connect(conn);

// Creates simple schema for a Animal. 

let AnimalSchema = new mongoose.Schema({
	Zoo: { type: String, required: true},
	ScientificName: { type: String, required: true},
    CommonName: { type: String, required: true},
    GivenName: { type: String, required: true},
    Gender: { type: String, required: true},
    DOB: { type: Date, required: true},
    age: { type: Number, required: true},
    isTransportable: { type: Boolean, required: true, default: false }

}, {
    collection: 'animals'
});

// const User = connection.model('User', UserSchema);
// Expose the connection
module.exports.Animal= mongoose.model('animal', AnimalSchema);

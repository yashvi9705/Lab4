const mongoose = require('mongoose');
mongoose.Promise = global.Promise
require('dotenv').config();

//  Connect to MongoDB Server using the connection string in the `.env` file.
const conn = process.env.DB_STRING;

// const connection = mongoose.createConnection(conn, {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true
// });
mongoose.connect(conn);

// Creates simple schema for a User. 
// The hash and salt are derived from the user's given password when they register
const AnimalSchema = new mongoose.Schema({
	zoo: { type: String, required: true},
	ScientificName: { type: String, required: true},
    CommonName: { type: String, required: true},
    GivenName: { type: String, required: true},
    Gender: { type: String, required: true},
    DOB: { type: Date, required: true},
    age: { type: Number, required: true},
    isTransportable: { type: Boolean, required: true, default: false }

});

// const User = connection.model('User', UserSchema);
// Expose the connection
module.exports.Animal= mongoose.model('Animal', AnimalSchema);

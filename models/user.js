const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        require: true,
        unique: true
    }
});
UserSchema.plugin(passportLocalMongoose); // Adds username, password, does the hashing and unique checks for us

module.exports = mongoose.model('User', UserSchema)

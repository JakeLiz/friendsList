/* Friends module */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for friend
const FriendSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    friendName: {
        type: String,
        required: true
    },
})

//create model for friend
module.exports = Friend = mongoose.model("friends", FriendSchema);


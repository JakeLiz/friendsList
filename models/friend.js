/* Friends module */
// Note: file name used to be Friend.js however this causes bug when deploying to heroku.
// always use lowercase when using node.js.
// ref: https://devcenter.heroku.com/articles/node-best-practices#stick-with-lowercase

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


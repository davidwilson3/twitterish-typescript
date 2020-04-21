const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema for Tweets
const TweetScheme = new Schema({
  user: {
    type: String,
  },
  text: {
    type: String,
    required: [true, "Tweet text is required"],
  },
  date: {
    type: Date,
    reqr,
  },
});

//create model for Tweets
const Tweets = mongoose.model("tweets", TweetScheme);

module.exports = Tweets;

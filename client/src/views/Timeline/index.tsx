import React from "react";
import { getSubscribed } from "../../util/getSubscribed";
import TweetList from "../../components/TweetList";

export default () => {
  //----------------------------------------------
  // will be changed later based on API call and login
  const userId = "test123";
  const tweetArray = getSubscribed(userId);
  //----------------------------------------------

  return <TweetList tweets={tweetArray} headerText="home" />;
};

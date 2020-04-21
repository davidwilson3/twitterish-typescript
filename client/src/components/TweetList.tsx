import React from "react";
import { Grid, Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { TweetData } from "../types";
import TweetDisplayBox from "./TweetDisplayBox";
import Box from "./Box";

const useStyles = makeStyles(theme => ({
  boxSize: {
    width: "500px",
    textAlign: "left"
  },
  header: {
    fontWeight: 800,
    fontSize: "19px"
  },
  noMoreTweets: {
    marginTop: theme.spacing(3),
    color: theme.palette.primary.light
  }
}));

interface TweetListProps {
  tweets: TweetData[];
  headerText?: string;
  hideNoMoreTweets?: boolean;
}

const TweetList = ({
  tweets,
  headerText,
  hideNoMoreTweets = false
}: TweetListProps) => {
  const styles = useStyles();

  return (
    <Grid container direction="column" justify="flex-start" alignItems="center">
      {!!headerText && (
        <Grid item>
          <Box className={styles.boxSize}>
            <Typography variant="inherit" className={styles.header}>
              {headerText}
            </Typography>
          </Box>
        </Grid>        
      )}
      {tweets.map((tweet: TweetData) => (
        <Grid item key={tweet.tweetId}>
          <Box className={styles.boxSize}>
            <TweetDisplayBox tweet={tweet} />
          </Box>
        </Grid>
      ))}
      {!hideNoMoreTweets && (
        <div className={styles.noMoreTweets}>
          <Typography variant="subtitle2">
            No more tweets to display!
          </Typography>
        </div>
      )}
    </Grid>
  );
};

export default TweetList;

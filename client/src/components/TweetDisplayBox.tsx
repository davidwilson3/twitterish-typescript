import React from "react";
import { Typography, Grid } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { TweetData } from "../types/index";

const useStyles = makeStyles((theme) => ({
  primaryText: {
    color: "#000",
    marginRight: theme.spacing(1),
    fontWeight: 700,
  },
  secondaryText: {
    color: theme.palette.secondary.main,
  },
  tweetText: {
    marginTop: theme.spacing(0),
  },
  picture: {
    height: "50px",
    width: "50px",
    borderRadius: "400px",
    marginRight: theme.spacing(1.4),
  },
}));

interface Props {
  tweet: TweetData;
  className?: string;
}

const TweetDisplayBox = ({ tweet, className }: Props) => {
  const styles = useStyles();
  return (
    <Grid container>
      <Grid>
        <img
          className={styles.picture}
          src={`/images/${tweet.picture}`}
          alt="user profile pic"
        />
      </Grid>
      <Grid>
        <Typography
          variant="subtitle1"
          className={styles.primaryText}
          display="inline"
        >
          {tweet.displayName}
        </Typography>
        <Typography
          variant="subtitle1"
          className={styles.secondaryText}
          display="inline"
        >
          {`@${tweet.username}`}
        </Typography>
        <Typography
          variant="body2"
          className={styles.secondaryText}
          display="inline"
        >
          {" • "}
        </Typography>
        <Typography
          variant="subtitle1"
          className={styles.secondaryText}
          display="inline"
        >
          {tweet.timestamp}
        </Typography>
        <Typography variant="body1" className={styles.tweetText}>
          {tweet.value}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TweetDisplayBox;

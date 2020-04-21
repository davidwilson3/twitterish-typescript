export interface TweetData {
  uid: number;
  tweetId: number;
  username: string;
  displayName: string;
  timestamp: string;
  value: string;
  parent: number | undefined;
  picture: string;
}

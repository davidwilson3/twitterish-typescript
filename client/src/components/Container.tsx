import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "100%",
    padding: "5px",
    paddingTop: 0,
    margin: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

const Container: React.FC = ({ children }) => {
  const styles = useStyles();

  return <div className={styles.root}>{children}</div>;
};

export default Container;

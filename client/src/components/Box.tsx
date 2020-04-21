import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    border: `1px solid ${theme.palette.secondary.light}`
  }
}));

interface BoxProps {
  className?: string;
}

const Container: React.FC<BoxProps> = ({ className, children }) => {
  const styles = useStyles();

  return <div className={clsx(styles.root, className)}>{children}</div>;
};

export default Container;

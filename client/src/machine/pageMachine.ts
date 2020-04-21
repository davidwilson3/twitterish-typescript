import { createMachine, state, transition } from "robot3";

interface Context {}

const defaultContext: Context = {};

export default createMachine(
  {
    timeline: state(transition("goToProfile", "profile")),
    profile: state(transition("goToTimeline", "scan"), transition("inputValue", "confirm")),
  },
  () => defaultContext // must be a function that returns context
);

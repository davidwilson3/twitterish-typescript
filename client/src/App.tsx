import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import axios from "axios";
import theme from "./theme/global";
import Container from "./components/Container";
import { useStateMachine, createMachineContext } from "./components/state-machine";
import Timeline from "./views/Timeline";

const machineContext = createMachineContext;

/* const states: StateObject<typeof current> = {
  scan: <ScanLocation />, 
  enter: <EnterTemperature />,  
  confirm: <ConfirmSelection />,
  complete: <Complete />,
}; 

return <MachineContext.Provider value={{ current, send }}>{states[current.name]}</MachineContext.Provider>; */

const App = () => {
  axios.get("api/test").then((r) => console.log(r.data));

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Timeline />
      </Container>
    </ThemeProvider>
  );
};

export default App;

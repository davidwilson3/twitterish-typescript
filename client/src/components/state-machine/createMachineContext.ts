import React from "react";
import { M, MachineCurrent, MachineSend, MachineService } from "./types";

export interface StateMachineContextObject<T extends M> {
    current: MachineCurrent<T>;
    send: MachineSend;
    service?: MachineService;
}

// provide type for context object for intellisense on {current}
/**
 * @param {Machine} Machine - The state machine for the current context* 
 */
export default <T extends M>(Machine: T) => React.createContext({} as StateMachineContextObject<typeof Machine>);
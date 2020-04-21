//@ts-ignore
import { useMachine } from "react-robot"; // this has no TypeScript file declaration, thus the need for ignore and this custom hook
import { M, MachineCurrent, MachineSend, MachineService } from "./types";

const useStateMachine = <T extends M>(machine: T): [MachineCurrent<T>, MachineSend, MachineService] => {
    const [current, send, service]: [MachineCurrent<T>, MachineSend, MachineService] = useMachine(machine);
    return [current, send, service];
};

export default useStateMachine;

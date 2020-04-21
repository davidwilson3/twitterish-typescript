import { Machine } from "robot3";

// generic assignment of machine to M in case the type changes name in source library
export type M = Machine;

// Response from useTypedMachine Hook: [context, send, service]
export interface MachineCurrent<T extends Machine> {
    name: T["state"]["name"];
    context: T["context"];
}
export type MachineSend = (type: string | { type: string; value?: any }) => void;
export type MachineService = any;

// Creates record of all states used for stepper
export type StateObject<T extends MachineCurrent<M>> = Partial<Record<T["name"], React.ReactNode>>;

export interface StateMachineContext<T extends M> {
    current: MachineCurrent<T>;
    send: MachineSend;
    service?: MachineService;
}
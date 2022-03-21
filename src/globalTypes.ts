export type TId = string;

export enum EEventType {
    CALLS = "CALLS",
    CHATS = "CHATS",
    EMAILS = "EMAILS",
}

export interface IOperator {
    id: TId;
    operator: string;
}

export interface ICustomer {
    id: TId;
    customer: string;
    phone: string;
    email: string;
}

export interface IEvent {
    id: TId;
    operator: IOperator;
    customer: ICustomer;
    type: EEventType;
    rate: number;
}

export interface ICall extends IEvent {
    duration: number;
}

export interface IChat extends IEvent {
    duration: number;
}

export interface IEmail extends IEvent {}

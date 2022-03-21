import {faker} from "@faker-js/faker";
import {EEventType, ICall, IChat, ICustomer, IEmail, IOperator} from "../../globalTypes";

const rates = [0, 1, 2, 3, 4, 5];


export const generateOperators = (count: number): IOperator[] => new Array(count).fill('').map((item) => ({
    id: faker.datatype.uuid() + item,
    operator: faker.name.findName(),
}));

export const generateCustomers = (count: number): ICustomer[] => new Array(count).fill('').map((item) => ({
    id: faker.datatype.uuid() + item,
    customer: faker.name.findName(),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email(),
}));

export const generateCalls = (operators: IOperator[], customers: ICustomer[]): ICall[] => customers.map((customer) => ({
    id: faker.datatype.uuid(),
    rate: faker.random.arrayElement(rates),
    type: EEventType.CALLS,
    duration: Number(new Date()) * Math.random(),
    operator: faker.random.arrayElement(operators),
    customer,
}));

export const generateChats = (operators: IOperator[], customers: ICustomer[]): IChat[] => customers.map((customer) => ({
    id: faker.datatype.uuid(),
    rate: faker.random.arrayElement(rates),
    type: EEventType.CALLS,
    duration: Number(new Date()) * Math.random(),
    operator: faker.random.arrayElement(operators),
    customer,
}));

export const generateEmails = (operators: IOperator[], customers: ICustomer[]): IEmail[] => customers.map((customer) => ({
    id: faker.datatype.uuid(),
    rate: faker.random.arrayElement(rates),
    type: EEventType.CALLS,
    operator: faker.random.arrayElement(operators),
    customer,
}));

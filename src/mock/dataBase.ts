import {generateCalls, generateChats, generateCustomers, generateEmails, generateOperators} from "./utils/generateData";
import {ICustomer, IOperator} from "../globalTypes";

const OPERATORS_COUNT = 4;
const CUSTOMERS_COUNT = 100;

const callsIndex = {
    start: 0,
    end: CUSTOMERS_COUNT - 60,
};

const chatsIndex = {
    start: callsIndex.end,
    end: callsIndex.end + 25,
}

const emailsIndex = {
    start: chatsIndex.end,
    end: CUSTOMERS_COUNT,
}

export type TEntity = "operators" | "customers" | "calls" | "chats" | "emails";

export class DataBase {
    private operators: IOperator[];
    private customers: ICustomer[];
    private calls: any
    private chats: any
    private emails: any

    constructor() {
        this.operators = generateOperators(OPERATORS_COUNT);
        this.customers = generateCustomers(CUSTOMERS_COUNT);
        this.calls = generateCalls(this.operators, this.customers.slice(callsIndex.start, callsIndex.end));
        this.chats = generateChats(this.operators, this.customers.slice(chatsIndex.start, chatsIndex.end));
        this.emails = generateEmails(this.operators, this.customers.slice(emailsIndex.start, emailsIndex.end));
    }

    getData = (entity: TEntity) => {
        return this[entity];
    }
}

const dataBase = new DataBase();

export default dataBase;

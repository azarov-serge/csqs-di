import api from "../../mock/api";
import {ICall} from "../../globalTypes";
import {ICallsService} from "./types";
import {IApi} from "../types";

export class CallsService implements ICallsService {
    private instance: ICallsService | null;

    constructor() {
        this.instance = null;
    }

    getInstance = (): CallsService => {
        if(!this.instance) {
            this.instance = new CallsService();
        }

        return this.instance as CallsService;
    }

    getCalls = async (): Promise<ICall[]> => {
        return api.request<ICall[]>("/calls");
    }
}


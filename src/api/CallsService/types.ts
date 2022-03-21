import {ICall} from "../../globalTypes";

export interface ICallsService {
    getInstance: () => ICallsService;
    getCalls: () => Promise<ICall[]>
}

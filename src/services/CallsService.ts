import {makeRequest} from "../api/makeRequest";
import {BASE_URL} from "../api/urls";
import {ICall} from "../globalTypes";
import {injectable} from "inversify";

@injectable()
export class CallsService {
    getCalls = async (): Promise<ICall[]> => {
        return makeRequest<ICall[]>(`${BASE_URL}/calls`);
    }
}


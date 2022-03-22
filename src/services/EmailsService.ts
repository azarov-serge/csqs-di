import {makeRequest} from "../api/makeRequest";
import {BASE_URL} from "../api/urls";
import {ICall} from "../globalTypes";
import {injectable} from "inversify";

@injectable()
export class EmailsService {
    getEmails = async (): Promise<ICall[]> => {
        return makeRequest<ICall[]>(`${BASE_URL}/emails`);
    }
}


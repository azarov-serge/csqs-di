import api from "../mock/api";
import {IRESTConfig} from "./types";

export const makeRequest = async <T>(url: string, config?: IRESTConfig): Promise<T> => {
    return await api.request(url, config);
}

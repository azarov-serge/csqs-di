import {delay} from "./utils/async";
import dataBase, {DataBase, TEntity} from "./dataBase";
import {ERESTMethod, IApi, IRESTConfig} from "../api/types";

export class Api implements IApi {
    private database: DataBase;

    constructor(dataBase: DataBase) {
        this.database = dataBase;
    }

    request = async <T>(url: string, config = {}): Promise<T> => {
        const {method = ERESTMethod.GET} = config as IRESTConfig;
        const entity = url.replace("/", "");
        let result: any;

        switch (method) {
            case ERESTMethod.GET: {
                result = this.database.getData(entity as TEntity)
            }
        }

        await delay(700);

        return result;
    }
}

const api = new Api(dataBase);

export default api;

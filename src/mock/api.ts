import {delay} from "./utils/async";
import dataBase, {DataBase, TEntity} from "./dataBase";
import {EMethod, IApi, IConfig} from "../api/types";

export class Api implements IApi {
    private database: DataBase;

    constructor(dataBase: DataBase) {
        this.database = dataBase;
    }

    request = async <T>(url: string, config = {}): Promise<T> => {
        const {method = EMethod.GET} = config as IConfig;
        const [entity] = url.split("/");
        let result: any;

        switch (method) {
            case EMethod.GET: {
                result = this.database.getData(entity as TEntity)
            }
        }

        await delay();

        return result;
    }
}

const api = new Api(dataBase);

export default api;

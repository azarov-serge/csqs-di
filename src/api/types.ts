export enum EMethod {
    GET = "GET",
}

export interface IConfig {
    method?: EMethod
}

export interface IApi {
    request: <T>(url: string, config?: IConfig) => Promise<T>;
}

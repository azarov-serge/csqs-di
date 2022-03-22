export enum ERESTMethod {
    GET = "GET",
}

export interface IRESTConfig {
    method?: ERESTMethod
}

export interface IApi {
    request: <T>(url: string, config?: IRESTConfig) => Promise<T>;
}

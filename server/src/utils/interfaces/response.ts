export interface IApiError {
  [key: string]: string;
}

export type IResponseDataError = IApiError[] | null;

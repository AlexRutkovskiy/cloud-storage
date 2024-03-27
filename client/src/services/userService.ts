import axios, { AxiosResponse } from "axios";
import type { IResponse } from "../utils/types/api";

type IRegisterUserData = Record<string, string>;

export const userRegister = async (
  userData: IRegisterUserData,
  successCallback = () => {},
  errorCalback = () => {},
  finallyCalback = (msg: string, isError: boolean) => {}
) => {
  let msg = "";
  let isError = false;

  try {
    const url = process.env.REACT_APP_BASE_URL as string;
    const { data } = await axios.post<
      IRegisterUserData,
      AxiosResponse<IResponse>
    >(`${url}/auth/register`, userData);

    msg = data.message;
    isError = data.isError;
    data.isError ? errorCalback() : successCallback();
  } catch (e) {
    msg = e instanceof Error ? e.message : "Bad request";
    isError = true;
    errorCalback();
  } finally {
    finallyCalback(msg, isError);
  }
};

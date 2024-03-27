import axios, { AxiosResponse } from "axios";
import type { IResponse } from "../utils/types/api";

type IRegisterUserData = Record<string, string>;

export const userRegister = async (
  userData: IRegisterUserData,
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
  } catch (e) {
    msg = e instanceof Error ? e.message : "Bad request";
    isError = true;
  } finally {
    finallyCalback(msg, isError);
  }
};

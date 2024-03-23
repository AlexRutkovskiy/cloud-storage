import { Request, Response, NextFunction } from "express";
import { JSONResponse } from "../../http/response/jsonResponse.js";
import { ApiException } from "./apiException.js";
import { ERROR_MESSAGE } from "../constans/error.js";
import { IResponseDataError } from "../interfaces/response.js";

const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const code = error instanceof ApiException ? error.code : 500;
  const message =
    error instanceof ApiException ? error.message : ERROR_MESSAGE.SERVER_ERROR;
  const data: IResponseDataError =
    error instanceof ApiException ? error.data : null;

  return res.json(JSONResponse.getResponse(code, message, data));
};

export { errorHandler };

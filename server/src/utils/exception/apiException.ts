import { ERROR_MESSAGE } from "../constans/error.js";
import { IResponseDataError } from "../interfaces/response.js";

class ApiException extends Error {
  /**
   *
   * @param message
   * @param code
   * @param data
   */
  constructor(
    public message: string,
    public code: number,
    public data: IResponseDataError
  ) {
    super(message);
  }

  /**
   *
   * @param data
   * @returns
   */
  public static BadRequest(data: IResponseDataError) {
    return new ApiException(ERROR_MESSAGE.BAD_REQUEST, 400, data);
  }

  /**
   *
   * @returns
   */
  public static NotFount() {
    return new ApiException(ERROR_MESSAGE.NOT_FOUND, 404, null);
  }

  /**
   *
   * @returns
   */
  public static ServerError() {
    return new ApiException(ERROR_MESSAGE.SERVER_ERROR, 500, null);
  }

  /**
   *
   * @param msg
   * @param code
   * @param data
   * @returns
   */
  public static CustomError(
    msg: string,
    code: number,
    data: IResponseDataError
  ) {
    return new ApiException(msg, code, data);
  }
}

export { ApiException };

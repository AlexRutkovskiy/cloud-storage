import { ERROR_MESSAGE } from "../constans/error.js";
import { IResponseDataError } from "../interfaces/response.js";

class ApiException extends Error {
  constructor(
    public message: string,
    public code: number,
    public data: IResponseDataError
  ) {
    super(message);
  }

  public static BadRequest(data: IResponseDataError) {
    return new ApiException(ERROR_MESSAGE.BAD_REQUEST, 400, data);
  }

  public static ServerError() {
    return new ApiException(ERROR_MESSAGE.SERVER_ERROR, 500, null);
  }
}

export { ApiException };

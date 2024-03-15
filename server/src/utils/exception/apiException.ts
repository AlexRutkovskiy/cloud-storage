import { ERROR_MESSAGE } from "../constans/error.js";

class ApiException extends Error {
  constructor(public message: string, public code: number, public data: any) {
    super(message);
  }

  public static BadRequest(data: any) {
    return new ApiException(ERROR_MESSAGE.BAD_REQUEST, 400, data);
  }
}

export { ApiException };

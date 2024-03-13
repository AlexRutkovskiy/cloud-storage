import { ValidationError, FieldValidationError } from "express-validator";

class JSONResponse {
  constructor(
    private code: number,
    private message: string,
    private data: any
  ) {}

  private toJSON() {
    return {
      code: this.code,
      message: this.message,
      isError: this.code >= 400,
      data: this.data,
    };
  }

  public static getResponse(code: number, message: string, data: any) {
    return new JSONResponse(code, message, data).toJSON();
  }

  public static formatValidateError(
    data: ValidationError[]
  ): Record<string, string>[] {
    const format = data.map((err) => {
      const errKey = JSONResponse.isValidateError(err) ? err.path : err.type;
      return { [errKey]: err.msg };
    });

    return format;
  }

  private static isValidateError(
    err: ValidationError
  ): err is FieldValidationError {
    return (err as FieldValidationError).path !== undefined;
  }
}

export { JSONResponse };

class ApiException extends Error {
  constructor(public message: string, public code: number, public data: any) {
    super(message);
  }

  public static BadRequest(data: any) {
    return new ApiException("Bad Request", 400, data);
  }
}

export { ApiException };

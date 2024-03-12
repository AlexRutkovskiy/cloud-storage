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
      data: this.data,
    };
  }

  public static getResponse(code: number, message: string, data: any) {
    return new JSONResponse(code, message, data).toJSON();
  }
}

export { JSONResponse };

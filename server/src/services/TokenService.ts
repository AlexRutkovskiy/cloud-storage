import jwt from "jsonwebtoken";
import { ApiException } from "../utils/exception/apiException.js";

class TokenService {
  /**
   *
   * @param paylod
   * @param secretKey
   * @returns
   */
  public createToken(paylod: object, secretKey: jwt.Secret): string {
    if (!paylod || !secretKey) {
      throw ApiException.ServerError();
    }

    return jwt.sign(paylod, secretKey, { encoding: "1h" });
  }
}

const tokenService = new TokenService();
export { tokenService };

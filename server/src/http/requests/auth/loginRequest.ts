import { body } from "express-validator";
import { Request } from "../Request.js";

interface IUserLogin {
  email: string;
  password: string;
}

class LoginRequest extends Request {
  /**
   *
   * @returns
   */
  public validate() {
    return [body("email").isEmail().trim(), body("password").notEmpty().trim()];
  }
}

const loginRequest = new LoginRequest();
export { loginRequest, IUserLogin };

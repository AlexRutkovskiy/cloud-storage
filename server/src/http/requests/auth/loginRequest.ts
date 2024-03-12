import { body } from "express-validator";
import { Request } from "../Request.js";

class LoginRequest extends Request {
  public validate() {
    return [body("email").isEmail().trim(), body("password").notEmpty().trim()];
  }
}

const loginRequest = new LoginRequest();
export { loginRequest };

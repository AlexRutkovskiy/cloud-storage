import { body } from "express-validator";
import { Request } from "../Request.js";

class RegisterRequest extends Request {
  public validate() {
    return [
      body("email").isEmail().trim(),
      body("password").isLength({ min: 5 }).trim(),
    ];
  }
}

const registerRequest = new RegisterRequest();
export { registerRequest };

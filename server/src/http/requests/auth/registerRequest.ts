import { body } from "express-validator";
import { Request } from "../Request.js";

class RegisterRequest extends Request {
  public validate() {
    return [
      body("email").isEmail().trim().withMessage("Not a valid e-mail address"),
      body("password")
        .isLength({ min: 5 })
        .trim()
        .withMessage("Min length is 5 symbol"),
    ];
  }
}

const registerRequest = new RegisterRequest();
export { registerRequest };

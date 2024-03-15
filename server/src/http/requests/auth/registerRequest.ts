import { body } from "express-validator";
import { Request } from "../Request.js";
import { ERROR_MESSAGE } from "../../../utils/constans/error.js";

class RegisterRequest extends Request {
  public validate() {
    return [
      body("email")
        .isEmail()
        .trim()
        .withMessage(ERROR_MESSAGE.VALIDATION.NOT_VALID_EMAIL),
      body("password")
        .isLength({ min: 5 })
        .trim()
        .withMessage(ERROR_MESSAGE.VALIDATION.MIN_LENGTH_PASSWORD),
    ];
  }
}

const registerRequest = new RegisterRequest();
export { registerRequest };

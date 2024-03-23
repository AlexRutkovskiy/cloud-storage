import { body } from "express-validator";
import { Request } from "../Request.js";
import { ERROR_MESSAGE } from "../../../utils/constans/error.js";

interface IUserRegister {
  email: string;
  password: string;
}

class RegisterRequest extends Request {
  public validate() {
    return [
      body("email")
        .trim()
        .isEmail()
        .withMessage(ERROR_MESSAGE.VALIDATION.NOT_VALID_EMAIL)
        .notEmpty()
        .withMessage(ERROR_MESSAGE.VALIDATION.FIELD_REQUIRED),
      body("password")
        .trim()
        .notEmpty()
        .withMessage(ERROR_MESSAGE.VALIDATION.FIELD_REQUIRED)
        .isLength({ min: 5 })
        .withMessage(ERROR_MESSAGE.VALIDATION.MIN_LENGTH_PASSWORD),
    ];
  }
}

const registerRequest = new RegisterRequest();
export { registerRequest, IUserRegister };

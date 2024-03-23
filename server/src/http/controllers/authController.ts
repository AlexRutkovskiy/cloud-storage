import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { JSONResponse } from "../response/jsonResponse.js";
import { ApiException } from "../../utils/exception/apiException.js";
import { IUserRegister } from "../requests/auth/registerRequest.js";
import { userService } from "../../services/UserService.js";

class AuthController {
  public async register(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(
        ApiException.BadRequest(
          JSONResponse.formatValidateError(errors.array())
        )
      );
    }

    try {
      const { email, password } = req.body as IUserRegister;
      await userService.createUser(email, password);
    } catch (e) {
      return next(
        e instanceof ApiException
          ? ApiException.BadRequest(e.data)
          : ApiException.ServerError()
      );
    }

    return res.json(JSONResponse.getResponse(201, "Succes", null));
  }

  public async login(req: Request, res: Response, next: NextFunction) {}

  public async logout(req: Request, res: Response, next: NextFunction) {}
}

const auth = new AuthController();
export { auth };

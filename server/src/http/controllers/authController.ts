import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import { JSONResponse } from "../response/jsonResponse.js";
import { ApiException } from "../../utils/exception/apiException.js";
import { IUserRegister } from "../requests/auth/registerRequest.js";
import { userService } from "../../services/UserService.js";
import { IUserLogin } from "../requests/auth/loginRequest.js";
import { tokenService } from "../../services/TokenService.js";

class AuthController {
  /**
   *
   * @param req
   * @param res
   * @param next
   * @returns
   */
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
      return next(e instanceof ApiException ? e : ApiException.ServerError());
    }

    return res.json(JSONResponse.getResponse(201, "Succes", null));
  }

  /**
   *
   * @param req
   * @param res
   * @param next
   * @returns
   */
  public async login(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(
        ApiException.BadRequest(
          JSONResponse.formatValidateError(errors.array())
        )
      );
    }

    const { email, password } = req.body as IUserLogin;

    try {
      const user = await userService.loginUser(email, password);
      const token = tokenService.createToken(
        { id: user.id },
        process.env.JWT_SECRET_KEY as jwt.Secret
      );

      return res.json(JSONResponse.getResponse(200, "Succes", { user, token }));
    } catch (e) {
      return next(e instanceof ApiException ? e : ApiException.ServerError());
    }
  }

  /**
   *
   * @param req
   * @param res
   * @param next
   */
  public async logout(req: Request, res: Response, next: NextFunction) {}
}

const auth = new AuthController();
export { auth };

import { Request, Response, NextFunction } from "express";

class AuthController {
  public async register(req: Request, res: Response, next: NextFunction) {
    return res.json({ message: "ok" });
  }

  public async login(req: Request, res: Response, next: NextFunction) {}

  public async logout(req: Request, res: Response, next: NextFunction) {}
}

const auth = new AuthController();
export { auth };

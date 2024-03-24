import bcrypt from "bcrypt";

import { JSONResponse } from "../http/response/jsonResponse.js";
import { ApiException } from "../utils/exception/apiException.js";
import { UserDTO } from "../utils/dto/UserDTO.js";
import { UserRepository } from "../repository/UserRepository.js";

class UserService {
  /**
   *
   * @param email
   * @param password
   * @returns
   */
  public async createUser(
    email: string,
    password: string
  ): Promise<UserDTO | never> {
    const candidate = await UserRepository.findUser(email, "email");
    if (candidate) {
      throw ApiException.BadRequest(
        JSONResponse.customError(`User with ${email} already exist`)
      );
    }

    const hashPassword = await bcrypt.hash(password, 5);
    const user = await UserRepository.createUser({
      email: email,
      password: hashPassword,
    });

    return new UserDTO(user);
  }

  /**
   *
   * @param email
   * @param password
   * @returns
   */
  public async loginUser(email: string, password: string): Promise<UserDTO> {
    const candidate = await UserRepository.findUser(email, "email");
    if (!candidate) {
      throw ApiException.NotFount();
    }

    const isValidPassword = await bcrypt.compare(password, candidate.password);
    if (!isValidPassword) {
      throw ApiException.BadRequest(
        JSONResponse.customError("Invalid login data")
      );
    }

    return new UserDTO(candidate);
  }
}

const userService = new UserService();

export { userService };

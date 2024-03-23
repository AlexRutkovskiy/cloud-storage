import bcrypt from "bcrypt";
import { User } from "../http/models/User.js";
import { JSONResponse } from "../http/response/jsonResponse.js";
import { ApiException } from "../utils/exception/apiException.js";
import { UserDTO } from "../utils/dto/UserDTO.js";

class UserService {
  public async createUser(email: string, password: string) {
    const candidate = await User.findOne({ email: email });
    if (candidate) {
      throw ApiException.BadRequest(
        JSONResponse.customError(`User with ${email} already exist`)
      );
    }

    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email: email, password: hashPassword });

    return new UserDTO(user);
  }
}

const userService = new UserService();

export { userService };

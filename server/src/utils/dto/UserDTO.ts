import { IUser } from "../../http/models/User.js";

interface IUserDTO {
  id: string;
  email: string;
}

class UserDTO {
  public id: string;
  public email: string;

  constructor(data: IUser) {
    this.id = data._id;
    this.email = data.email;
  }

  public toString(): IUserDTO {
    return {
      id: this.id,
      email: this.email,
    };
  }
}

export { UserDTO, IUserDTO };

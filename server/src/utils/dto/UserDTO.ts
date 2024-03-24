import { IUser } from "../../http/models/User.js";

interface IUserDTO {
  id: string;
  email: string;
  diskSpace: number;
  usedSpace: number;
  avatar: string;
  files?: any[];
}

class UserDTO {
  public id: string;
  public email: string;
  public diskSpace: number;
  public usedSpace: number;
  public avatar: string;
  public files?: any[];

  constructor(data: IUser) {
    this.id = data._id;
    this.email = data.email;
    this.diskSpace = data.diskSpace;
    this.usedSpace = data.usedSpace;
    this.avatar = data.avatar;
    this.files = data?.files || [];
  }

  public toString(): IUserDTO {
    return {
      id: this.id,
      email: this.email,
      diskSpace: this.diskSpace,
      usedSpace: this.usedSpace,
      avatar: this.avatar,
      files: this.files,
    };
  }
}

export { UserDTO, IUserDTO };

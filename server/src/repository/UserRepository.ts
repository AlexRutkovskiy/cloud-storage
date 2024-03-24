import { IUser, User } from "../http/models/User.js";

class UserRepository {
  /**
   *
   * @param data
   * @returns
   */
  public static async createUser(data: object): Promise<IUser> {
    return await User.create(data);
  }

  /**
   *
   * @param value
   * @param field
   * @returns
   */
  public static async findUser(
    value: string,
    field: string
  ): Promise<IUser | null> {
    if (!value || !field) {
      return null;
    }
    return await User.findOne({ [field]: value });
  }
}

export { UserRepository };

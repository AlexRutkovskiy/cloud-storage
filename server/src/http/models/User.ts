import { Document, Schema, model } from "mongoose";
import { File, IFile } from "./File.js";

export interface IUser extends Document {
  email: string;
  password: string;
  diskSpace: number;
  usedSpace: number;
  avatar: string;
  files?: IFile[];
}

const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    diskSpace: { type: Number, default: 1024 ** 3 * 10 },
    usedSpace: { type: Number, default: 0 },
    avatar: { type: String, default: "" },
    files: [{ type: Schema.Types.ObjectId, ref: "File" }],
  },
  {
    timestamps: true,
  }
);

export const User = model("User", userSchema);

import { Document, Schema, model } from "mongoose";

export const enum FILE_TYPE {
  FILE = "file",
  FOLDER = "folder",
}

export interface IFile extends Document {
  name: string;
  type: FILE_TYPE;
  accessLink: string;
  size: number;
  userId: Schema.Types.ObjectId;
  parentId: Schema.Types.ObjectId;
}

const fileSchema = new Schema<IFile>({
  name: { type: String, required: true },
  type: { type: String, required: true },
  accessLink: { type: String },
  size: { type: Number, default: 0 },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  parentId: { type: Schema.Types.ObjectId, ref: "File" },
});

export const File = model("File", fileSchema);

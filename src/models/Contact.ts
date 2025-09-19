import {Schema, model, Document} from "mongoose";

// Contact Interface
export interface IContact extends Document {
  name: string;
  email: string;
  phone?: string
}

const ContactSchema = new Schema<IContact>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String }
})

const Contact = model<IContact>("Contact", ContactSchema);

export default Contact
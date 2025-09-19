import Contact, { IContact } from "../models/Contact";
import { Request, Response } from "express";

export const getContacts = async (req: Request, res: Response) => {
  try {
    const contacts: IContact[] = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({
      message: "Server error"
    })
  }
}
import Contact, { IContact } from "../models/Contact";
import { Request, Response } from "express";

export const getContacts = async (req: Request, res: Response) => {
  try {
    const contacts: IContact[] = await Contact.find();
    res.status(200).json({
      success: true,
      message: "Contacts fetched successfully",
      data: contacts
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error"
    })
  }
}

export const createContact = async (req: Request, res: Response) => {
  const {name, email, phone} = req.body
  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: "Name and email are required"
    })
  }

  const contactData: IContact = new Contact({
    name,
    email,
    phone
  })

  try {
    const newContact = await contactData.save();
    return res.status(201).json({
      success: true,
      message: "Contact created successfully",
      data: newContact
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error", error
    })
  }
}
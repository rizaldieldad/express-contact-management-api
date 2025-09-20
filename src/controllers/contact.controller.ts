import { fetchContacts, findContactById, storeNewContact } from "../services/contact.service"
import Contact,  { IContact } from "../models/Contact"
import { Request, Response } from "express";

export const getContacts = async (req: Request, res: Response) => {
  try {
    const contacts: IContact[] = await fetchContacts();
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

export const getContactById = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const contact: IContact | null = await findContactById(id);
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: `Contact not found by Id: ${id}`
      })
    }
    return res.status(200).json({
      success: true,
      message: "Contact fetched successfully",
      data: contact
    })
  } catch (error) {
    console.log("Failed to get contact", error)
    return res.status(500).json({
      success: false,
      message: `Failed to get contact by Id: ${id}`,
      error: error
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

  const contactData: IContact = new Contact ({
    name,
    email,
    phone
  })

  try {
    const newContact = await storeNewContact(contactData);
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
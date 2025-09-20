import Contact, { IContact } from "../models/Contact";

export const fetchContacts = async () => await Contact.find();
export const findContactById = async (id: string) => await Contact.findById(id);
export const storeNewContact = async (data: IContact) => await Contact.create(data);
export const deleteContact = async (id: string) => await Contact.findByIdAndDelete(id);
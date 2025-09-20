import Contact, { IContact } from "../models/Contact";

export const fetchContacts = async () => await Contact.find();
export const storeNewContact = async (data: IContact) => await Contact.create(data);
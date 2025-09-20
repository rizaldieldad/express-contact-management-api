import {Router} from "express"
import {getContacts, getContactById, createContact, deleteContactById} from "../controllers/contact.controller"

const router = Router()

router.get("/", getContacts)
router.get("/:id", getContactById)
router.post("/", createContact)
router.delete("/:id", deleteContactById)

export default router
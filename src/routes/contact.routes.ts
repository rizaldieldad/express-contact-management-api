import {Router} from "express"
import {getContacts, getContactById, createContact} from "../controllers/contact.controller"

const router = Router()

router.get("/", getContacts)
router.get("/:id", getContactById)
router.post("/", createContact)

export default router
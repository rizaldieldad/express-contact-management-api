import {Router} from "express"
import {getContacts, createContact} from "../controllers/contact.controller"

const router = Router()

router.get("/", getContacts)
router.post("/", createContact)

export default router
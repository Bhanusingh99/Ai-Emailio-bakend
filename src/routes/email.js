import express from "express";
import saveAllEmails from "../controllers/saveAllEmails.Controller.js";
import { getAllEmails } from "../controllers/getAllEmails.controller.js";

const router = express.Router();

// Define route for saving emails
router.post("/save-all-emails", saveAllEmails);

router.get("/get-all-emails", getAllEmails);

export default router;

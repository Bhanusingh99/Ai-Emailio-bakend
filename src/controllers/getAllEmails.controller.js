import Email from "../model/emailSchema-model.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI("AIzaSyAoCzx0DlF6rmr7yvv0tt364Q7ktLrUh64");

export const getAllEmails = async (req, res) => {
  try {
    // Set the number of emails to fetch per page
    const emails = await Email.find({});
    res.status(200).json({ emails });
  } catch (error) {
    res.status(500).json({ message: "Error fetching emails", error });
  }
};

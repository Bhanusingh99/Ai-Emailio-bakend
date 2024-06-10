import Email from "../model/emailSchema-model.js";

export const getAllEmails = async (req, res) => {
  try {
    // Get the limit from the query parameters or default to 50
    const limit = parseInt(req.query.limit) || 50;

    // Fetch the emails with a limit
    const emails = await Email.find({}).limit(limit);

    res.status(200).json({ emails });
  } catch (error) {
    res.status(500).json({ message: "Error fetching emails", error });
  }
};

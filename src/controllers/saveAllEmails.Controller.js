import Email from "../model/emailSchema-model.js";

// Controller function to save or update emails in the database
const saveOrUpdateEmails = async (req, res) => {
  try {
    // Extract emails array from request body
    const { emails } = req.body;

    // Check if emails array is provided
    if (!emails || !Array.isArray(emails)) {
      return res.status(400).json({ message: "Invalid request body" });
    }

    // Delete all existing emails from the database
    await Email.deleteMany({});

    // Iterate through each email in the array
    for (const email of emails) {
      if (!email.body) {
        email.body = ""; // Provide default value for body if missing
      }

      // Assuming sender and recipient are properties of the email object
      const { sender, recipient, subject, snippet, body } = email;

      // Find existing email based on sender, recipient, and subject
      const existingEmail = await Email.findOneAndUpdate(
        { sender, recipient, subject },
        { body }, // Update the body of the email
        { upsert: true, new: true } // Create new document if not found, and return updated document
      );

      // Log the updated email
    }

    return res
      .status(200)
      .json({ message: "Emails saved or updated successfully" });
  } catch (error) {
    console.error("Error saving or updating emails:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default saveOrUpdateEmails;

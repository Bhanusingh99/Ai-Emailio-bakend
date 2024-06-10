import { google } from "googleapis";
import UserAccessToken from "../model/accessToken.model.js";

const sendCustomEmail = async (req, res) => {
  try {
    const { emailAddress, body, subject } = req.body;

    // Retrieve access token from the database
    const userToken = await UserAccessToken.findOne();

    if (!userToken) {
      return res.status(400).json({ error: "Access token not found" });
    }

    const { accessToken } = userToken;

    // Create an OAuth2 client using the retrieved access token
    const oAuth2Client = new google.auth.OAuth2();
    oAuth2Client.setCredentials({ access_token: accessToken });

    // Create a transport instance using the OAuth2 client
    const transporter = google.gmail({
      version: "v1",
      auth: oAuth2Client,
    });

    // Create email message
    const message = [
      `To: ${emailAddress}`,
      "Content-Type: text/html; charset=utf-8",
      "MIME-Version: 1.0",
      `Subject: ${subject}`,
      "",
      body,
    ].join("\n");

    // Encode email message in base64
    const encodedMessage = Buffer.from(message)
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");

    // Send email
    const response = await transporter.users.messages.send({
      userId: "me",
      requestBody: {
        raw: encodedMessage,
      },
    });

    res.status(200).json({ message: "Email sent successfully", response });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
};

export default sendCustomEmail;

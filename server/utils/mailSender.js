const axios = require("axios")

const mailSender = async (email, title, body) => {
  try {
    console.log("📧 Attempting to send email to:", email)
    
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: { name: "StudyNotion", email: "sahu75761@gmail.com" },
        to: [{ email: email }],
        subject: title,
        htmlContent: body,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
      }
    )
    console.log("✅ Email sent successfully:", response.data)
    return response.data
  } catch (error) {
    console.error("❌ Email sending failed:", error.message)
    return error.message
  }
}

module.exports = mailSender
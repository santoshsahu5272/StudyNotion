const nodemailer = require("nodemailer")

const mailSender = async (email, title, body) => {
  try {
    console.log("📧 Attempting to send email to:", email)
    console.log("🔧 Email Host:", process.env.MAIL_HOST)
    console.log("👤 Email User:", process.env.MAIL_USER)
    
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      secure: false,
    })

    let info = await transporter.sendMail({
      from: `"Studynotion | CodeHelp" <${process.env.MAIL_USER}>`, // sender address
      to: `${email}`, // list of receivers
      subject: `${title}`, // Subject line
      html: `${body}`, // html body
    })
    console.log("✅ Email sent successfully:", info.response)
    return info
  } catch (error) {
    console.error("❌ Email sending failed:", error.message)
    console.error("Error details:", error)
    return error.message
  }
}

module.exports = mailSender

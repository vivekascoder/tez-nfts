const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config({ path: "../.env.local" });

const cors = require("cors")({
  origin: true,
});

const mailTransport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  service: "gmail",
  auth: {
    user: process.env.GMAIL_MAIL, //set these in your .env file
    pass: process.env.GMAIL_PASSWORD,
  },
});

const APP_NAME = "Tez NFTs";

// A function that sends a mail to the user on post request
exports.sendWelcomeEmail = functions.https.onRequest(async (req, res) => {
  if (req.method === "GET") {
    return res.status(200).json({
      message: "Welcome to Tez NFTs mailing list",
      endpoint: "/",
    });
  } else if (req.method === "POST") {
    const email = req.body.email;
    console.log("RECIEVED_MAIL_REQUEST_FOR", email);
    if (!email) {
      return res.status(422).json({
        error: "You must provide an email",
      });
    }
    const mailOptions = {
      from: `${APP_NAME} <noreply@firebase.com>`,
      to: email,
    };

    mailOptions.subject = `👋 Thanks for joining ${APP_NAME}.`;
    mailOptions.text = `Hey ${
      email || ""
    }!, Welcome to Tez NFTs mailing list, here you will find information about the our platform whenever we made any significant update.`;
    await mailTransport.sendMail(mailOptions);
    // functions.logger.log("Mail sent to:", email);/

    console.log("MAIL_SENT_TO", email);
    return res.status(200).json({
      message: "Mail sent to: " + email,
    });
  }
});

async function sendMail(email, displayName) {}

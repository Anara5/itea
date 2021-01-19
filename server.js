const express = require("express");
const router = express.Router();
const cors = require('cors')({
    origin: true
})
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "anarikrulit@gmail.com",
      pass: "Mymom*2701",
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: "anarikrulit@gmail.com",
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });




/*
const functions = require('firebase-functions')
const nodemailer = require('nodemailer')
const cors = require('cors')({
    origin: true
})

const gmailEmail = functions.config().gmail.email
const gmailPassword = functions.config().gmail.password

const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: gmailEmail,
        pass: gmailPassword,
    },
})

exports.submit = functions.https.onRequest((req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS')
    res.set('Access-Control-Allow-Headers', '*')

    if (req.method === 'OPTIONS') {
    res.end()
    } else {
        cors(req, res, () => {
            if (req.method !== 'POST') {
                return
            }

            const mailOptions = {
                form: req.body.email,
                replyTo: req.body.email,
                to: gmailEmail,
                subject: `${req.body.name} just messaged me from my website`,
                text: req.body.message,
                html: `<p>${req.body.message}</P>`,
            }

            return mailTransport.sendMail(mailOptions).then(() => {
                console.log('New email sent to:', gmailEmail)
                res.status(200).send({
                    isEmailSend: true
                })
                return
            })
        })
    }
})
*/
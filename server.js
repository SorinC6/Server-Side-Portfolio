const express = require("express");
const helmet = require("helmet");

const cors = require("cors"); //needed to disable sendgrid security
const sgMail = require("@sendgrid/mail"); //sendgrid library to send emails
const server = express();

//sendgrid api key

sgMail.setApiKey(process.env.SENDGRID_API_KEY);


server.use(helmet());
server.use(express.json());
server.use(cors());

server.get("/send-email", (req, res) => {
  //Get Variables from query string in the search bar
  const { recipient, sender, topic, text } = req.query;

  //Sendgrid Data Requirements
  const msg = {
    to: recipient,
    from: sender,
    subject: topic,
    text: text
  };

  //Send Email
  sgMail.send(msg).then(msg => {
    console.log(text);
    res.end();
  });
});

module.exports = server;

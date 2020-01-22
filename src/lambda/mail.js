exports.handler = function(event, context, callback) {
  var nodemailer = require("nodemailer");

  // Create the transporter with the required configuration for Gmail
  // change the user and pass !
  const payload = JSON.parse(event.body);

  const { name, email, message } = payload;

  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use SSL
    auth: {
      user: "julie.marie.carra@gmail.com",
      pass: "19121995"
    }
  });

  // setup e-mail data
  var mailOptions = {
    from: email, // sender address (who sends)
    to: "julie.marie.carra@gmail.com", // list of receivers (who receives)
    subject: `Email from portfolio by ${name}`, // Subject line
    text: `${message}`, // plaintext body
    html: message // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      return console.log(error);
    }

    console.log("Message sent: " + info.response);
  });
};

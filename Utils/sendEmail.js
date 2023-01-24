const nodemailer = require("nodemailer");
const nodemailerConfig = require("./nodemailerConfig");

const sendEmail = async () => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "alvera50@ethereal.email",
      pass: "Mbx5Tk3Aq37Zwb2UXa",
    },
  });
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
  //   return transporter.sendMail({
  //     from: '"Coding Addict" <codingaddict@gmail.com>', // sender address
  //     to,
  //     subject,
  //     html,
  //   });
};

module.exports = sendEmail;

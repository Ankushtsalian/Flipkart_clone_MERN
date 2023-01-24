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
    from: '"Fred Foo 👻" <ankushtsalian1@example.com>', // sender address
    to: "admin@admin.com, baz@example.com", // list of receivers
    subject: "TESTING ✔", // Subject line
    text: "TESTING world?", // plain text body
    html: "<b>TESTING world?</b>", // html body
  });
  //   return transporter.sendMail({
  //     from: '"Coding Addict" <codingaddict@gmail.com>', // sender address
  //     to,
  //     subject,
  //     html,
  //   });
};

module.exports = sendEmail;

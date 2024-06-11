const ejs = require("ejs");
const dotenv = require("dotenv");
const path = require("path");
const sendMail = require("../../helpers/SendEmail");
dotenv.config();

const sendResetPasswordEmail = async (email) => {
  ejs.renderFile(
    "templates/resetPassword.ejs",
    async (err, data) => {
      async (err, data) => {
        let messageoptions = {
          from: process.env.EMAIL,
          to: email,
          subject: "Your Reset Password Link",
          html: data,
        };
      };
      try {
        await sendMail(messageoptions);
      } catch (error) {
        console.log(error);
      }
    }
  );
};

module.exports = { sendResetPasswordEmail };

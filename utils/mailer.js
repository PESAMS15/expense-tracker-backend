const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid');


const generateResetToken = () => {
    return uuidv4();
  };

const sendResetPasswordEmail = async (email, resetToken ) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL,
          pass: process.env.PASS
        }
      });
      
      const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Reset Password',
        text: `Click this link to reset your password: https://expense-alpha.vercel.app/reset-password/${resetToken}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

module.exports = { generateResetToken, sendResetPasswordEmail };
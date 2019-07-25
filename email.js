const nodemailer = require('nodemailer');
const email = require('./app.js');
return item,emails,date,time;
const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'emmanueluduebholo205@gmail.com',
        pass: 'Junior1234',
    },
});

module.exports = function sendEmail(to, subject, item) {
    const mailOptions = {
        from: 'emmanueluduebholo205@gmail.com',
        to: email,
        subject: 'Your Reminder Note Today',
        html: item,
    };
    transport.sendMail(mailOptions, (error) => {
        if (error) {
            console.log(error);
        }
    });
};
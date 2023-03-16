// const nodemailer = require("nodemailer");

// const sendMail = async (req,res) =>{
//     let testAccount = await nodemailer.createTestAccount();

//     let transporter = await nodemailer.createTransport({
//         host: "smtp.ethereal.email",
//         port: 587,
//         //secure: false, // true for 465, false for other ports
//         auth: {
//             user: 'alejandrin.konopelski31@ethereal.email',
//             pass: '14TtN5FRQpfQwASsgq'
//         },

//     });
//     res.send("I am sending mail");

//     let info = await transporter.sendMail({
//         from: '"Vedant iyer" <vedantbalachandra123@gmail.com>', // sender address
//         to: "vedantiyer098@gmail.com", // list of receivers
//         subject: "Greetings Vedant ", // Subject line
//         text: "How Are u doing vedant iyer, How have u been doing , i am doing great and what about, how is everything in mumbai.Is it very hot there?", // plain text body
//         html: "<b>How Are u doing vedant iyer, How have u been doing , i am doing great and what about, how is everything in mumbai.Is it very hot there?</b>", // html body
//     })
    
    
//     console.log("Message sent: %s", info.messageId);
//     res.json(info);
// };




// module.exports=sendMail;
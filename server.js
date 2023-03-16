const express = require("express");
const nodemailer = require("nodemailer");
const{google} = require('googleapis')
const sendmail = require("./controllers/sendMail");
const app = express();


const Cl_Id='150928907914-ci1k4hg8u7rsru2oj9otlktubuhss7rc.apps.googleusercontent.com'
const Client_seceret='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'
const REDIRECTuRI='https://developers.google.com/oauthplayground'
const REFRESH_TOKEN='1//044p479bwF1PWCgYIARAAGAQSNwF-L9IrbQAo61EM_F9NgrfsizYNJ0MdcJX3RkpgK2RjxvpXXqAMyUjGWglRcISx7gqZ-IUAtDE'


const OAuth2Client= new google.auth.OAuth2(Cl_Id, Client_seceret, REDIRECTuRI)
OAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN})

async function sendMyMail(){

    const accessToken = await OAuth2Client.getAccessToken()
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            type:'Oauth2',
            user:'vedantbalachandra123@gmail.com',
            client_id:Cl_Id,
            clientSecret:Client_seceret,
            refreshToken:REFRESH_TOKEN,
            accessToken:accessToken
        }
    })

    const mailOptions={
        from:'yours truly <vedantbalachandra123@gmail.com>',
        to:'vedantiyer098@gmail.com',
        subject:'Hello mail using api',
        text:'hello mail from api using my app',
        html:'<h1>hello mail from api using my app</h1>'

    }

    

    const result = await transporter.sendMyMail(mailOptions)
    return result

}


sendMyMail().then(result => console.log('Email sent ', result))
.catch(error => console.log(error.message))
app.get("/", function(request,response){
   response.send("hello");
})

// app.get("/sendmail", sendmail);
app.listen(3000, function(){

    console.log("server has started");
});
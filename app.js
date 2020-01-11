const express = require('express');
const app = express();
const routes = require ('./routes');
const path=require('path')
const bodyParser = require('body-parser')// importing body parser middleware to parse form content from HTML
const nodemailer = require('nodemailer');//importing node mailer

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.set('view engine', 'pug');

app.use(express.static('public'))

// route which captures form details and sends it to your personal mail
app.post('/sendemail',(req,res,next)=>{

  console.log(req.body)
  /*Transport service is used by node mailer to send emails, it takes service and auth object as parameters.
    here we are using gmail as our service
    In Auth object , we specify our email and password
  */
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'hpinandito@gmail.com',//replace with your email
      pass: 'saturnus15'//replace with your password
    }
  });

  /*
    In mail options we specify from and to address, subject and HTML content.
    In our case , we use our personal email as from and to address,
    Subject is Contact name and
    html is our form details which we parsed using bodyParser.
  */
  var mailOptions = {
    from: 'hpinandito@gmail.com',//replace with your email
    to: 'haryo691@gmail.com',//replace with your email
    subject: `Contact name: ${req.body.name}`,
    html:`<h1>Contact details</h1>
          <h2> name:${req.body.name} </h2><br>
          <h2> email:${req.body.email} </h2><br>
          <h2> phonenumber:${req.body.phonenumber} </h2><br>
          <h2> message:${req.body.message} </h2><br>`
  };

  /* Here comes the important part, sendMail is the method which actually sends email, it takes mail options and
   call back as parameter
  */

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.send('error') // if error occurs send error as response to client
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Sent Successfully')//if mail is sent successfully send Sent successfully as response
    }
  });
})

app.use(routes);

app.listen(2500, function () {
  console.log('Example app listening on port 2500!');
})

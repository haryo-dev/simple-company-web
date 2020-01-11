# simple-company-web
Simple Company Profile Website

This is a simple dynamic site made with Node.js and Express.js.

It has an index, contact and about pages, and three specific pages which can be accessed from a list of three items on index page ( The  data extracted from json file.. No database at this simple projects).

The templates inside view folder are using pug templating engine.

For contact page using nodemailer, modules for send emails.
To change sender & receiver email address, edit the mailOptions variable inside app.js file in root folder.

Steps:
1. Git clone this repository
2. Run terminal in your root folder and type: <b>npm install</b>
3. Then, to start application, type: <b>node app.js</b> in your terminal

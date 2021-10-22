const express = require('express');
const nodemailer = require('nodemailer');
//const bodyParser = require('body-parser');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var admin = require("firebase-admin");

app.get('/',(req,res) =>{
  console.log('hello')
    res.send("Hello world");
});


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
const transporter = require('../../mailconfig');
const router = require('express').Router()
const mailTexts = require('../texts/mail_texts')


router.post("/send-contact-form-mail" , async (req,res) => {
  try{

    const {name,email,enquiry} = req.body;

    let selectedLanguage;
    //req.body.userLanguage will carry the language the user selected in client end, If this exists assign it to selectedLanguage else assign the default being "EN"
    if(req.body.userLanguage){
      selectedLanguage = req.body.userLanguage
    }else{
      selectedLanguage = "EN"
    }


    //validations
    if(!name || !email || !enquiry){
      return res.status(400).json({msg: mailTexts.missingfields[selectedLanguage]})
    }


    const mailOptions = {
      from: email,
      to: "gogoume.com@gmail.com", // list of receivers
      subject: "Message From Gogoume Website Contact Form",
      html: `
      <p>You have a new contact request.</p>
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
        <li>Enquiry: ${enquiry}</li>
      </ul>
      `
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err)
        return res.status(400).json({msg: mailTexts.mailfailure[selectedLanguage]})
      } else {
        res.json(true)
      }
    });

  }catch(err){
    res.status(500).json({ error : err.message })
  }
})

module.exports = router;
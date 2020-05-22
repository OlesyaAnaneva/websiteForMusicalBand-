const router = require("express").Router();
const contactModel = require('../models/contactModel');

router.get("/", async (req, res) => {
  const contactdata = await contactModel.find().update();
  res.render("index", { contacts: contactdata });
});

router.get("/contactBack", (req, res) => {
  res.render("back/contactBack");
});

router.post("/contactBack", async (req, res) => {
  const contactdata = await contactModel.create({
    job: req.body.job,
    nameJob: req.body.nameJob,
    emailJob: req.body.emailJob,
    telJob: req.body.telJob,
  });
  res.redirect('/');
});

module.exports = router;

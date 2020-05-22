const router = require("express").Router();
const contactModel = require('../models/contactModel');

router.get("/",  (req, res) => {
  // try {
  //   const contactdata = await contactModel.find();
  //   console.log(contactdata);
  // } catch (err) {
  //   console.log(err)
  // }
  res.render("index");
});

// router.get("/contactBack", (req, res) => {
//   res.render("back/contactBack");
// });

// router.post("/contactBack", async (req, res) => {
//   await contactModel.remove();
//   await contactModel.create({
//     job: req.body.job,
//     nameJob: req.body.nameJob,
//     emailJob: req.body.emailJob,
//     telJob: req.body.telJob,
//   });
//   res.redirect('/');
// });

module.exports = router;

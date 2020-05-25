const router = require("express").Router();

router.get("/",  (req, res) => {
  res.render("index");
});

router.get("/about",  (req, res) => {
  res.render("partials/about");
});

router.get("/news",  (req, res) => {
  res.render("partials/news");
});

router.get("/video",  (req, res) => {
  res.render("partials/video");
});

router.get("/music",  (req, res) => {
  res.render("partials/audio");
});

router.get("/contact",  (req, res) => {
  res.render("partials/contact");
});

module.exports = router;

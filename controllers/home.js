/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render("home", {
    title: "Home"
  });
};

exports.videoGreetingCardLite = (req, res) => {
  res.render("video-greeting-card-lite", {
    title: "Video Greeting Card Lite"
  });
};

exports.videoGreetingCardStandard = (req, res) => {
  res.render("video-greeting-card-standard", {
    title: "Video Greeting Card Standard"
  });
};

exports.greetingCardSmall = (req, res) => {
  res.render("greeting-card-small", {
    title: "Greeting Card"
  });
};

exports.greetingCardLarge = (req, res) => {
  res.render("greeting-card-large", {
    title: "Greeting Card"
  });
};

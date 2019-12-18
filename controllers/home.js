/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render("home", {
    title: "Home"
  });
};

exports.videoGreetingCard = (req, res) => {
  res.render("video-greeting-card", {
    title: "Video Greeting Card"
  });
};

exports.greetingCard = (req, res) => {
  res.render("greeting-card", {
    title: "Greeting Card"
  });
};

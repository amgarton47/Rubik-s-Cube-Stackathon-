const express = require("express");
const app = express();

const path = require("path");

const PORT = process.env.PORT || 4747;

// static middleware
app.use(express.static(path.join(__dirname, "../public")));

// sends index.html
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// error handling endware
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

app.listen(PORT, () => {
  console.log(`App is up and running! Listening on port ${PORT} 🔥🔥🔥`);
});

module.exports = app;

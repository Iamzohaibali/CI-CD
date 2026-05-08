const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).send("CI/CD is working. Deploy successful.");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "CI/CD is working",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



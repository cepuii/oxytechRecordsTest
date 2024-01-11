const { log } = require("console");
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

app.get("/releases", (req, res) => {
  const file = fs.createReadStream("data.json");

  // Set appropriate headers for JSON
  res.setHeader("Content-Type", "application/json");

  // Pipe the file stream to the response stream
  file.pipe(res);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => console.log(port));

// const fs = require("fs");
import fs from "fs";
import express from "express";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = process.env.PORT;

const currentTimeStamp = Date.now() + "";

app.get("/", (request, response) => {
  response.send("Welcome to NodeJS file system");
});

app.get("/write", (request, response) => {
  fs.writeFile("./TextFolder/date-time.txt", currentTimeStamp, (err) => {
    if (err) {
      console.error(`❌ ${err}`);
    }
    response.send("Writing successful 🎊✨");
  });
});

app.get("/readFromDirectory", (req, res) => {
  fs.readdir("./TextFolder", (err, files) => {
    let fileNames = [];
    if (err) console.error(`❌ ${err}`);
    else {
      console.log("\nCurrent directory filenames:");
      files.forEach((file) => fileNames.push(file));
      console.log(fileNames.join(", "));
    }
    res.send(`The filenames are ${fileNames.join(", ")}.`);
  });
});

app.listen(PORT, () =>
  console.log(`Server started in port number ${PORT} successfully`)
);

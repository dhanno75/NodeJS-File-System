// const fs = require("fs");
import fs from "fs";
import express from "express";
const app = express();

const PORT = 4000;

const currentTimeStamp = Date.now() + "";

app.get("/", function (request, response) {
  response.send("Welcome to NodeJS file system");
});

app.get("/write", function (request, response) {
  fs.writeFile("./TextFolder/date-time.txt", currentTimeStamp, (err) => {
    if (err) {
      console.error(`❌ ${err}`);
    }
    response.send("Writing successful 🎊✨");
  });
});

app.listen(PORT, () =>
  console.log(`Server started in port number ${PORT} successfully`)
);

const path = require("path");
const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(
      `<p>please go to <a href='http://localhost:3000/api'>/api</a> for text file with date and time</p> <p>please go to <a href='http://localhost:3000/all'>/all</a> for all text files in the folder</p>`
    );
    res.end();
  }
  if (req.url === "/api") {
    let date = new Date();
    fs.writeFile("date-time.txt", date, function (err) {
      if (err) throw err;
      console.log("created");
    });
    res.write("file created");
    res.end();
  }
  if (req.url === "/all") {
    let filename = path.basename("./date-time.txt");
    res.write(filename);
    res.end();
  }
});

server.listen(3000);

console.log("listening at 3000...");

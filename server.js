const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer((req, res) => {
    console.log("Request URL:", req.url);

    let filePath = "";

    if (req.url === "/" || req.url === "/home") {
        filePath = "home.html";
    } 
    else if (req.url === "/about") {
        filePath = "about.html";
    } 
    else if (req.url === "/contact") {
        filePath = "contact.html";
    } 
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page not found");
        return;
    }

    fs.readFile(path.join(__dirname, filePath), "utf8", (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Error reading file");
            return;
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });

}).listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});

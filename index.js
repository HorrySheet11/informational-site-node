import fs from "fs";
import http from "http";

const server = http.createServer((req, res) => {
	res.setHeader("Content-Type", "text/html");
	let path = "./public/";

	switch (req.url) {
		case "/":
			path += "index.html";
      res.statusCode = 200;
			break;

    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;

    case "/contact-me":
      path += "contact-me.html";
      res.statusCode = 200;
      break;

		default:
      path += "404.html";
      res.statusCode = 404;
			break;
	}

	fs.readFile(path, (err, data) => {
		err ? console.log(err) : res.end(data);
	});
});
server.listen(8080, "localhost", () => {
	console.log("Server running at port 8080");
});

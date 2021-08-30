var http = require("http");
var fs = require("fs");
http
	.createServer(function (req, res) {
		const bio = {
			name: "prem",
			age: 21,
		};
		const jso = JSON.stringify(bio);

		fs.writeFileSync("jso.json", jso);

		fs.readFile("jso.json", function (err, data) {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(data);
			res.end();
		});
	})

	.listen(7000, () => {
		console.log("server started");
	});

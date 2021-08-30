var http = require("http");
var os = require("os");
var fs = require("fs");
http
	.createServer((req, res) => {
		const hostname = os.hostname();

		const architecture = os.arch();
		const platform = os.platform();
		const release = os.release();
		const tmpdir = os.tmpdir();
		const type = os.type();
		const uptime = os.version();
		array = [hostname, architecture, platform, release, tmpdir, type, uptime];
		const data = JSON.stringify(array);
		fs.writeFileSync("array.json", data);
		fs.readFile("array.json", (err, data) => {
			if (err) {
				res.write("error");
			}
			res.write(data);
			res.end();
		});
	})
	.listen(7000, () => {
		console.log("server strated");
	});

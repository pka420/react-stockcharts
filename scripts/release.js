var fs = require("fs");
var path = require("path");

var root = path.join(__dirname, "..");

var origPackage = fs.readFileSync(path.join(root, "package.json")).toString();

try {
	var pkg = JSON.parse(origPackage);
	delete pkg.devDependencies;
	delete pkg.scripts;
	delete pkg.browserify;
	pkg.main = "index.ts";
	pkg.module = "es/index.ts";
	pkg.esnext = "es/index.ts";

	const buildPackage = JSON.stringify(pkg, null, 2);

	fs.writeFile(path.join(root, "build", "package.json"), buildPackage, function() {
		console.log("CJS package.json file rendered");
	});
} catch (er) {
	console.error("package.json parse error: ", er);
	process.exit(1);
}

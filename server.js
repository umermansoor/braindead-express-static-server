/* 
 * A simple static file server using express.js. To use this program, put static
 * files in the `public/` folder. Then start the server using the following command:
 *
 * $ npm start
 *
 * By default, the server will start on port 3000. To fetch your static file, open
 * your web browser and then do the following:
 * 
 * http://localhost:3000/static_filename.html
 *
 * Git Repo: http://github.com/umermansoor/braindead-express-static-server
 */

var express = require("express"),
	app = express(),
	staticFolder = "public",
	port = process.argv.length == 3 ? process.argv[2] : 3000; // Use the user supplied port. If
															  // no port is supplied, use 3000.

app.configure(function() {
	app.use(express.methodOverride());
	app.use(express.bodyParser());
	app.use(app.router);
	app.use(express.static(__dirname + '/' + staticFolder));
});

app.get("/", function(req,res) {
	res.redirect("/index.html");
});

// Create a single non-static route
app.get("/about", function(req,res) {
	res.send("The only non-static page. For more information, visit: http://github.com/umermansoor/braindead-express-static-server ");
});

app.listen(port);
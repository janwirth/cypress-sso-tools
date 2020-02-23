// provide local certificates for developing and testing OIDC features
var fs = require("fs");
var path = require("path");
var selfsigned = require("selfsigned");

// configure paths (if you change this, alos change the .gitignore)
const cert = path.join(__dirname, "localhost-cert.pem");
const key = path.join(__dirname, "localhost-key.pem");

// ensure certs are there
if (fs.existsSync(cert) && fs.existsSync(key)) {
  console.log("SSL certificates found");
} else {
  var pems = selfsigned.generate();
  fs.writeFileSync(cert, pems.cert);
  fs.writeFileSync(key, pems.private);
  console.log("SSL certificates generated");
}

module.exports = {
  cert: fs.readFileSync(cert),
  key: fs.readFileSync(key)
};

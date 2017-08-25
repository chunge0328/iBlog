const server = require('./server/server')
function TomDog() {}

TomDog.prototype.useRouter = function (routes) {
    this.routes = routes
}

TomDog.prototype.run = function (port, host) {
    this.port = port
    this.host = host
    server.call(this);
}

module.exports = TomDog
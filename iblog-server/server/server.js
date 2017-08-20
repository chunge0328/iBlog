const http = require('http')
const router = require('../router/router')

function Server() {
    // this 是由 index.js中传来的TomDog实例
    const server = http.createServer((req, res) => {
        router.call(this,req,res)
    }).listen(this.port, this.host, () => {
        console.log('the server running ... ');
    })
}

module.exports = Server
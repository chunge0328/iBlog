const http = require('http')
const router = require('../router/router')

function Server() {
    // this 是由 index.js中传来的TomDog实例
    const server = http.createServer((req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
        res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
        router.call(this, req, res)
    }).listen(this.port, this.host, () => {
        console.log('the server running ... ')
    })
}

module.exports = Server
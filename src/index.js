var qtumjs = require('bitcoinjs-lib')

Object.assign(qtumjs.networks, require('./networks'))

module.exports = qtumjs
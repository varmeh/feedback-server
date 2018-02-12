let keys

if (process.env.NODE_ENV === 'production') {
    // Production keys
    keys = require('./prod')
} else {
    // Dev Keys
    keys = require('./dev')
}

module.exports = keys

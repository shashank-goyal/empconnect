const monk = require('monk')
const connection = monk('mongodb://admin:root@ds159033.mlab.com:59033/employee-connect-db')

module.exports = connection
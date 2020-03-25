const mongoose = require('mongoose')

const app = require('./app')

mongoose.connect('mongodb://nick:nikos1234@ds119080.mlab.com:19080/graphql_example', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(console.log('Database connected'))
.catch(e => console.log('Error connecting to database: ', e))
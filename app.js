const express = require('express')
const app = express()
const graphqlHTTP = require('express-graphql')

const graphQLSchema = require('./graphqlSchema')

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: graphQLSchema
}))

app.listen(4000, () => {
    console.log('Server running at 4000')
})

module.exports = app
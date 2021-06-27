// dependencies
const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const helmet = require('helmet')

// Import routes
const companiesRouter = require('./routes/companies-routes')

// Set default port for express app
const PORT = process.env.PORT || 4001

const app = express()

// Apply middleware
// Note: needs to be at the top, above routes
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

// Impment companies route
app.use('/companies', companiesRouter)

// 500 error route
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something is broken (500).')
})

// 404
app.use(function (err, req, res, next) {
    //console.error(err.stack)
    res.status(404).send('Sorry we could not find that (404).')
})

// Start express app
app.listen(PORT, function() {
    // eslint-disable-next-line no-template-curly-in-string
    console.log('Server is running on: ${PORT}')
})


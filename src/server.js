require('dotenv').config()
const port = process.env.PORT || 5000
const express = require('express')
const cors = require('cors')
const { errorHandler } = require('./middleware/errorMiddleware')
const { corsProtector } = require('./middleware/httpClientMiddleware')
const app = express()

app.use(cors(corsProtector))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api/email', require('./routes/mailRoutes'))
app.use(errorHandler)

app.listen(port)

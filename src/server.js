require('dotenv').config()
const port = process.env.PORT || 5000
const express = require('express')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())


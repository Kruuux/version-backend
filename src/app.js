require('dotenv').config()

const express = require('express')
const app = express()
const port = 80

const serverStartTime = Date.now();
const version = '1.0.0'

app.get('/health', (req, res) => {
  res.json({
    environment: process.env.ENVIRONMENT,
    serverStartTimeISO: new Date(serverStartTime).toISOString(),
    serverUptimeInSeconds: process.uptime()
  })
})

app.get('/version', (req, res) => {
  res.json({ version, environment: process.env.ENVIRONMENT })
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
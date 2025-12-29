const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5002

app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        port: PORT,
        env_port: process.env.PORT,
        node_env: process.env.NODE_ENV
    })
})

app.listen(PORT, () => {
    console.log(`Test server on port ${PORT}`)
})

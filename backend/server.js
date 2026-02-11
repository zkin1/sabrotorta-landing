const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const path = require('path')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')

dotenv.config({ path: path.join(__dirname, '.env') })

const app = express()
const PORT = process.env.PORT || 5000

app.use(helmet())

const allowedOrigins = process.env.CLIENT_URLS
    ? process.env.CLIENT_URLS.split(',').map(url => url.trim())
    : ['http://localhost:3000', 'http://localhost:3001']

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin) || process.env.NODE_ENV !== 'production') {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    methods: 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization',
    optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(express.json({ limit: '1mb' }))

// Rate Limiting global
const globalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
})
app.use(globalLimiter)

app.get('/api/health', (req, res) => res.json({ status: 'Backend landing OK' }))

app.listen(PORT, () => {
    console.log(`✅ Backend landing ejecutándose en puerto ${PORT}`)
})

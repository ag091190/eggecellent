import express from 'express'
import cors from 'cors'
import apiRouter from './routes/index.js'

const app = express()
const port = process.env.EXPRESS_PORT

app.use(express.json())

app.use(cors({
    origin: process.env.FRONTEND_URL
}));

app.use('/api', apiRouter)

app.listen(port, () => {
    console.log(`Eggcellent backend started on port ${port}`)
})
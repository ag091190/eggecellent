import express from 'express'
import dotenv from "dotenv";
import cors from 'cors'
import * as controller from './controllers/controller.js'

dotenv.config();

const app = express()
const port = process.env.EXPRESS_PORT

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(express.json())
app.use(cors(corsOptions))

app.post('/register', async (req, res) => {
    try {
        console.log('hit register')
        await controller.handlePasskeyRegister(req, res)
    } catch (err) {
        console.error(err)
    }
})

app.post('/login', async (req, res) => {
    try {
        console.log('hit login')
        await controller.handlePasskeyLogin(req, res)
    } catch (err) {
        console.error(err)
    }
})

app.listen(port, () => {
    console.log(`Eggcellent backend started on port ${port}`)
})
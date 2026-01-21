import express from 'express'
import dotenv from "dotenv";
import * as controller from './controllers/controller.js'

dotenv.config();

const app = express()
const port = process.env.EXPRESS_PORT

app.use(express.json())

app.post('/register', (req, res) => {
    try {
        console.log('hit register')
        controller.handlePasskeyRegister(req, res)
    } catch (err) {
        console.error(err)
    }
})

app.listen(port, () => {
    console.log(`Eggcellent backend started on port ${port}`)
})
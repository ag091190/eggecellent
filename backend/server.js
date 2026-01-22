import express from 'express'

const app = express()
const port = process.env.EXPRESS_PORT

app.use(express.json())

app.post('/api', (req, res) => {
    console.log('/api received request')
    res.send('this is a response from /api')
})

app.listen(port, () => {
    console.log(`Eggcellent backend started on port ${port}`)
})
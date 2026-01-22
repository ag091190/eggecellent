import express from 'express'
import authRoutes from './auth.route.js'

const apiRouter = express.Router()
apiRouter.use('/auth', authRoutes)

export default apiRouter
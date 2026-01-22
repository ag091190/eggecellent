import { authService } from "../services/index.js";
import { validateRegistration } from "../utils/validators.js"

const registerUser = async (req, res) => {
    try {
        console.log('reached registerUser auth controller', req.body)
        const validation = validateRegistration(req.body)
        if (!validation.isValid) {
            return res.status(400).json({
                message: "User registration failed",
                errors: validation.errors
            })
        }

        console.log('req.body: ', req.body)
        const newUser = await authService.registerUser(req.body)
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export { registerUser }
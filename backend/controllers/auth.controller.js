import { authService } from "../services/index.js";

const registerUser = async (req, res) => {
    try {
        console.log('reached registerUser auth controller')
        const newUser = await authService.registerUser(req.body)
        res.status(201).json(newUser)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export { registerUser }
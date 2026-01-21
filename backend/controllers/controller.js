import * as service from '../services/services.js'

async function handlePasskeyRegister(req, res) {
    const { start, finish, credential } = req.body;

    try {
        if (start) {
            const createOptions = await service.startServerPasskeyRegistration();
            console.log("registration start");
            return res.json({ createOptions });
        }
        if (finish) {
            await finishServerPasskeyRegistration(credential);
            return res.json({ message: "Registered Passkey" });
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json(error);
    }
}

export { handlePasskeyRegister }
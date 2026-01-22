import * as service from '../services/services.js'

async function handlePasskeyRegister(req, res) {
    const { start, finish, credential } = req.body;

    try {
        if (start) {
            const createOptions = await service.startServerPasskeyRegistration();
            console.log("registration start");
            console.log(createOptions);
            return res.json({ createOptions });
        }
        if (finish) {
            await service.finishServerPasskeyRegistration(credential);
            return res.json({ message: "Registered Passkey" });
        }
    } catch (error) {
        console.error(error)
        return res.status(500).json(error);
    }
}

async function handlePasskeyLogin(req, res) {
    const { start, finish, options } = req.body;

    try {
        if (start) {
            const loginOptions = await service.startServerPasskeyLogin();
            console.log('loginOptions', loginOptions)
            return res.json({ loginOptions });
        }
        if (finish) {
            const jwtToken = await service.finishServerPasskeyLogin(options);
            const user = 'anon';
            console.log("user", user);
            const sessionId = crypto.randomUUID()
            res.cookie("sessionId", sessionId);
            return res.json({ message: " Passkey Login successful" });
        }
    } catch (error) {
        console.error(error);
        return res
            .status(500)
            .json({ message: "An error occurred during the passke login process." });
    }
}

export { handlePasskeyRegister, handlePasskeyLogin }
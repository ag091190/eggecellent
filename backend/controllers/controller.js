async function handlePasskeyRegister(req, res) {
    const { user } = req;
    const userID = user.id;

    if (!userID) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    console.log("userId", userID);

    const { start, finish, credential } = req.body;

    try {
        if (start) {
            const createOptions = await startServerPasskeyRegistration(userID);
            console.log("registration start");
            return res.json({ createOptions });
        }
        if (finish) {
            await finishServerPasskeyRegistration(credential);
            return res.json({ message: "Registered Passkey" });
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}

export { handlePasskeyRegister }
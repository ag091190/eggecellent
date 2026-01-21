import { tenant } from "@teamhanko/passkeys-sdk";
import dotenv from "dotenv";

dotenv.config();

const db = {
    users: [
        { id: 'bob' },
        { id: 'susan' },
        { id: 'lisa' },
    ]
}

const passkeyApi = tenant({
    apiKey: process.env.PASSKEYS_API_KEY,
    tenantId: process.env.PASSKEYS_TENANT_ID,
});

async function startServerPasskeyRegistration(userID) {
    const user = db.users.find((user) => user.id === userID);

    const createOptions = await passkeyApi.registration.initialize({
        userId: user.id,
        username: user.email || "",
    });

    return createOptions;
}

async function finishServerPasskeyRegistration(credential) {
    await passkeyApi.registration.finalize(credential);
}

export { startServerPasskeyRegistration, finishServerPasskeyRegistration }
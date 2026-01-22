import { tenant } from "@teamhanko/passkeys-sdk";
import dotenv from "dotenv";

dotenv.config();

const passkeyApi = tenant({
    apiKey: process.env.PASSKEYS_API_KEY,
    tenantId: process.env.PASSKEYS_TENANT_ID,
});

async function startServerPasskeyRegistration() {
    const createOptions = await passkeyApi.registration.initialize({
        userId: 'anon',
        username: 'anon@yellow.com'
    });

    return createOptions;
}

async function finishServerPasskeyRegistration(credential) {
    await passkeyApi.registration.finalize(credential);
}

async function startServerPasskeyLogin() {
    const options = await passkeyApi.login.initialize();
    return options;
}

async function finishServerPasskeyLogin(options) {
    console.log('options', options)
    const response = await passkeyApi.login.finalize(options);
    return response;
}

export { startServerPasskeyRegistration, finishServerPasskeyRegistration, startServerPasskeyLogin, finishServerPasskeyLogin }
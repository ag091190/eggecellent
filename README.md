# React + Hanko

This is a minimal react app demonstrating registration and login via usernameless and passwordless passkey

## Hanko Passkeys SDK

The app uses passkey sdk node module and implemented with reference to integration example found on hanko docs here (https://docs.hanko.io/passkey-api/js-sdk)

## Note

This app should be implemented with a user storage that persists user id and password such that passkey created is tied to a specific user
Minimally, registration with user email then verified via activation email could be sufficient in a passwordless setup
export const validateRegistration = (userData) => {
    const errors = []

    if (!userData) {
        return {
            isValid: false,
            errors: ["Request body is empty"]
        }
    }

    try {
        const { username, email, password } = userData

        if (!username || username.trim().length < 3) {
            errors.push("username must be at least 3 characters long.")
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            errors.push("A valid email address is required.");
        }

        if (!password || password.length < 8) {
            errors.push("Password has to be at least 8 characters long.")
        }
    } catch (error) {
        console.error('error: ', error)
        errors.push("User data is invalid")
    }

    return {
        isValid: errors.length === 0,
        errors
    }
}
const registerUser = async (userData) => {
    const { username, email, password } = userData

    if (username === 'bob') {
        throw new Error("Bob can't register, we don't like Bob")
    }

    const newUser = {
        "message": "all good"
    }

    return newUser
}

export { registerUser }
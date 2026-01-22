import pool from '../config/db.js'

const registerUser = async (userData) => {
    const { username, email, password } = userData

    const newUser = await pool.query(
        `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email`,
        [username, email, password]
    )

    console.log('inserted to db')
    console.log(newUser)

    return newUser[0]
}

export { registerUser }
import pool from '../config/db.js'
import bcrypt from 'bcrypt'

const saltRounds = 10

const registerUser = async (userData) => {
    const {username, email, password} = userData

    const hashedPassword = await bcrypt.hash(password, saltRounds)

    console.log(hashedPassword)

    const newUser = await pool.query(
        `INSERT INTO users (username, email, hashedPassword)
         VALUES ($1, $2, $3) RETURNING id, username, email`,
        [username, email, hashedPassword]
    )

    console.log('inserted to db')
    console.log('newUser', newUser)

    return newUser[0]
}

export {registerUser}
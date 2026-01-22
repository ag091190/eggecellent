import pg from 'pg'
const { Pool } = pg

const pool = new Pool()

pool.on('connect', () => {
    console.log('🐘 Connected to Postgres');
})

export default pool
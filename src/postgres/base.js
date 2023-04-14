import pkg from 'pg';
const { Pool } = pkg;
import {migration} from './models.js'

export default function connectDatabase () { 
    let pool = new Pool({
        user: 'postgres',
        password: 'postgres',
        host: 'localhost',
        database: 'postgres',
        port: '5432',
    });
    pool.connect()
    .then(() => {
        console.log('Connected to PostgreSQL database');
    })
    .catch(err => {
        console.error('Error connecting to PostgreSQL database', err);
    });   
    return pool
}

export const migrate = async () => {
  try {
    const client = await pool.connect();
    const result = await client.query(migration);
    console.log('Query result:', result.rows);
    client.release();
  } catch (err) {
    console.error('Error executing query:', err);
  }
};
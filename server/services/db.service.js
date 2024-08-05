import pkg from "pg";
const { Pool } = pkg;
import "dotenv/config";

export const pool = new Pool({
  user: process.env.DATABASE_USER,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
  host: process.env.DATABASE_HOST,
});

const connectDb = async () => {
  try {
    await pool.connect();
    console.log("Bazaga ulandi");
  } catch (err) {
    console.log("Bazaga ulanishda hatolik boldi", err.message);
  }
};

async function setupTables() {
  await pool.query(`CREATE TABLE IF NOT EXISTS users (
          id INTEGER UNIQUE,
          name VARCHAR(100),
          username VARCHAR(100)
      )`);
}

export async function initDatabase() {
  await connectDb();
  await setupTables();
}

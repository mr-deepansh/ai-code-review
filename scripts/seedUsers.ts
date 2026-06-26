import 'dotenv/config';
import { randomUUID } from 'crypto';
import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import { users } from '../src/db/schema';

async function main() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error('DATABASE_URL is not defined in .env');
  }

  const pool = new Pool({
    connectionString,
  });
  const db = drizzle(pool);

  const userData = [
    {
      id: randomUUID(),
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
    },
    { id: randomUUID(), name: 'Bryan Lee', email: 'bryan.lee@example.com' },
    {
      id: randomUUID(),
      name: 'Carla Martinez',
      email: 'carla.martinez@example.com',
    },
    { id: randomUUID(), name: 'Derek Smith', email: 'derek.smith@example.com' },
    { id: randomUUID(), name: 'Elena Rossi', email: 'elena.rossi@example.com' },
  ];

  try {
    const insertResult = await db.insert(users).values(userData);
    console.log(`Inserted ${userData.length} users successfully.`);
    console.log(insertResult);
  } catch (error) {
    console.error('Failed to insert users:', error);
  } finally {
    await pool.end();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

import { drizzle } from"drizzle-orm/node-postgres";
import { env } from "@/env";
import { Pool } from "pg";

const globalForDb = globalThis as unknown as {
  conn: Pool | undefined
};
const pool = globalForDb.conn ?? new Pool({
  connectionString: env.DATABASE_URL,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 30000,
});

if (env.NODE_ENV !== "production") globalForDb.conn = pool;

export const db = drizzle(pool);
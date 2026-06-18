import { db } from "@/db";
import { type InferModel } from "drizzle-orm";
import { users } from "@/db/schema";

export const dynamic = "force-dynamic";

export default async function Home() {
  let allUsers: InferModel<typeof users>[] = [];

  try {
    allUsers = await db.select().from(users);
  } catch (error) {
    console.error("Database query failed:", error);
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-xl font-bold">Database Users</h1>
        {allUsers.length > 0 ? (
          allUsers.map((user) => (
            <p key={user.id}>
              {user.name} - {user.email}
            </p>
          ))
        ) : (
          <p>No users found or unable to connect to the database.</p>
        )}
      </main>
    </div>
  );
}

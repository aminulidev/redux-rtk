import { AddUser } from "./components/add-user";
import { UsersList } from "./components/users-list";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-4">
        <div>
            <Link className="text-blue-500 hover:text-slate-800 hover:transition" href="/api-users">API Users</Link>
        </div>
      <AddUser/>
      <UsersList/>
    </main>
  );
}

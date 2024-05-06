import { AddUser } from "./components/add-user";
import { UsersList } from "./components/users-list";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-4">
      <AddUser/>
      <UsersList/>
    </main>
  );
}

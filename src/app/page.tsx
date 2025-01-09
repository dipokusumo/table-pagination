import Table from "../components/Table";
import Pagination from "../components/Pagination";

async function fetchUsers(skip: number, limit: number) {
  const response = await fetch(`https://dummyjson.com/users?limit=${limit}&skip=${skip + 1}`);
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
}

export default async function Page({ searchParams}: { searchParams?: { [key: string]: string }; }) {
  const page = parseInt(searchParams?.page || "1");
  const limit = 10;
  const skip = (page - 1) * limit;

  const data = await fetchUsers(skip, limit);
  const { users, total } = data;
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">User Table with Pagination</h1>
      <Table users={users} />
      <Pagination currentPage={page} totalPages={totalPages} />
    </div>
  );
}

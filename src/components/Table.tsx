interface User {
  id: number
  firstName: string
  lastName: string
  maidenName?: string
  email: string
  phone: string
  address: {
    address: string
    city: string
    state: string
    country: string
  }
  company: {
    name: string
  }
  role: string
}

const Table = ({ users }: { users: User[] }) => {
    return (
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-3 py-3">ID</th>
              <th className="px-3 py-3">Nama</th>
              <th className="px-3 py-3">Email</th>
              <th className="px-3 py-3">Telepon</th>
              <th className="px-3 py-3">Alamat</th>
              <th className="px-3 py-3">Perusahaan</th>
              <th className="px-3 py-3">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-3 py-3">{user.id}</td>
                <td className="px-3 py-3">{`${user.firstName} ${user.lastName} ${user?.maidenName}`}</td>
                <td className="px-3 py-3">{user.email}</td>
                <td className="px-3 py-3">{user.phone}</td>
                <td className="px-3 py-3">{`${user.address?.address}, ${user.address?.city}, ${user.address?.state}, ${user.address?.country}`}</td>
                <td className="px-3 py-3">{user.company?.name}</td>
                <td className="px-3 py-3">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };  

export default Table;

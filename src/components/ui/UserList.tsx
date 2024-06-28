import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Liste des Utilisateurs</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="p-4 border rounded-md">
            <div className="font-bold">{user.name}</div>
            <div className="text-gray-600">{user.email}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;

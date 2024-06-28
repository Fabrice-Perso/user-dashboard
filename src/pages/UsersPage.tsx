import React from 'react';
import UserList from '@/components/ui/UserList';
import UserForm from '@/components/ui/UserForm';

const UsersPage: React.FC = () => {
  const [users, setUsers] = React.useState([
    { id: 1, name: 'John Doe', email: 'john..example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane..example.com' },
  ]);

  const addUser = (name: string, email: string) => {
    const newUser = { id: users.length + 1, name, email };
    setUsers([...users, newUser]);
  };

  return (
    <div className="p-4">
      <UserList users={users} />
      <UserForm addUser={addUser} />
    </div>
  );
};

export default UsersPage;

import React, { useState } from 'react';
import UserList from '@/components/ui/UserList';
import UserForm from '@/components/ui/UserForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import StatsCard from '@/components/ui/StatsCard';
import UserChart from '@/components/ui/UserChart';

interface User {
  id: number;
  name: string;
  email: string;
}

const DashboardPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
  ]);

  const addUser = (name: string, email: string) => {
    const newUser = { id: users.length + 1, name, email };
    setUsers([...users, newUser]);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <StatsCard title="Nombre d'utilisateurs" value={users.length.toString()} />
        <StatsCard title="Autre Statistique" value="123" />
        <StatsCard title="Encore une Statistique" value="456" />
      </div>
      <Card className="w-full max-w-lg mx-auto mb-4">
        <CardHeader>
          <CardTitle>Utilisateurs ajoutés par mois</CardTitle>
        </CardHeader>
        <CardContent>
          <UserChart />
        </CardContent>
      </Card>
      <Card className="w-full max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Tableau de Bord des Utilisateurs</CardTitle>
        </CardHeader>
        <CardContent>
          <UserList users={users} />
          <UserForm addUser={addUser} />
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;

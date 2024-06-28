import React, { useState } from 'react';

interface UserFormProps {
  addUser: (name: string, email: string) => void;
}

const UserForm: React.FC<UserFormProps> = ({ addUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addUser(name, email);
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-xl font-bold mb-4">Ajouter un Utilisateur</h2>
      <div className="mb-4">
        <label className="block mb-2">Nom</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md">
        Ajouter
      </button>
    </form>
  );
};

export default UserForm;

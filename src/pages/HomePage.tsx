import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/dashboard');
  };

  return (
    <div className="p-4">
      <Card className="w-full max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Bienvenue au Tableau de Bord</CardTitle>
          <CardDescription>Gérez vos utilisateurs facilement.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Utilisez le bouton ci-dessous pour accéder au tableau de bord.</p>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleStartClick}>
            Commencer
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default HomePage;

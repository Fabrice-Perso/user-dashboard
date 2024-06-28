import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Mon Tableau de Bord</div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/" className={cn('text-white hover:text-gray-400')}>
                Accueil
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/dashboard" className={cn('text-white hover:text-gray-400')}>
                Tableau de Bord
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import DashboardPage from './pages/DashboardPage';
import Navbar from './components/ui/Navbar';


const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="*" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
};

export default App;

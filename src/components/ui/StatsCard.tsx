import React from 'react';

interface StatsCardProps {
  title: string;
  value: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="text-gray-500">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
};

export default StatsCard;

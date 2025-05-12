import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const userRole = 'member'; // or 'member'

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar role={userRole} />
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

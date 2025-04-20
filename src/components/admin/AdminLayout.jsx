import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { FaUsers, FaUserTie, FaTrophy, FaFootballBall, FaUserShield, FaClipboardList, FaCalendarAlt, FaDollarSign } from 'react-icons/fa';
import Sidebar from './Sidebar';

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}

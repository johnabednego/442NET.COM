import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaChartPie,
  FaUsers,
  FaUserTie,
  FaTrophy,
  FaFootballBall,
  FaClipboardList
} from 'react-icons/fa';

/**
 * Sidebar navigation for Admin panel with exact match on Overview
 */
const links = [
  { to: '/dashboard',               label: 'Overview',    icon: <FaChartPie />,     end: true  },
  { to: 'admin/users',              label: 'Users',       icon: <FaUsers />,        end: false },
  { to: 'admin/clubs',              label: 'Clubs',       icon: <FaUserTie />,      end: false },
  { to: 'admin/tournaments',        label: 'Tournaments', icon: <FaTrophy />,       end: false },
  { to: 'admin/matches',            label: 'Matches',     icon: <FaFootballBall />, end: false },
  { to: 'admin/players',            label: 'Players',     icon: <FaClipboardList />,end: false }
  // add Officials, Bookings, Subscriptions here...
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#011B2B] text-white flex flex-col">
      <h2 className="text-2xl font-bold p-6">
          Admin Panel
      </h2>
      <nav className="flex-1">
        {links.map(({ to, label, icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-3 p-4 hover:bg-gray-800 ${
                isActive ? 'bg-gray-800 text-[#01FFFF]' : 'text-white'
              }`
            }
          >
            <span className="text-xl">{icon}</span>
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

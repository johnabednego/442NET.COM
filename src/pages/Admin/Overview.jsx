import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import baseUrl from '../../components/baseUrl';
import {
  FaUsers,
  FaUserTie,
  FaTrophy,
  FaFootballBall,
  FaClipboardList,
  FaUserShield,
  FaCalendarAlt,
  FaDollarSign,
  FaChartPie
} from 'react-icons/fa';

export default function Overview() {
  const [counts, setCounts] = useState({
    users: 0,
    clubs: 0,
    tournaments: 0,
    matches: 0,
    players: 0,
    officials: 0,
    bookings: 0,
    subscriptions: 0
  });

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const token = localStorage.getItem('token');
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const [
          usersRes,
          clubsRes,
          tournRes,
          matchRes,
          playerRes,
          offRes,
          bookRes,
          subRes
        ] = await Promise.all([
          axios.get(`${baseUrl}/users`),
          axios.get(`${baseUrl}/clubs`),
          axios.get(`${baseUrl}/tournaments`),
          axios.get(`${baseUrl}/matches`),
          axios.get(`${baseUrl}/players`),
          axios.get(`${baseUrl}/officials`),
          axios.get(`${baseUrl}/bookings`),
          axios.get(`${baseUrl}/subscriptions`)
        ]);

        setCounts({
          users: usersRes.data.length,
          clubs: clubsRes.data.length,
          tournaments: tournRes.data.length,
          matches: matchRes.data.length,
          players: playerRes.data.length,
          officials: offRes.data.length,
          bookings: bookRes.data.length,
          subscriptions: Array.isArray(subRes.data) ? subRes.data.length : 0
        });
      } catch {
        toast.error('Failed to load statistics');
      }
    };
    fetchCounts();
  }, []);

  const cards = [
    { label: 'Users',          icon: <FaUsers size={32} />,        count: counts.users },
    { label: 'Clubs',          icon: <FaUserTie size={32} />,      count: counts.clubs },
    { label: 'Tournaments',    icon: <FaTrophy size={32} />,       count: counts.tournaments },
    { label: 'Matches',        icon: <FaFootballBall size={32} />, count: counts.matches },
    { label: 'Players',        icon: <FaClipboardList size={32} />,count: counts.players },
    { label: 'Officials',      icon: <FaUserShield size={32} />,   count: counts.officials },
    { label: 'Bookings',       icon: <FaCalendarAlt size={32} />,  count: counts.bookings },
    { label: 'Subscriptions',  icon: <FaDollarSign size={32} />,   count: counts.subscriptions }
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-[#011B2B] flex items-center gap-2">
        <FaChartPie /> Admin Overview
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map(c => (
          <div
            key={c.label}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col items-center"
          >
            <div className="text-[#011B2B] mb-4">{c.icon}</div>
            <h2 className="text-2xl font-semibold mb-2 text-[#011B2B]">{c.count}</h2>
            <p className="text-gray-600">{c.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

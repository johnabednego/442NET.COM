import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import baseUrl from '../../../components/baseUrl';

export default function TournamentsList() {
  const [tournaments, setTournaments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTournaments();
  }, []);

  const fetchTournaments = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get(`${baseUrl}/tournaments`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTournaments(res.data);
    } catch (err) {
      toast.error('Failed to load tournaments');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this tournament?')) return;
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${baseUrl}/tournaments/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTournaments(tournaments.filter(t => t._id !== id));
      toast.success('Tournament deleted');
    } catch (err) {
      toast.error(err?.response?.data?.message || 'Failed to delete tournament');
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Manage Tournaments</h1>
        <button
          onClick={() => navigate('new')}
          className="bg-[#01FFFF] text-[#011B2B] px-4 py-2 rounded-md"
        >
          + New Tournament
        </button>
      </div>
      <table className="min-w-full bg-white rounded-md shadow-md">
        <thead className="bg-[#011B2B] text-white">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Format</th>
            <th className="p-3">Dates</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tournaments.map(t => (
            <tr key={t._id} className="border-b">
              <td className="p-3">{t.name}</td>
              <td className="p-3">{t.format.replace('-', ' ')}</td>
              <td className="p-3">{new Date(t.startDate).toLocaleDateString()} - {new Date(t.endDate).toLocaleDateString()}</td>
              <td className="p-3 flex gap-2">
                <button
                  onClick={() => navigate(`${t._id}/edit`)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(t._id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

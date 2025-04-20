import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import baseUrl from '../../../components/baseUrl';

export default function ClubsList() {
  const [clubs, setClubs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchClubs();
  }, []);

  const fetchClubs = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get(`${baseUrl}/clubs`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setClubs(res.data);
    } catch (err) {
      toast.error('Failed to load clubs');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this club?')) return;
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${baseUrl}/clubs/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setClubs(clubs.filter(c => c._id !== id));
      toast.success('Club deleted');
    } catch (err) {
      toast.error(err?.response?.data?.message || 'Failed to delete club');
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Manage Clubs & Academies</h1>
        <button
          onClick={() => navigate('new')}
          className="bg-[#01FFFF] text-[#011B2B] px-4 py-2 rounded-md"
        >
          + New Club
        </button>
      </div>
      <table className="min-w-full bg-white rounded-md shadow-md">
        <thead className="bg-[#011B2B] text-white">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Contact Email</th>
            <th className="p-3">Location</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clubs.map(club => (
            <tr key={club._id} className="border-b">
              <td className="p-3">{club.name}</td>
              <td className="p-3">{club.contactEmail}</td>
              <td className="p-3">{club.city}, {club.stateOrRegion}, {club.country}</td>
              <td className="p-3 flex gap-2">
                <button
                  onClick={() => navigate(`${club._id}/edit`)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(club._id)}
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

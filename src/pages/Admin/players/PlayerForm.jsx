import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import baseUrl from '../../../components/baseUrl';

export default function PlayerForm() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: '',
    age: '',
    position: '',
    club: '',
    jerseyNumber: '',
    photoUrl: ''
  });
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchClubs();
    if (isEdit) fetchPlayer();
  }, [id]);

  const fetchClubs = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get(`${baseUrl}/clubs`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setClubs(res.data);
    } catch {
      toast.error('Failed to load clubs');
    }
  };

  const fetchPlayer = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get(`${baseUrl}/players/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setForm({
        fullName: res.data.fullName,
        age: res.data.age || '',
        position: res.data.position,
        club: res.data.club._id,
        jerseyNumber: res.data.jerseyNumber || '',
        photoUrl: res.data.photoUrl || ''
      });
    } catch {
      toast.error('Failed to load player');
    }
  };

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    toast.dismiss();
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      if (isEdit) {
        await axios.put(`${baseUrl}/players/${id}`, form, {
          headers: { Authorization: `Bearer ${token}` }
        });
        toast.success('Player updated');
      } else {
        await axios.post(`${baseUrl}/players`, form, {
          headers: { Authorization: `Bearer ${token}` }
        });
        toast.success('Player created');
      }
      navigate('../players');
    } catch (err) {
      (err.response?.data?.errors || []).forEach(e => toast.error(e.msg));
      if (err.response?.data?.message) toast.error(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-[#011B2B]">
        {isEdit ? 'Edit Player' : 'New Player'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="mb-1">Full Name</label>
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            required
            className="p-3 rounded-md border"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Age</label>
          <input
            name="age"
            type="number"
            value={form.age}
            onChange={handleChange}
            className="p-3 rounded-md border"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Position</label>
          <select
            name="position"
            value={form.position}
            onChange={handleChange}
            required
            className="p-3 rounded-md border"
          >
            <option value="" disabled>Select position</option>
            {['Goalkeeper','Defender','Midfielder','Forward'].map(pos => (
              <option key={pos} value={pos}>{pos}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Club</label>
          <select
            name="club"
            value={form.club}
            onChange={handleChange}
            required
            className="p-3 rounded-md border"
          >
            <option value="" disabled>Select club</option>
            {clubs.map(c => (
              <option key={c._id} value={c._id}>{c.name}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Jersey Number</label>
          <input
            name="jerseyNumber"
            type="number"
            value={form.jerseyNumber}
            onChange={handleChange}
            className="p-3 rounded-md border"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Photo URL</label>
          <input
            name="photoUrl"
            type="url"
            value={form.photoUrl}
            onChange={handleChange}
            className="p-3 rounded-md border"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#01FFFF] text-[#011B2B] font-bold py-3 rounded-md hover:bg-[#00cccc] transition"
        >
          {loading ? 'Saving...' : isEdit ? 'Update Player' : 'Create Player'}
        </button>
      </form>
    </div>
  );
}

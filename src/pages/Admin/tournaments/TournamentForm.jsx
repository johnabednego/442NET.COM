import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import baseUrl from '../../../components/baseUrl';

export default function TournamentForm() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    format: 'round-robin',
    startDate: '',
    endDate: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isEdit) fetchTournament();
  }, [id]);

  const fetchTournament = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get(`${baseUrl}/tournaments/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setForm({
        name: res.data.name,
        format: res.data.format,
        startDate: res.data.startDate.slice(0,10),
        endDate: res.data.endDate.slice(0,10)
      });
    } catch {
      toast.error('Failed to load tournament');
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
        await axios.put(`${baseUrl}/tournaments/${id}`, form, {
          headers: { Authorization: `Bearer ${token}` }
        });
        toast.success('Tournament updated');
      } else {
        await axios.post(`${baseUrl}/tournaments`, form, {
          headers: { Authorization: `Bearer ${token}` }
        });
        toast.success('Tournament created');
      }
      navigate('tournaments');
    } catch (err) {
      const errs = err.response?.data?.errors;
      if (Array.isArray(errs)) errs.forEach(e => toast.error(e.msg));
      if (err.response?.data?.message) toast.error(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">
        {isEdit ? 'Edit Tournament' : 'New Tournament'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label>Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="p-3 rounded-md border w-full"
          />
        </div>
        <div className="flex flex-col">
          <label>Format</label>
          <select
            name="format"
            value={form.format}
            onChange={handleChange}
            className="p-3 rounded-md border w-full"
          >
            <option value="single-elimination">Single Elimination</option>
            <option value="double-elimination">Double Elimination</option>
            <option value="round-robin">Round Robin</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label>Start Date</label>
          <input
            type="date"
            name="startDate"
            value={form.startDate}
            onChange={handleChange}
            required
            className="p-3 rounded-md border w-full"
          />
        </div>
        <div className="flex flex-col">
          <label>End Date</label>
          <input
            type="date"
            name="endDate"
            value={form.endDate}
            onChange={handleChange}
            required
            className="p-3 rounded-md border w-full"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#01FFFF] text-[#011B2B] font-bold py-3 rounded-md"
        >
          {loading ? 'Saving...' : isEdit ? 'Update' : 'Create'}
        </button>
      </form>
    </div>
  );
}

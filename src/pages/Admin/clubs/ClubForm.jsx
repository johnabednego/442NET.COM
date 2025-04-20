import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import baseUrl from '../../../components/baseUrl';

export default function ClubForm() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    contactEmail: '',
    country: '',
    stateOrRegion: '',
    city: '',
    website: '',
    logoUrl: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isEdit) fetchClub();
  }, [id]);

  const fetchClub = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get(`${baseUrl}/clubs/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setForm(res.data);
    } catch (err) {
      toast.error('Failed to load club');
    }
  };

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.dismiss();
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      if (isEdit) {
        await axios.put(
          `${baseUrl}/clubs/${id}`,
          form,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        toast.success('Club updated');
      } else {
        await axios.post(
          `${baseUrl}/clubs`,
          form,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        toast.success('Club created');
      }
      navigate('clubs');
    } catch (err) {
      (err.response.data.errors || []).forEach(e => toast.error(e.msg));
      if (err.response.data.message) toast.error(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">
        {isEdit ? 'Edit Club / Academy' : 'New Club / Academy'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { label: 'Name', name: 'name', type: 'text' },
          { label: 'Contact Email', name: 'contactEmail', type: 'email' },
          { label: 'Country', name: 'country', type: 'text' },
          { label: 'State/Region', name: 'stateOrRegion', type: 'text' },
          { label: 'City', name: 'city', type: 'text' },
          { label: 'Website', name: 'website', type: 'url' },
          { label: 'Logo URL', name: 'logoUrl', type: 'url' }
        ].map(field => (
          <div key={field.name} className="flex flex-col">
            <label className="mb-1">{field.label}</label>
            <input
              name={field.name}
              type={field.type}
              value={form[field.name] || ''}
              onChange={handleChange}
              className="p-3 rounded-md border"
              required={['website','logoUrl'].indexOf(field.name) === -1}
            />
          </div>
        ))}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#01FFFF] text-[#011B2B] font-bold py-3 rounded-md"
        >
          {loading ? 'Saving...' : isEdit ? 'Update Club' : 'Create Club'}
        </button>
      </form>
    </div>
  );
}

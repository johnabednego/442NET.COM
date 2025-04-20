import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import baseUrl from '../../../components/baseUrl';

export default function UserForm() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phoneNumber: '', password: '', country: '', stateOrRegion: '', city: '', role: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isEdit) return;
    const token = localStorage.getItem('token');
    axios.get(`${baseUrl}/users/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    )
      .then(res => setForm(res.data))
      .catch(() => toast.error('Failed to load user'));
  }, [id]);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.dismiss();
    setLoading(true);
    const token = localStorage.getItem('token');
    try {
      if (isEdit) {
        await axios.put(`${baseUrl}/users/${id}`, form,
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );
        toast.success('User updated');
      } else {
        await axios.post(`${baseUrl}/users`, form,
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );
        toast.success('User created');
      }
      navigate('users');
    } catch (err) {
      (err.response.data.errors || []).forEach(e => toast.error(e.msg));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">{isEdit ? 'Edit User' : 'New User'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.entries(form).map(([k, v]) => (
          k !== 'password' || !isEdit ? (
            <div key={k} className="flex flex-col">
              <label className="mb-1 capitalize">{k}</label>
              <input
                name={k}
                type={k === 'email' ? 'email' : k === 'password' ? 'password' : 'text'}
                value={v}
                onChange={handleChange}
                required={k !== 'role'}
                className="p-3 rounded-md border"
              />
            </div>
          ) : null
        ))}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#01FFFF] text-[#011B2B] font-bold py-3 rounded-md"
        >
          {loading ? 'Saving...' : isEdit ? 'Update User' : 'Create User'}
        </button>
      </form>
    </div>
  );
}

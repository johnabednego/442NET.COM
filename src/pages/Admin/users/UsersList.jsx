import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import baseUrl from '../../../components/baseUrl';

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get(`${baseUrl}/users`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => setUsers(res.data))
      .catch(() => toast.error('Failed to load users'));
  }, []);

  const handleDelete = (id) => {
    if (!window.confirm('Delete this user?')) return;
    const token = localStorage.getItem('token');
    axios.delete(`${baseUrl}/users/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    )
      .then(() => {
        setUsers(u => u.filter(u => u._id !== id));
        toast.success('User deleted');
      })
      .catch(() => toast.error('Failed to delete'));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Manage Users</h1>
        <button
          onClick={() => navigate('new')}
          className="bg-[#01FFFF] text-[#011B2B] px-4 py-2 rounded-md"
        >
          + New User
        </button>
      </div>
      <table className="min-w-full bg-white rounded-md shadow-md">
        <thead className="bg-[#011B2B] text-white">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Role</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id} className="border-b">
              <td className="p-3">{user.firstName} {user.lastName}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.role}</td>
              <td className="p-3 flex gap-2">
                <button
                  onClick={() => navigate(`${user._id}/edit`)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user._id)}
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

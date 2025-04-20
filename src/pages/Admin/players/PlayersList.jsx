import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import baseUrl from '../../../components/baseUrl';

export default function PlayersList() {
  const [players, setPlayers]       = useState([]);
  const [clubs, setClubs]           = useState([]);
  const [filterClub, setFilterClub] = useState('');
  const [previewMode, setPreviewMode] = useState(false);
  const [rawData, setRawData]         = useState([]);
  const [previewRows, setPreviewRows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchClubs();
    fetchPlayers();
  }, [filterClub]);

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

  const fetchPlayers = async () => {
    try {
      const token = localStorage.getItem('token');
      const url = filterClub
        ? `${baseUrl}/players?club=${filterClub}`
        : `${baseUrl}/players`;
      const res = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setPlayers(res.data);
    } catch {
      toast.error('Failed to load players');
    }
  };

  const handleDelete = async id => {
    if (!window.confirm('Delete this player?')) return;
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${baseUrl}/players/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setPlayers(players.filter(p => p._id !== id));
      toast.success('Player deleted');
    } catch {
      toast.error('Error deleting player');
    }
  };

  const handleFileSelect = async e => {
    const file = e.target.files[0];
    if (!file) return;
    if (!filterClub) {
      toast.error('Please select a club before importing');
      return;
    }
    try {
      const wb = XLSX.read(await file.arrayBuffer());
      const data = XLSX.utils.sheet_to_json(
        wb.Sheets[wb.SheetNames[0]]
      );
      // Validate required columns
      const missing = new Set();
      data.forEach((row, idx) => {
        if (!row.fullName)     missing.add('fullName');
        if (!row.position)     missing.add('position');
      });
      if (missing.size > 0) {
        toast.error(
          `Missing required column(s): ${[...missing].join(', ')}`
        );
        return;
      }
      // All good → preview
      setRawData(data);
      setPreviewRows(data.slice(0, 5));
      setPreviewMode(true);
    } catch (err) {
      console.error(err);
      toast.error('Failed to parse Excel file');
    }
  };

  const confirmImport = async () => {
    setPreviewMode(false);
    const token = localStorage.getItem('token');
    for (let row of rawData) {
      try {
        await axios.post(
          `${baseUrl}/players`,
          { ...row, club: filterClub },
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } catch (err) {
        console.error('Import row failed', row, err);
      }
    }
    toast.success('Import complete');
    setRawData([]);
    fetchPlayers();
  };

  const cancelImport = () => {
    setPreviewMode(false);
    setRawData([]);
    setPreviewRows([]);
  };

  const handleExport = () => {
    const url = filterClub
      ? `${baseUrl}/players/export?club=${filterClub}`
      : `${baseUrl}/players/export`;
    window.open(url, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto bg-white p-6 rounded-md shadow-md">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-[#011B2B]">Manage Players</h1>

        <div className="flex gap-2">
          <select
            value={filterClub}
            onChange={e => setFilterClub(e.target.value)}
            className="p-2 border rounded-md"
          >
            <option value="">All Clubs</option>
            {clubs.map(c => (
              <option key={c._id} value={c._id}>{c.name}</option>
            ))}
          </select>

          <button
            onClick={() => navigate('new')}
            className="bg-[#01FFFF] text-[#011B2B] px-4 py-2 rounded-md font-semibold hover:bg-[#00cccc] transition"
          >
            + New Player
          </button>

          <label className="bg-[#01FFFF] px-4 py-2 rounded-md text-[#011B2B] cursor-pointer hover:bg-[#00cccc] transition">
            Import XLSX
            <input
              type="file"
              accept=".xlsx"
              onChange={handleFileSelect}
              className="hidden"
            />
          </label>

          <button
            onClick={handleExport}
            className="bg-[#01FFFF] text-[#011B2B] px-4 py-2 rounded-md font-semibold hover:bg-[#00cccc] transition"
          >
            Export CSV
          </button>
        </div>
      </div>

      {previewMode && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Preview Import (first 5 rows)</h2>
          <div className="overflow-auto max-h-64 mb-2">
            <table className="min-w-full border">
              <thead className="bg-gray-100">
                <tr>
                  {Object.keys(previewRows[0]).map(col => (
                    <th key={col} className="p-2 border">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {previewRows.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    {Object.values(row).map((val, j) => (
                      <td key={j} className="p-2 border">{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex gap-2">
            <button
              onClick={confirmImport}
              className="bg-green-500 text-white px-4 py-2 rounded-md"
            >
              Confirm Import
            </button>
            <button
              onClick={cancelImport}
              className="bg-gray-300 text-black px-4 py-2 rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <table className="w-full border-collapse">
        <thead className="bg-[#011B2B] text-white">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Position</th>
            <th className="p-3">Club</th>
            <th className="p-3">Jersey</th>
            <th className="p-3">Apps</th>
            <th className="p-3">Goals</th>
            <th className="p-3">Assists</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {players.map(p => (
            <tr key={p._id} className="border-b hover:bg-gray-50">
              <td className="p-3 text-[#011B2B]">{p.fullName}</td>
              <td className="p-3 text-[#011B2B]">{p.position}</td>
              <td className="p-3 text-[#011B2B]">{p.club?.name}</td>
              <td className="p-3 text-[#011B2B]">{p.jerseyNumber}</td>
              <td className="p-3 text-[#011B2B]">{p.stats.appearances}</td>
              <td className="p-3 text-[#011B2B]">{p.stats.goals}</td>
              <td className="p-3 text-[#011B2B]">{p.stats.assists}</td>
              <td className="p-3 flex gap-2">
                <button
                  onClick={() => navigate(`${p._id}/edit`)}
                  className="text-[#01FFFF] hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(p._id)}
                  className="text-[#FF4D4F] hover:underline"
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

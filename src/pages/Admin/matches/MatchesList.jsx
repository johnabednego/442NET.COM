import React, { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "../../../components/baseUrl";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const MatchesList = () => {
  const [matches, setMatches] = useState([]);
  const navigate = useNavigate();

  const fetchMatches = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await axios.get(`${baseUrl}/matches`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMatches(res.data);
    } catch (err) {
      toast.error("Failed to load matches");
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`${baseUrl}/matches/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success("Match deleted");
      fetchMatches();
    } catch (err) {
      toast.error("Error deleting match");
    }
  };

  useEffect(() => {
    fetchMatches();
  }, []);

  return (
    <div className="text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">All Matches</h2>
        <button
          onClick={() => navigate("new")}
          className="bg-[#01FFFF] px-4 py-2 text-black rounded-md"
        >
          Create Match
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#01FFFF] text-[#011B2B]">
            <th className="p-2">Home</th>
            <th className="p-2">Away</th>
            <th className="p-2">Date</th>
            <th className="p-2">Venue</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((m) => (
            <tr key={m._id} className="border-b border-gray-600 text-center">
              <td className="p-2">{m.homeTeam?.name}</td>
              <td className="p-2">{m.awayTeam?.name}</td>
              <td className="p-2">{new Date(m.scheduledAt).toLocaleString()}</td>
              <td className="p-2">{m.venue}</td>
              <td className="p-2 capitalize">{m.status}</td>
              <td className="p-2 flex justify-center gap-3">
                <button onClick={() => navigate(`${m._id}/edit`)} className="text-blue-400">Edit</button>
                <button onClick={() => handleDelete(m._id)} className="text-red-400">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MatchesList;

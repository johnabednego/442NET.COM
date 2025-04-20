import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import baseUrl from "../../../components/baseUrl";

export default function MatchesList() {
  const [matches, setMatches] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMatches();
  }, []);

  const fetchMatches = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${baseUrl}/matches`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMatches(res.data);
    } catch {
      toast.error("Failed to load matches");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this match?")) return;
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${baseUrl}/matches/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMatches(matches.filter((m) => m._id !== id));
      toast.success("Match deleted");
    } catch {
      toast.error("Error deleting match");
    }
  };

  return (
    <div className="max-w-7xl mx-auto bg-white rounded-md shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#011B2B]">Manage Matches</h1>
        <button
          onClick={() => navigate("new")}
          className="bg-[#01FFFF] text-[#011B2B] px-4 py-2 rounded-md font-semibold hover:bg-[#00cccc] transition"
        >
          + New Match
        </button>
      </div>

      <table className="w-full text-left border-collapse">
        <thead className="bg-[#011B2B] text-white">
          <tr>
            <th className="p-3">Home Team</th>
            <th className="p-3">Away Team</th>
            <th className="p-3">Date & Time</th>
            <th className="p-3">Venue</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((m) => (
            <tr key={m._id} className="border-b hover:bg-gray-50">
              <td className="p-3 text-[#011B2B]">{m.homeTeam?.name}</td>
              <td className="p-3 text-[#011B2B]">{m.awayTeam?.name}</td>
              <td className="p-3 text-[#011B2B]">
                {new Date(m.scheduledAt).toLocaleString()}
              </td>
              <td className="p-3 text-[#011B2B]">{m.venue}</td>
              <td className="p-3 text-[#011B2B] capitalize">{m.status}</td>
              <td className="p-3 flex gap-3">
                <button
                  onClick={() => navigate(`${m._id}/edit`)}
                  className="text-[#01FFFF] hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(m._id)}
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

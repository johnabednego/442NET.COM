import React, { useEffect, useState } from "react";
import axios from "axios";
import baseUrl from "../../../components/baseUrl";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const MatchForm = () => {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    tournament: "",
    homeTeam: "",
    awayTeam: "",
    referee: "",
    scheduledAt: "",
    venue: "",
  });

  const [tournaments, setTournaments] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [referees, setReferees] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchOptions = async () => {
    const token = localStorage.getItem('token');
    try {
      const [tRes, cRes, rRes] = await Promise.all([
        axios.get(`${baseUrl}/tournaments`, {
          headers: { Authorization: `Bearer ${token}` }
        }),
        axios.get(`${baseUrl}/clubs`, {
          headers: { Authorization: `Bearer ${token}` }
        }),
        axios.get(`${baseUrl}/users?role=Referee`, {
          headers: { Authorization: `Bearer ${token}` }
        })
      ]);
      setTournaments(tRes.data);
      setClubs(cRes.data);
      setReferees(rRes.data);
    } catch {
      toast.error("Failed to load match options.");
    }
  };

  const fetchMatch = async () => {
    const token = localStorage.getItem('token');
    if (!isEdit) return;
    try {
      const res = await axios.get(`${baseUrl}/matches/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      setForm({ ...res.data });
    } catch {
      toast.error("Failed to load match");
    }
  };

  useEffect(() => {
    fetchOptions();
    fetchMatch();
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem('token');
    try {
      if (isEdit) {
        await axios.put(`${baseUrl}/matches/${id}`, form,
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );
        toast.success("Match updated");
      } else {
        await axios.post(`${baseUrl}/matches`, form,
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );
        toast.success("Match created");
      }
      navigate("matches");
    } catch (err) {
      toast.error("Submit failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-white">
      <h2 className="text-xl font-semibold mb-4">{isEdit ? "Edit Match" : "Create Match"}</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select name="tournament" value={form.tournament} onChange={handleChange} required className="p-2 rounded bg-white text-black">
          <option value="">Select Tournament</option>
          {tournaments.map((t) => <option key={t._id} value={t._id}>{t.name}</option>)}
        </select>
        <select name="homeTeam" value={form.homeTeam} onChange={handleChange} required className="p-2 rounded bg-white text-black">
          <option value="">Select Home Team</option>
          {clubs.map((c) => <option key={c._id} value={c._id}>{c.name}</option>)}
        </select>
        <select name="awayTeam" value={form.awayTeam} onChange={handleChange} required className="p-2 rounded bg-white text-black">
          <option value="">Select Away Team</option>
          {clubs.map((c) => <option key={c._id} value={c._id}>{c.name}</option>)}
        </select>
        <select name="referee" value={form.referee} onChange={handleChange} required className="p-2 rounded bg-white text-black">
          <option value="">Assign Referee</option>
          {referees.map((r) => <option key={r._id} value={r._id}>{r.firstName} {r.lastName}</option>)}
        </select>
        <input type="text" name="venue" placeholder="Venue" value={form.venue} onChange={handleChange} className="p-2 rounded bg-white text-black" />
        <input type="datetime-local" name="scheduledAt" value={form.scheduledAt} onChange={handleChange} className="p-2 rounded bg-white text-black" />
        <button type="submit" className="col-span-2 bg-[#01FFFF] text-[#011B2B] p-2 rounded font-bold">
          {loading ? "Saving..." : isEdit ? "Update Match" : "Create Match"}
        </button>
      </form>
    </div>
  );
};

export default MatchForm;

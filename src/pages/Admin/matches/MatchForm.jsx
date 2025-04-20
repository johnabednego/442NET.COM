import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useParams, useNavigate } from "react-router-dom";
import baseUrl from "../../../components/baseUrl";

export default function MatchForm() {
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

  useEffect(() => {
    fetchOptions();
    if (isEdit) fetchMatch();
  }, [id]);

  const fetchOptions = async () => {
    try {
      const token = localStorage.getItem("token");
      const [tRes, cRes, rRes] = await Promise.all([
        axios.get(`${baseUrl}/tournaments`, { headers: { Authorization: `Bearer ${token}` } }),
        axios.get(`${baseUrl}/clubs`,       { headers: { Authorization: `Bearer ${token}` } }),
        axios.get(`${baseUrl}/users?role=Referee`, { headers: { Authorization: `Bearer ${token}` } }),
      ]);
      setTournaments(tRes.data);
      setClubs(cRes.data);
      setReferees(rRes.data);
    } catch {
      toast.error("Failed to load options");
    }
  };

  const fetchMatch = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${baseUrl}/matches/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = res.data;
      setForm({
        tournament: data.tournament,
        homeTeam:   data.homeTeam,
        awayTeam:   data.awayTeam,
        referee:    data.referee,
        scheduledAt: data.scheduledAt.slice(0,16), // for datetime-local
        venue:      data.venue,
      });
    } catch {
      toast.error("Failed to load match");
    }
  };

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.dismiss();
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      if (isEdit) {
        await axios.put(`${baseUrl}/matches/${id}`, form, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast.success("Match updated");
      } else {
        await axios.post(`${baseUrl}/matches`, form, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast.success("Match created");
      }
      navigate("../matches");
    } catch {
      toast.error("Submit failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-[#011B2B]">
        {isEdit ? "Edit Match" : "Create Match"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="mb-1">Tournament</label>
            <select
              name="tournament"
              value={form.tournament}
              onChange={handleChange}
              required
              className="p-3 rounded-md border"
            >
              <option value="" disabled>Select tournament</option>
              {tournaments.map((t) => (
                <option key={t._id} value={t._id}>{t.name}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-1">Home Team</label>
            <select
              name="homeTeam"
              value={form.homeTeam}
              onChange={handleChange}
              required
              className="p-3 rounded-md border"
            >
              <option value="" disabled>Select home team</option>
              {clubs.map((c) => (
                <option key={c._id} value={c._id}>{c.name}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-1">Away Team</label>
            <select
              name="awayTeam"
              value={form.awayTeam}
              onChange={handleChange}
              required
              className="p-3 rounded-md border"
            >
              <option value="" disabled>Select away team</option>
              {clubs.map((c) => (
                <option key={c._id} value={c._id}>{c.name}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-1">Referee</label>
            <select
              name="referee"
              value={form.referee}
              onChange={handleChange}
              required
              className="p-3 rounded-md border"
            >
              <option value="" disabled>Select referee</option>
              {referees.map((r) => (
                <option key={r._id} value={r._id}>
                  {r.firstName} {r.lastName}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="mb-1">Venue</label>
            <input
              name="venue"
              type="text"
              placeholder="Venue"
              value={form.venue}
              onChange={handleChange}
              className="p-3 rounded-md border"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1">Date & Time</label>
            <input
              name="scheduledAt"
              type="datetime-local"
              value={form.scheduledAt}
              onChange={handleChange}
              className="p-3 rounded-md border"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#01FFFF] text-[#011B2B] font-bold py-3 rounded-md hover:bg-[#00cccc] transition"
        >
          {loading ? "Saving..." : isEdit ? "Update Match" : "Create Match"}
        </button>
      </form>
    </div>
  );
}

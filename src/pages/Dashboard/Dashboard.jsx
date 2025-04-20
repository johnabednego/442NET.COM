// Dashboard.jsx
import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import RequireAuth from '../../components/RequireAuth'
import AdminLayout from '../../components/admin/AdminLayout'

// Admin Pages
import UsersList from '../Admin/users/UsersList'
import UserForm from '../Admin/users/UserForm'
import ClubsList from '../Admin/clubs/ClubsList'
import ClubForm from '../Admin/clubs/ClubForm'
import TournamentsList from '../Admin/tournaments/TournamentsList'
import TournamentForm from '../Admin/tournaments/TournamentForm'
import MatchesList from '../Admin/matches/MatchesList'
import MatchForm from '../Admin/matches/MatchForm'
import Overview from '../Admin/Overview'

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <div className="pt-[120px]">
        <RequireAuth role="Admin">
          <Routes>
            {/* Wrap all dashboard stuff with AdminLayout */}
            <Route path="/" element={<AdminLayout />}>
              <Route index element={<Overview />} />
              <Route path="admin/users" element={<UsersList />} />
              <Route path="admin/users/new" element={<UserForm />} />
              <Route path="admin/users/:id/edit" element={<UserForm />} />

              <Route path="admin/clubs" element={<ClubsList />} />
              <Route path="admin/clubs/new" element={<ClubForm />} />
              <Route path="admin/clubs/:id/edit" element={<ClubForm />} />

              <Route path="admin/tournaments" element={<TournamentsList />} />
              <Route path="admin/tournaments/new" element={<TournamentForm />} />
              <Route path="admin/tournaments/:id/edit" element={<TournamentForm />} />

              <Route path="admin/matches" element={<MatchesList />} />
              <Route path="admin/matches/new" element={<MatchForm />} />
              <Route path="admin/matches/:id/edit" element={<MatchForm />} />

              {/* Add more routes for players, officials, etc. */}
            </Route>
          </Routes>
        </RequireAuth>
      </div>
    </>
  )
}

export default Dashboard

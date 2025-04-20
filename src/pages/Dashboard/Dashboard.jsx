// Dashboard.jsx
import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import RequireAuth from '../../components/RequireAuth'
import AdminLayout from '../../components/admin/AdminLayout'

// Admin Pages
import Overview from '../Admin/Overview'
import UsersList from '../Admin/users/UsersList'
import UserForm from '../Admin/users/UserForm'
import ClubsList from '../Admin/clubs/ClubsList'
import ClubForm from '../Admin/clubs/ClubForm'
import TournamentsList from '../Admin/tournaments/TournamentsList'
import TournamentForm from '../Admin/tournaments/TournamentForm'
import MatchesList from '../Admin/matches/MatchesList'
import MatchForm from '../Admin/matches/MatchForm'

// ** Players **
import PlayersList from '../Admin/players/PlayersList'
import PlayerForm  from '../Admin/players/PlayerForm'

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <div className="pt-[120px]">
        <RequireAuth role="Admin">
          <Routes>
            {/* Wrap all dashboard routes with AdminLayout */}
            <Route path="/" element={<AdminLayout />}>
              {/* Overview */}
              <Route index element={<Overview />} />

              {/* Users */}
              <Route path="admin/users"         element={<UsersList />} />
              <Route path="admin/users/new"     element={<UserForm />} />
              <Route path="admin/users/:id/edit" element={<UserForm />} />

              {/* Clubs */}
              <Route path="admin/clubs"         element={<ClubsList />} />
              <Route path="admin/clubs/new"     element={<ClubForm />} />
              <Route path="admin/clubs/:id/edit" element={<ClubForm />} />

              {/* Tournaments */}
              <Route path="admin/tournaments"         element={<TournamentsList />} />
              <Route path="admin/tournaments/new"     element={<TournamentForm />} />
              <Route path="admin/tournaments/:id/edit" element={<TournamentForm />} />

              {/* Matches */}
              <Route path="admin/matches"         element={<MatchesList />} />
              <Route path="admin/matches/new"     element={<MatchForm />} />
              <Route path="admin/matches/:id/edit" element={<MatchForm />} />

              {/* Players */}
              <Route path="admin/players"         element={<PlayersList />} />
              <Route path="admin/players/new"     element={<PlayerForm />} />
              <Route path="admin/players/:id/edit" element={<PlayerForm />} />

              {/* TODO: add routes for officials, bookings, subscriptions */}
            </Route>
          </Routes>
        </RequireAuth>
      </div>
    </>
  )
}

export default Dashboard

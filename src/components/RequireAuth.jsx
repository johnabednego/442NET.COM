import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

/**
 * Protects routes by verifying JWT presence, expiration, and user role.
 * Usage:
 * <RequireAuth role="Admin"><YourComponent/></RequireAuth>
 */
export default function RequireAuth({ role, children }) {
  const token = localStorage.getItem('token');
  const location = useLocation();

  // 1. No token: redirect to login
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  let decoded;
  try {
    decoded = jwtDecode(token);
  } catch (err) {
    // Invalid token: clear and redirect
    localStorage.removeItem('token');
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const { exp, role: userRole } = decoded;

  // 2. Check expiration
  if (exp * 1000 < Date.now()) {
    localStorage.removeItem('token');
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 3. Role-based authorization
  if (role && userRole !== role) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg text-red-500 font-semibold">
          Unauthorized: You do not have permission to view this page.
        </div>
      </div>
    );
  }

  // 4. All good, render children
  return children;
}

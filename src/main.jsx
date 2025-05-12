import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import App from './App';
import SignupPage from './pages/SignupPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import Dashboard from './pages/Dashboard'; // Dashboard with Sidebar
import Sidebar from './pages/Sidebar';
import AttendancePage from './pages/AttendancePage';
import MessagesPage from './pages/MessagesPage';
import ChannelsPage from './pages/ChannelsPage';
import LabelPage from './pages/LabelPage';
import ResetPass from './pages/ResetPass';
import TeamNameStep from './pages/TeamNameStep'; 
import TeamInvitationPage from './pages/TeamInvitationPage';

import './index.css';

// Debug component to log current route
const RouteDebugger = () => {
  const location = useLocation();
  console.log('Current location:', location);
  return null;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteDebugger />
      <Routes>
        {/* Auth Routes (No Sidebar) */}
        <Route path="/login" element={<App />} />
        <Route path="/SignupPage" element={<SignupPage />} />
        <Route path="/ForgotPasswordPage" element={<ForgotPasswordPage />} />

        {/* Reset Password route at root level */}
        <Route path="/ResetPass" element={<ResetPass />} />
        <Route path="/resetpass" element={<ResetPass />} />

        {/* Root-level setup steps */}
        <Route path="/TeamNameStep" element={<TeamNameStep />} />
        <Route path="/teamnamestep" element={<TeamNameStep />} />
        <Route path="/TeamInvitationPage" element={<TeamInvitationPage />} />
        <Route path="/teaminvitationpage" element={<TeamInvitationPage />} />

        {/* Sidebar route */}
        <Route path="/Sidebar" element={<Sidebar />} />

        {/* Dashboard with nested pages */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<AttendancePage />} />
          <Route path="attendance" element={<AttendancePage />} />
          <Route path="messages" element={<MessagesPage />} />
          <Route path="channels" element={<ChannelsPage />} />
          <Route path="label" element={<LabelPage />} />
          <Route path="teamnamestep" element={<TeamNameStep />} />
          <Route path="TeamNameStep" element={<TeamNameStep />} />
          <Route path="teaminvitation" element={<TeamInvitationPage />} />
          <Route path="TeamInvitation" element={<TeamInvitationPage />} />
        </Route>

        {/* Fallback */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route
          path="*"
          element={
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h2>404 - Route not found</h2>
              <p>Unable to match: {window.location.pathname}</p>
              <a href="/login">Return to login</a>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

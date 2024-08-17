import React, { useState } from 'react';
import './AdminDash.css';
import ManageAdoptionApplications from '../../components/ManageAdoptionApplications/ManageAdoptionApplications';
import Dashboard from '../../components/Dashboard/Dashboard';

const AdminDash = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderSection = () => {
    switch (activeSection) {
      case 'pets':
        return <h2>Manage Pets</h2>; // Replace with your Pets CRUD functionality
      case 'users':
        return <h2>Manage Users</h2>; // Replace with your Users CRUD functionality
      case 'applications':
        return <ManageAdoptionApplications></ManageAdoptionApplications>; // Replace with your Applications CRUD functionality
      default:
        return <Dashboard></Dashboard>;
    }
  };

  return (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <h1 className="admin-title">Admin Dashboard</h1>
        <ul className="admin-nav">
          <li className={activeSection === 'dashboard' ? 'active' : ''} onClick={() => setActiveSection('dashboard')}>Dashboard</li>
          <li className={activeSection === 'pets' ? 'active' : ''} onClick={() => setActiveSection('pets')}>Pets</li>
          <li className={activeSection === 'users' ? 'active' : ''} onClick={() => setActiveSection('users')}>Users</li>
          <li className={activeSection === 'applications' ? 'active' : ''} onClick={() => setActiveSection('applications')}>Applications</li>
        </ul>
      </aside>
      <main className="admin-main-content">
        {renderSection()}
      </main>
    </div>
  );
};

export default AdminDash;


import React, { useState } from 'react';
import { Users, Calendar, CheckSquare, MessageCircle, Settings, Bell, UserCircle, PlusCircle, X } from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
  <div
    onClick={onClick}
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 20px',
      cursor: 'pointer',
      backgroundColor: active ? '#1e40af' : 'transparent',
      color: active ? 'white' : '#cbd5e1',
      fontWeight: active ? '700' : '500',
      borderRadius: '8px',
      userSelect: 'none',
      transition: 'background-color 0.3s',
    }}
  >
    <Icon size={20} />
    <span>{label}</span>
  </div>
);

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [showAddUser, setShowAddUser] = useState(false);

  
  // Dummy data for users table
  const [users, setUsers] = useState([
  { id: 1, name: 'John Doe', role: 'Admin', status: 'active' },
  { id: 2, name: 'Jane Smith', role: 'User', status: 'inactive' },
  // your initial data here
]);

// Add these lines after the users state
const [events, setEvents] = useState([
  { id: 1, title: 'Team Building Workshop', date: '2025-07-15', time: '10:00', location: 'Conference Room A', description: 'Monthly team building activity' },
  { id: 2, title: 'Product Launch Meeting', date: '2025-07-20', time: '14:00', location: 'Main Hall', description: 'Launch planning and coordination' },
]);

const [showAddEvent, setShowAddEvent] = useState(false);
const [eventFormData, setEventFormData] = useState({ 
  title: '', date: '', time: '', location: '', description: '', type: 'Meeting'
});
const [eventFormErrors, setEventFormErrors] = useState({});
  // Form state for Add User
  const [formData, setFormData] = useState({ name: '', email: '', role: 'Member' });
  const [formErrors, setFormErrors] = useState({});

  const handleAddUserChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
const [attendance, setAttendance] = useState([
  { userId: 1, date: '2025-07-01', status: 'Present' },
  { userId: 2, date: '2025-07-01', status: 'Absent' },
  { userId: 3, date: '2025-07-01', status: 'Present' }, // ← No such user!
]);


const handleMarkAttendance = (userId, date) => {
  setAttendance(prev => {
    const existingIndex = prev.findIndex(a => a.userId === userId && a.date === date);
    if (existingIndex !== -1) {
      const updated = [...prev];
      updated[existingIndex].status = updated[existingIndex].status === 'Present' ? 'Absent' : 'Present';
      return updated;
    } else {
      return [...prev, { userId, date, status: 'Present' }];
    }
  });
};




  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Invalid email';
    if (!formData.role.trim()) errors.role = 'Role is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleAddUserSubmit = e => {
    e.preventDefault();
    if (!validateForm()) return;
    setUsers([...users, { id: users.length + 1, ...formData, status: 'Pending' }]);
    setFormData({ name: '', email: '', role: 'Member' });
    setFormErrors({});
    setShowAddUser(false);
  };
  // Add these functions after handleAddUserSubmit
const handleEventFormChange = e => {
  setEventFormData({ ...eventFormData, [e.target.name]: e.target.value });
};

const validateEventForm = () => {
  const errors = {};
  if (!eventFormData.title.trim()) errors.title = 'Event title is required';
  if (!eventFormData.date.trim()) errors.date = 'Date is required';
  if (!eventFormData.time.trim()) errors.time = 'Time is required';
  if (!eventFormData.location.trim()) errors.location = 'Location is required';
  if (!eventFormData.type.trim()) errors.type = 'Event type is required';
  setEventFormErrors(errors);
  return Object.keys(errors).length === 0;
};

const handleAddEventSubmit = e => {
  e.preventDefault();
  if (!validateEventForm()) return;
  setEvents([...events, { id: events.length + 1, ...eventFormData }]);
  setEventFormData({ title: '', date: '', time: '', location: '', description: '', type: 'Meeting' });
  setEventFormErrors({});
  setShowAddEvent(false);
};

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', background: '#f0f4ff' }}>
      {/* Sidebar */}
      <aside style={{
        width: '260px',
        background: '#1e293b',
        color: '#cbd5e1',
        display: 'flex',
        flexDirection: 'column',
        padding: '30px 20px',
        boxShadow: '2px 0 8px rgba(0,0,0,0.1)',
      }}>
        <div style={{ fontSize: '28px', fontWeight: '700', marginBottom: '40px', color: 'white', textAlign: 'center' }}>
          Samparka Admin
        </div>
        <SidebarItem icon={Users} label="Dashboard" active={activeTab === 'Dashboard'} onClick={() => setActiveTab('Dashboard')} />
        <SidebarItem icon={Users} label="Users" active={activeTab === 'Users'} onClick={() => setActiveTab('Users')} />
        <SidebarItem icon={Calendar} label="Events" active={activeTab === 'Events'} onClick={() => setActiveTab('Events')} />
        <SidebarItem icon={CheckSquare} label="Attendance" active={activeTab === 'Attendance'} onClick={() => setActiveTab('Attendance')} />
        <SidebarItem icon={MessageCircle} label="Messages" active={activeTab === 'Messages'} onClick={() => setActiveTab('Messages')} />
        <SidebarItem icon={Settings} label="Settings" active={activeTab === 'Settings'} onClick={() => setActiveTab('Settings')} />
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '30px 40px', overflowY: 'auto' }}>
        {/* Header */}
        <header style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginBottom: '40px',
          gap: '20px',
        }}>
          <Bell size={24} color="#1e40af" style={{ cursor: 'pointer' }} />
          <UserCircle size={28} color="#1e40af" />
          <span style={{ fontWeight: '600', color: '#1e40af' }}>Admin User</span>
        </header>

        {/* Content based on activeTab */}
        {activeTab === 'Dashboard' && (
          <>
            <h1 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px', color: '#1e3a8a' }}>
              Dashboard Overview
            </h1>
            {/* Summary Cards */}
            <div style={{ display: 'flex', gap: '24px', marginBottom: '40px', flexWrap: 'wrap' }}>
              {[
                { title: 'Total Users', value: users.length, icon: Users, bgColor: '#3b82f6' },
                { title: 'Active Teams', value: 12, icon: Calendar, bgColor: '#2563eb' },
                { title: 'Upcoming Events', value: 5, icon: Calendar, bgColor: '#1d4ed8' },
                { title: 'Pending Approvals', value: users.filter(u => u.status === 'Pending').length, icon: CheckSquare, bgColor: '#2563eb' },
              ].map(({ title, value, icon: Icon, bgColor }) => (
                <div key={title} style={{
                  flex: '1 1 200px',
                  backgroundColor: bgColor,
                  color: 'white',
                  borderRadius: '12px',
                  padding: '24px',
                  boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  cursor: 'default',
                  userSelect: 'none',
                }}>
                  <Icon size={40} />
                  <div>
                    <div style={{ fontSize: '18px', fontWeight: '600' }}>{title}</div>
                    <div style={{ fontSize: '28px', fontWeight: '700', marginTop: '6px' }}>{value}</div>
                  </div>
                  
                </div>
              ))}
            </div>

            {/* Recent Activities */}
            <section>
              <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px', color: '#1e3a8a' }}>
                Recent User Activities
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {users.slice(-5).reverse().map(user => (
                  <li key={user.id} style={{
                    padding: '12px 20px',
                    background: 'white',
                    marginBottom: '12px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                    <span>{user.name} ({user.email}) joined as <strong>{user.role}</strong></span>
                    <span style={{ color: user.status === 'Active' ? 'green' : '#d97706', fontWeight: '600' }}>
                      {user.status}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </>
        )}

        {activeTab === 'Users' && (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#1e3a8a' }}>User Management</h1>
              <button
                onClick={() => setShowAddUser(true)}
                style={{
                  backgroundColor: '#2563eb',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1d4ed8'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#2563eb'}
              >
                <PlusCircle size={18} /> Add User
              </button>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: '8px', overflow: 'hidden' }}>
              <thead style={{ backgroundColor: '#1e40af', color: 'white' }}>
                <tr>
                  <th style={{ padding: '12px 16px', textAlign: 'left' }}>Name</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left' }}>Email</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left' }}>Role</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left' }}>Status</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '12px 16px' }}>{user.name}</td>
                    <td style={{ padding: '12px 16px' }}>{user.email}</td>
                    <td style={{ padding: '12px 16px' }}>{user.role}</td>
                    <td style={{
                      padding: '12px 16px',
                      color: user.status === 'Active' ? 'green' : '#d97706',
                      fontWeight: '600',
                    }}>{user.status}</td>
                    <td style={{ padding: '12px 16px' }}>
                      <button
                        style={{
                          backgroundColor: '#ef4444',
                          color: 'white',
                          border: 'none',
                          padding: '6px 12px',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          fontWeight: '600',
                        }}
                        onClick={() => {
                          // Simple delete action for demo
                          if (window.confirm(`Delete user ${user.name}?`)) {
                            setUsers(users.filter(u => u.id !== user.id));
                          }
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {/* Add User Modal */}
        {showAddUser && (
          <div
            style={{
              position: 'fixed',
              top: 0, left: 0,
              width: '100vw', height: '100vh',
              backgroundColor: 'rgba(0,0,0,0.4)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 9999,
              padding: '20px',
            }}
            onClick={() => setShowAddUser(false)}
          >
            <div
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '30px',
                width: '400px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                position: 'relative',
              }}
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setShowAddUser(false)}
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#ef4444',
                }}
                aria-label="Close"
              >
                <X size={24} />
              </button>

              <h2 style={{ marginBottom: '20px', color: '#1e3a8a' }}>Add New User</h2>

              <form onSubmit={handleAddUserSubmit} noValidate>
                <div style={{ marginBottom: '15px' }}>
                  <label htmlFor="name" style={{ fontWeight: '600', display: 'block', marginBottom: '6px' }}>Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleAddUserChange}
                    style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: '6px',
                      border: formErrors.name ? '2px solid #dc2626' : '1px solid #cbd5e1',
                      fontSize: '16px',
                    }}
                  />
                  {formErrors.name && <p style={{ color: '#dc2626', marginTop: '4px', fontSize: '14px' }}>{formErrors.name}</p>}
                </div>

                <div style={{ marginBottom: '15px' }}>
                  <label htmlFor="email" style={{ fontWeight: '600', display: 'block', marginBottom: '6px' }}>Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleAddUserChange}
                    style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: '6px',
                      border: formErrors.email ? '2px solid #dc2626' : '1px solid #cbd5e1',
                      fontSize: '16px',
                    }}
                  />
                  {formErrors.email && <p style={{ color: '#dc2626', marginTop: '4px', fontSize: '14px' }}>{formErrors.email}</p>}
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <label htmlFor="role" style={{ fontWeight: '600', display: 'block', marginBottom: '6px' }}>Role *</label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleAddUserChange}
                    style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: '6px',
                      border: formErrors.role ? '2px solid #dc2626' : '1px solid #cbd5e1',
                      fontSize: '16px',
                      cursor: 'pointer',
                      backgroundColor: 'white',
                    }}
                  >
                    <option value="Admin">Admin</option>
                    <option value="Manager">Manager</option>
                    <option value="Member">Member</option>
                  </select>
                  {formErrors.role && <p style={{ color: '#dc2626', marginTop: '4px', fontSize: '14px' }}>{formErrors.role}</p>}
                </div>

                <button
                  type="submit"
                  style={{
                    backgroundColor: '#1e40af',
                    color: 'white',
                    padding: '12px 20px',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    width: '100%',
                  }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1c3aa9'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1e40af'}
                >
                  Add User
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Placeholder for other tabs */}
        {activeTab === 'Events' && (
  <>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
      <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#1e3a8a' }}>Event Management</h1>
      <button
        onClick={() => setShowAddEvent(true)}
        style={{
          backgroundColor: '#2563eb',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '8px',
          fontWeight: '700',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1d4ed8'}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#2563eb'}
      >
        <PlusCircle size={18} /> Add Event
      </button>
    </div>

    <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))' }}>
      {events.map(event => (
        <div key={event.id} style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          border: '1px solid #e2e8f0',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1e3a8a', margin: 0 }}>{event.title}</h3>
            <button
              style={{
                backgroundColor: '#ef4444',
                color: 'white',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '12px',
              }}
              onClick={() => {
                if (window.confirm(`Delete event "${event.title}"?`)) {
                  setEvents(events.filter(e => e.id !== event.id));
                }
              }}
            >
              Delete
            </button>
          </div>
          <div style={{ marginBottom: '12px' }}>
            <strong style={{ color: '#374151' }}>Date:</strong> {event.date}
          </div>
          <div style={{ marginBottom: '12px' }}>
            <strong style={{ color: '#374151' }}>Time:</strong> {event.time}
          </div>
          <div style={{ marginBottom: '12px' }}>
            <strong style={{ color: '#374151' }}>Location:</strong> {event.location}
          </div>
          <div style={{ marginBottom: '12px' }}>
            <strong style={{ color: '#374151' }}>Type:</strong> {event.type}
          </div>
          {event.description && (
            <div style={{ marginTop: '16px' }}>
              <strong style={{ color: '#374151' }}>Description:</strong>
              <p style={{ marginTop: '4px', color: '#6b7280', lineHeight: '1.5' }}>{event.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  </>
)}

{/* Add Event Modal */}
{showAddEvent && (
  <div
    style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100vw', height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.4)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      padding: '20px',
    }}
    onClick={() => setShowAddEvent(false)}
  >
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '30px',
        width: '500px',
        maxHeight: '80vh',
        overflowY: 'auto',
        boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
        position: 'relative',
      }}
      onClick={e => e.stopPropagation()}
    >
      <button
        onClick={() => setShowAddEvent(false)}
        style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: '#ef4444',
        }}
        aria-label="Close"
      >
        <X size={24} />
      </button>

      <h2 style={{ marginBottom: '20px', color: '#1e3a8a' }}>Add New Event</h2>

      <form onSubmit={handleAddEventSubmit} noValidate>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="title" style={{ fontWeight: '600', display: 'block', marginBottom: '6px' }}>Event Title *</label>
          <input
            id="title"
            name="title"
            type="text"
            value={eventFormData.title}
            onChange={handleEventFormChange}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '6px',
              border: eventFormErrors.title ? '2px solid #dc2626' : '1px solid #cbd5e1',
              fontSize: '16px',
            }}
          />
          {eventFormErrors.title && <p style={{ color: '#dc2626', marginTop: '4px', fontSize: '14px' }}>{eventFormErrors.title}</p>}
        </div>

        <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
          <div style={{ flex: 1 }}>
            <label htmlFor="date" style={{ fontWeight: '600', display: 'block', marginBottom: '6px' }}>Date *</label>
            <input
              id="date"
              name="date"
              type="date"
              value={eventFormData.date}
              onChange={handleEventFormChange}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '6px',
                border: eventFormErrors.date ? '2px solid #dc2626' : '1px solid #cbd5e1',
                fontSize: '16px',
              }}
            />
            {eventFormErrors.date && <p style={{ color: '#dc2626', marginTop: '4px', fontSize: '14px' }}>{eventFormErrors.date}</p>}
          </div>

          <div style={{ flex: 1 }}>
            <label htmlFor="time" style={{ fontWeight: '600', display: 'block', marginBottom: '6px' }}>Time *</label>
            <input
              id="time"
              name="time"
              type="time"
              value={eventFormData.time}
              onChange={handleEventFormChange}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '6px',
                border: eventFormErrors.time ? '2px solid #dc2626' : '1px solid #cbd5e1',
                fontSize: '16px',
              }}
            />
            {eventFormErrors.time && <p style={{ color: '#dc2626', marginTop: '4px', fontSize: '14px' }}>{eventFormErrors.time}</p>}
          </div>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="location" style={{ fontWeight: '600', display: 'block', marginBottom: '6px' }}>Location *</label>
          <input
            id="location"
            name="location"
            type="text"
            value={eventFormData.location}
            onChange={handleEventFormChange}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '6px',
              border: eventFormErrors.location ? '2px solid #dc2626' : '1px solid #cbd5e1',
              fontSize: '16px',
            }}
          />
          {eventFormErrors.location && <p style={{ color: '#dc2626', marginTop: '4px', fontSize: '14px' }}>{eventFormErrors.location}</p>}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="type" style={{ fontWeight: '600', display: 'block', marginBottom: '6px' }}>Event Type *</label>
          <select
            id="type"
            name="type"
            value={eventFormData.type}
            onChange={handleEventFormChange}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '6px',
              border: eventFormErrors.type ? '2px solid #dc2626' : '1px solid #cbd5e1',
              fontSize: '16px',
              cursor: 'pointer',
              backgroundColor: 'white',
            }}
          >
            <option value="Meeting">Meeting</option>
            <option value="Workshop">Workshop</option>
            <option value="Training">Training</option>
            <option value="Conference">Conference</option>
            <option value="Social">Social Event</option>
            <option value="Other">Other</option>
          </select>
          {eventFormErrors.type && <p style={{ color: '#dc2626', marginTop: '4px', fontSize: '14px' }}>{eventFormErrors.type}</p>}
        </div>

        <div style={{ marginBottom: '25px' }}>
          <label htmlFor="description" style={{ fontWeight: '600', display: 'block', marginBottom: '6px' }}>Description</label>
          <textarea
            id="description"
            name="description"
            value={eventFormData.description}
            onChange={handleEventFormChange}
            rows="4"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #cbd5e1',
              fontSize: '16px',
              resize: 'vertical',
              fontFamily: 'inherit',
            }}
            placeholder="Optional event description..."
          />
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: '#1e40af',
            color: 'white',
            padding: '12px 20px',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '700',
            cursor: 'pointer',
            width: '100%',
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1c3aa9'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1e40af'}
        >
          Add Event
        </button>
      </form>
    </div>
  </div>
)}

{/* Placeholder for other tabs */}
{activeTab === 'Attendance' && (
  <>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
      <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#1e3a8a' }}>Attendance Tracker</h1>
    </div>

    <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: '8px', overflow: 'hidden' }}>
      <thead style={{ backgroundColor: '#1e40af', color: 'white' }}>
        <tr>
          <th style={{ padding: '12px 16px', textAlign: 'left' }}>Date</th>
          <th style={{ padding: '12px 16px', textAlign: 'left' }}>Name</th>
          <th style={{ padding: '12px 16px', textAlign: 'left' }}>Status</th>
          <th style={{ padding: '12px 16px', textAlign: 'left' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.flatMap(user =>
          ['2025-07-01', '2025-07-02'].map(date => {
            const record = attendance.find(a => a.userId === user.id && a.date === date) || {
              userId: user.id,
              date,
              status: 'Absent'
            };
            return (
              <tr key={`${user.id}-${date}`} style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '12px 16px' }}>{record.date}</td>
                <td style={{ padding: '12px 16px' }}>{user.name}</td>
                <td style={{ padding: '12px 16px', color: record.status === 'Present' ? 'green' : '#ef4444', fontWeight: '600' }}>{record.status}</td>
                <td style={{ padding: '12px 16px' }}>
                  <button
                    onClick={() => handleMarkAttendance(user.id, date)}
                    style={{
                      backgroundColor: '#2563eb',
                      color: 'white',
                      border: 'none',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontWeight: '600',
                    }}
                  >
                    Toggle Status
                  </button>
                </td>
              </tr>
            );
          })
        )}
      </tbody>
    </table>
    <div style={{ marginTop: '20px', textAlign: 'right' }}>
  <button
    onClick={() => {
      // Simulate saving logic (could call an API here)
      console.log('Saved attendance:', attendance);
      alert('Attendance has been saved!');
    }}
    style={{
      backgroundColor: '#10b981',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '8px',
      fontWeight: '700',
      cursor: 'pointer',
    }}
    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#059669'}
    onMouseLeave={e => e.currentTarget.style.backgroundColor = '#10b981'}
  >
    Save Attendance
  </button>
</div>

  </>
)}


      </main>
    </div>
  );
};


export default AdminDashboard;

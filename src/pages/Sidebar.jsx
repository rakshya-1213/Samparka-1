import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  PiUsersThreeFill, 
  PiChatsCircleFill, 
  PiStackFill,
  PiPlusBold,
  PiUserPlusFill
} from 'react-icons/pi';

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <h2 style={styles.logo}>SAMPARKA</h2>
      
      <nav style={styles.nav}>
        <NavLink
          to="/dashboard/attendance"
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          style={({ isActive }) => isActive ? {...styles.navLink, ...styles.activeLink} : styles.navLink}
        >
          <PiUsersThreeFill style={styles.icon} />
          <span>Attendance</span>
        </NavLink>
        
        <NavLink
          to="/dashboard/messages"
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          style={({ isActive }) => isActive ? {...styles.navLink, ...styles.activeLink} : styles.navLink}
        >
          <PiChatsCircleFill style={styles.icon} />
          <span>Messages</span>
        </NavLink>
        
        <div style={styles.channelSection}>
          <NavLink
            to="/dashboard/channels"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            style={({ isActive }) => isActive ? {...styles.navLink, ...styles.activeLink} : styles.navLink}
          >
            <PiStackFill style={styles.icon} />
            <span>Channels</span>
          </NavLink>

            {/* Channel list */}
            <div style={styles.channelList}>
           
           <NavLink
             to="/dashboard/channels/random"
             className={({ isActive }) => isActive ? 'channel active' : 'channel'}
             style={({ isActive }) => isActive ? 
               {...styles.channelItem, ...styles.activeChannelItem} : 
               styles.channelItem}
           >
             # Google
           </NavLink>
           <NavLink
              to="/dashboard/channels/general"
              className={({ isActive }) => isActive ? 'channel active' : 'channel'}
              style={({ isActive }) => isActive ? 
                {...styles.channelItem, ...styles.activeChannelItem} : 
                styles.channelItem}
            >
              # Microsoft
            </NavLink>
            
         </div>
          
          {/* Add Channel Button */}
          <button style={styles.addChannelButton}>
            <PiPlusBold style={styles.addChannelIcon} />
            <span style={styles.addChannelText}>Add Channel</span>
          </button>
          
          {/* Invite Members Button */}
          <button style={styles.inviteMembersButton}>
            <PiUserPlusFill style={styles.inviteMembersIcon} />
            <span style={styles.inviteMembersText}>Invite Members</span>
          </button>
        
        </div>
      </nav>
      
      <div style={styles.footer}>
        <p style={styles.footerText}>© 2025 Samparka. All rights reserved.</p>
      </div>
    </div>
  );
};

const styles = {
  sidebar: {
    width: '305px',
    height: '100vh',
    backgroundColor: '#ffffff',
    color: '#333333',
    position: 'fixed',
    top: 0,
    left: 0,
    padding: '2rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.05)',
    zIndex: 100,
    borderRight: '1px solid #f0f0f0'
  },
  logo: {
    fontSize: '1.8rem',
    marginBottom: '2.5rem',
    color: '#1e3a8a',
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: '1px'
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  navLink: {
    fontSize: '1.1rem',
    color: '#4b5563',
    textDecoration: 'none',
    padding: '0.75rem 1rem',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    transition: 'all 0.2s ease',
    fontWeight: '500'
  },
  activeLink: {
    color: '#2563eb',
    backgroundColor: '#f0f7ff'
  },
  icon: {
    fontSize: '1.6rem'
  },
  channelSection: {
    marginTop: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  },
  addChannelButton: {
    background: 'none',
    border: 'none',
    color: '#4b5563',
    cursor: 'pointer',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    transition: 'all 0.2s ease',
    marginTop: '0.5rem',
    fontSize: '1rem',
    fontWeight: '500',
    gap: '0.75rem'
  },
  addChannelIcon: {
    fontSize: '1.8rem'
  },
  addChannelText: {
    color: '#4b5563'
  },
  inviteMembersButton: {
    background: 'none',
    border: 'none',
    color: '#4b5563',
    cursor: 'pointer',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    transition: 'all 0.2s ease',
    fontSize: '1rem',
    fontWeight: '500',
    gap: '0.75rem'
  },
  inviteMembersIcon: {
    fontSize: '1.8rem'
  },
  inviteMembersText: {
    color: '#4b5563'
  },
  channelList: {
    marginTop: '0.5rem',
    paddingLeft: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem'
  },
  channelItem: {
    fontSize: '1rem',
    color: '#6b7280',
    textDecoration: 'none',
    padding: '0.5rem 0.75rem',
    borderRadius: '6px',
    transition: 'all 0.2s ease',
    fontWeight: '400'
  },
  activeChannelItem: {
    color: '#2563eb',
    backgroundColor: '#f0f7ff',
    fontWeight: '500'
  },
  footer: {
    marginTop: 'auto',
    textAlign: 'center',
    padding: '1rem 0'
  },
  footerText: {
    fontSize: '0.9rem',
    color: '#9ca3af'
  }
};

export default Sidebar;
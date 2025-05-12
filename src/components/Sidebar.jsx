import React from 'react';

function Sidebar({ role }) {
  return (
    <div className="w-24 h-full bg-white border-r border-gray-200 flex flex-col">
      {/* Menu Icon */}
      <div className="flex justify-center py-4">
        <button className="text-gray-600 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Add Button */}
      <div className="flex justify-center mt-2 mb-6">
        <button className="bg-pink-100 hover:bg-pink-200 w-12 h-12 rounded-full flex items-center justify-center focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1">
        <ul>
          {/* Shared Items */}
          <SidebarItem label="Attendance" iconPath="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
          <SidebarItem label="Messages" iconPath="M2.003 5.884L10 9.882l7.997-3.998..." />
          <SidebarItem label="Channels" iconPath="M7 3a1 1 0 000 2h6a1..." />
          <SidebarItem label="Label" iconPath="M17.707 9.293a1 1 0..." />

          {/* Admin-Only Items */}
          {role === 'admin' && (
  <>
    <SidebarItem label="Team Setup" iconPath="M5 3a2 2 0 00-2 2v10..." />
    <SidebarItem label="Announcements" iconPath="M3 3h14a2 2 0 012 2v10..." />
  </>
)}

        </ul>
      </nav>
    </div>
  );
}

function SidebarItem({ label, iconPath }) {
  return (
    <li>
      <a href="#" className="flex flex-col items-center py-3 text-gray-600 hover:bg-gray-50">
        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d={iconPath} />
          </svg>
        </div>
        <span className="text-xs mt-1">{label}</span>
      </a>
    </li>
  );
}

export default Sidebar;

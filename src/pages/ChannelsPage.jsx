import React from 'react';

const ChannelsPage = () => {
  return (
    <div className="channels-page">
      <style>
        {`
          .channels-page {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            color: #333;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px 20px 50px 200px;
            height: 100vh;
            margin-left: 85px;
          }

          .page-title {
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 20px;
            padding: 15px 0;
            border-bottom: 1px solid #eaeaea;
          }

          .channels-container {
            display: grid;
            grid-template-columns: 220px 1fr;
            gap: 25px;
            height: calc(100vh - 100px);
          }

          .channels-sidebar {
            background-color: #f9f9f9;
            border: 1px solid #eaeaea;
            border-radius: 8px;
            padding: 12px;
            overflow-y: auto;
            font-size: 0.95em;
          }

          .channels-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 15px;
            border-bottom: 1px solid #eaeaea;
            margin-bottom: 15px;
          }

          .channels-header h2 {
            font-size: 18px;
            font-weight: 600;
            margin: 0;
          }

          .create-channel-button {
            background-color: #4f46e5;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 6px 12px;
            font-size: 14px;
            cursor: pointer;
          }

          .category-title {
            font-size: 14px;
            font-weight: 600;
            color: #6b7280;
            text-transform: uppercase;
            margin-bottom: 8px;
          }

          .channel-list {
            list-style-type: none;
            padding: 0;
            margin: 0;
          }

          .channel-item {
            display: flex;
            align-items: center;
            padding: 6px 8px;
            border-radius: 4px;
            cursor: pointer;
            margin-bottom: 2px;
          }

          .channel-item:hover {
            background-color: #f3f4f6;
          }

          .channel-item.active {
            background-color: #e5e7eb;
            font-weight: 500;
          }

          .channel-icon {
            color: #6b7280;
            margin-right: 8px;
            font-weight: bold;
          }

          .channels-main {
            overflow-y: auto;
          }

          .section-title {
            font-size: 20px;
            font-weight: 600;
            margin: 25px 0 10px 0;
            padding-bottom: 10px;
            border-bottom: 1px solid #eaeaea;
          }

          .announcement-list {
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin-bottom: 30px;
          }

          .announcement-card {
            border: 1px solid #eaeaea;
            border-radius: 8px;
            padding: 16px;
            background-color: white;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
          }

          .announcement-title {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 6px;
          }

          .announcement-date {
            font-size: 13px;
            color: #6b7280;
            margin-bottom: 8px;
          }

          .announcement-desc {
            font-size: 14px;
            color: #4b5563;
            line-height: 1.4;
          }
        `}
      </style>

      <h1 className="page-title">Channels</h1>

      <div className="channels-container">
        <div className="channels-sidebar">
          <div className="channels-header">
            <h2>Your Channels</h2>
            <button className="create-channel-button">+ Create</button>
          </div>

          <div className="category">
            <h3 className="category-title">Public Channels</h3>
            <ul className="channel-list">
              <li className="channel-item active">
                <span className="channel-icon">#</span>
                general
              </li>
              <li className="channel-item">
                <span className="channel-icon">#</span>
                announcements
              </li>
              <li className="channel-item">
                <span className="channel-icon">#</span>
                events
              </li>
            </ul>
          </div>

          <div className="category">
            <h3 className="category-title">Private Channels</h3>
            <ul className="channel-list">
              <li className="channel-item">
                <span className="channel-icon">#</span>
                team-alpha
              </li>
              <li className="channel-item">
                <span className="channel-icon">#</span>
                marketing
              </li>
            </ul>
          </div>
        </div>

        <div className="channels-main">
          <div className="section-title">Upcoming Events</div>
          <div className="announcement-list">
            <div className="announcement-card">
              <div className="announcement-title">Monthly All-Hands Meeting</div>
              <div className="announcement-date">May 10, 2025 • 3:00 PM</div>
              <div className="announcement-desc">Join us for the company-wide all-hands meeting where we'll share updates, wins, and upcoming goals.</div>
            </div>
            <div className="announcement-card">
              <div className="announcement-title">UX Design Workshop</div>
              <div className="announcement-date">May 12, 2025 • 11:00 AM</div>
              <div className="announcement-desc">A hands-on session to explore our new design system and get feedback on user flows.</div>
            </div>
          </div>

          <div className="section-title">Reminders</div>
          <div className="announcement-list">
            <div className="announcement-card">
              <div className="announcement-title">Submit Q2 Progress Reports</div>
              <div className="announcement-date">Deadline: May 15, 2025</div>
              <div className="announcement-desc">All team leads must submit their progress reports via the shared drive before the deadline.</div>
            </div>
            <div className="announcement-card">
              <div className="announcement-title">RSVP for Annual Retreat</div>
              <div className="announcement-date">RSVP by: May 20, 2025</div>
              <div className="announcement-desc">Don’t forget to RSVP for our team retreat happening next month!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelsPage;

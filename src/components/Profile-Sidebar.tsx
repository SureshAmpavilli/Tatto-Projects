import React from 'react';
import { NavLink } from 'react-router-dom';
import { User, Heart, Search, MessageCircle, Star } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { name: 'Matches', icon: Heart, path: '/matches' },
    { name: 'Activity', icon: User, path: '/activity' },
    { name: 'Search', icon: Search, path: '/search' },
    { name: 'Messenger', icon: MessageCircle, path: '/messenger' },
    { name: 'Upgrade', icon: Star, path: '/upgrade', badge: '42% OFF' }
  ];

  return (
    <div className="w-64 bg-white shadow-sm border-r border-gray-200 min-h-screen">
      <div className="p-6">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-gray-600" />
          </div>
          <div className="ml-3">
            <h3 className="font-semibold text-gray-800">Hi Suresh!</h3>
            <p className="text-sm text-gray-500">TZWY5269</p>
            <button className="text-sm text-pink-500 hover:underline">Edit Profile</button>
          </div>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-pink-50 text-pink-600 border-r-2 border-pink-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`
              }
            >
              <div className="flex items-center">
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </div>
              {item.badge && (
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                  {item.badge}
                </span>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

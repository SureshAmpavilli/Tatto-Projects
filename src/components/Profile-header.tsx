import React from 'react';
import { Bell, Menu, Users } from 'lucide-react';

const ProfileHeader = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-4 py-3">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        {/* Branding Section */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">
            <span className="text-black">E-</span>
            <span className="text-black">AdvocateServices</span>
          </h1>
        
        </div>

        {/* Icon Buttons Section */}
        <div className="flex items-center space-x-4 mt-3 sm:mt-0">
          <button aria-label="User list" className="hover:text-gray-800 transition-colors text-gray-600">
            <Users className="w-5 h-5" />
          </button>

          <button aria-label="Notifications" className="relative hover:text-gray-800 transition-colors text-gray-600">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
              1
            </span>
          </button>

          <button aria-label="Menu" className="hover:text-gray-800 transition-colors text-gray-600">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;

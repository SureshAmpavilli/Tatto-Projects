import React from 'react';
import { Outlet } from 'react-router-dom';
import ProfileHeader from './Profile-header';
import ProSidebar from './Prof-Sidebar';
import PremiumSection from './Premium';
import MatchesPage from '../pages/MatchsPage';

const LayoutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ProfileHeader />
      <div className="flex">
        <ProSidebar />
        <main className="flex-1 p-6">
          <Outlet />
         
        </main>
        <PremiumSection />
      </div>
    
    </div>
  );
};

export default LayoutPage;

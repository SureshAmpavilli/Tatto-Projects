import React from 'react';
import { Clock, Heart, Star, MessageCircle } from 'lucide-react';

const ActivityPage = () => {
  const activities = [
    {
      type: 'interest',
      message: 'You sent interest to Priya Sharma',
      time: '2 hours ago',
      icon: Heart,
      color: 'text-pink-600'
    },
    {
      type: 'shortlist',
      message: 'You shortlisted Anita Reddy',
      time: '5 hours ago',
      icon: Star,
      color: 'text-yellow-600'
    },
    {
      type: 'message',
      message: 'New message from Kavitha',
      time: '1 day ago',
      icon: MessageCircle,
      color: 'text-blue-600'
    },
    {
      type: 'interest',
      message: 'Received interest from Deepika',
      time: '2 days ago',
      icon: Heart,
      color: 'text-pink-600'
    }
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Activity</h2>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center p-4 border-b border-gray-100 last:border-b-0">
            <div className={`p-2 rounded-full mr-4 ${activity.color} bg-gray-50`}>
              <activity.icon className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="text-gray-800 font-medium">{activity.message}</p>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <Clock className="w-4 h-4 mr-1" />
                {activity.time}
              </div>
            </div>
          </div>
        ))}
        
        {activities.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            <p>No recent activities</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityPage;

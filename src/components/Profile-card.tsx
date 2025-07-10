import React from 'react';
import { Heart, Star, MessageCircle, Camera } from 'lucide-react';

import { FaRegHandshake } from "react-icons/fa6";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

interface ProfileCardProps {
  name: string;
  age: number;
  height: string;
  location: string;
  caste: string;
  education: string;
  occupation: string;
  income: string;
  maritalStatus: string;
  lastSeen: string;
  imageUrl?: string;
  photoCount?: number;
  isRequestPhoto?: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  age,
  height,
  location,
  caste,
  education,
  occupation,
  income,
  maritalStatus,
  lastSeen,
  imageUrl,
  photoCount,
  isRequestPhoto
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
      <div className="flex">
        <div className="relative">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={name}
              className="w-32 h-40 object-cover rounded-lg"
            />
          ) : (
            <div className="w-32 h-40 bg-gradient-to-br from-teal-600 to-teal-800 rounded-lg flex items-center justify-center relative">
              <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
              {isRequestPhoto && (
                <button className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-teal-700 text-white px-3 py-1 rounded text-sm border border-white">
                  <Camera className="w-4 h-4 inline mr-1" />
                  Request photo
                </button>
              )}
            </div>
          )}
          {photoCount && (
            <span className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
              📷 {photoCount}
            </span>
          )}
        </div>

        <div className="flex-1 ml-4">
          <p className="text-sm text-gray-500 mb-1">Last seen on {lastSeen}</p>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}, {age}</h3>
          
          <div className="space-y-1 text-sm text-gray-600 mb-4">
            <p>• {location} </p>
            <p className="flex items-center">
              💼 {occupation} • {income}
            </p>
            <p className="flex items-center">
              🎓 {education} • 💍 {maritalStatus}
            </p>
          </div>

          <div className="flex space-x-3">
            <button className="flex items-center px-3 py-2 text-pink-600 hover:bg-pink-50 rounded-lg text-sm">
              <FaRegHandshake  className="w-4 h-4 mr-1" />
              Interest
            </button>
            <button className="flex items-center px-3 py-2 text-pink-600 hover:bg-pink-50 rounded-lg text-sm">
              <FaHandHoldingMedical  className="w-4 h-4 mr-1 fill-current" />
              Super Interest
            </button>
            <button className="flex items-center px-3 py-2 text-pink-600 hover:bg-pink-50 rounded-lg text-sm">
              <Star className="w-4 h-4 mr-1" />
              Shortlist
            </button>
            <button className="flex items-center px-3 py-2 text-pink-600 hover:bg-pink-50 rounded-lg text-sm">
              <MessageCircle className="w-4 h-4 mr-1" />
              Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

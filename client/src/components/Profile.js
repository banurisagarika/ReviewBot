import React from 'react';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Profile</h1>
          <div className="space-y-4">
            <p className="text-gray-600">
              This is your profile page. You can add your profile information here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
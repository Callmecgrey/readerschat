import React from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import ProfileDetails from '../components/Profile/ProfileDetails';

const ProfilePage: React.FC = () => {
  // Dummy profile data
  const userProfile = {
    username: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Just a regular user.',
    profilePicture: 'https://img.icons8.com/fluency/96/user-male-circle--v1.png', // Example path
    contactNumber: '+1234567890'
  };

  return (
    <DashboardLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <ProfileDetails profile={userProfile} />
      </div>
    </DashboardLayout>
  );
};

export default ProfilePage;

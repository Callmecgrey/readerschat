import React, { useState } from 'react';

interface Profile {
  username: string;
  email: string;
  bio: string;
  profilePicture: string;
  contactNumber: string;
}

interface ProfileDetailsProps {
  profile: Profile;
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({ profile }) => {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: profile.username,
    email: profile.email,
    bio: profile.bio,
    contactNumber: profile.contactNumber,
  });

  const handleEdit = () => {
    setEditing(!editing);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Implement save logic here
    console.log('Saved data:', formData);
    setEditing(false);
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <div className="flex items-center mb-6">
        <img src={profile.profilePicture} alt="Profile" className="w-24 h-24 rounded-full object-cover mr-4" />
        {editing ? (
          <button
            onClick={handleEdit}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Save
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Edit
          </button>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Username</label>
        {editing ? (
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        ) : (
          <p className="mt-1 text-gray-900">{formData.username}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        {editing ? (
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        ) : (
          <p className="mt-1 text-gray-900">{formData.email}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Bio</label>
        {editing ? (
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            rows={3}
          />
        ) : (
          <p className="mt-1 text-gray-900">{formData.bio}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Contact Number</label>
        {editing ? (
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        ) : (
          <p className="mt-1 text-gray-900">{formData.contactNumber}</p>
        )}
      </div>

      {editing && (
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Save Changes
        </button>
      )}
    </div>
  );
};

export default ProfileDetails;

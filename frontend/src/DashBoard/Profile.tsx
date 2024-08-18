import React, { useState } from 'react';

const Profile = () => {
  const initialProfile = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: ''
  };

  const [profile, setProfile] = useState(initialProfile);
  const [editMode, setEditMode] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated:', profile);
    setEditMode(false);
  };

  return (
    <div className='flex flex-col items-center mt-16'>
      <div className='w-full max-w-3xl bg-white shadow-md rounded-lg overflow-hidden mb-8'>
        <div className='px-6 py-4'>
          <div className='flex justify-between items-center mb-6'>
            <h1 className='text-2xl font-bold'>Profile Details</h1>
            {!editMode && (
              <button
                className='text-blue-500 hover:text-blue-700 focus:outline-none'
                onClick={() => setEditMode(true)}
              >
                Edit Profile
              </button>
            )}
          </div>

          <form onSubmit={handleSubmit}>
            <div className='mb-4 flex flex-wrap'>
              <label htmlFor='firstName' className='block text-xl font-medium text-gray-700 mb-1'>First Name:</label>
              {editMode ? (
                <input
                  type='text'
                  id='firstName'
                  name='firstName'
                  value={profile.firstName}
                  onChange={handleInputChange}
                  className='block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 text-xl'
                  required
                />
              ) : (
                <p className='text-gray-800'>{profile.firstName}</p>
              )}
            </div>

            <div className='mb-4 flex flex-wrap'>
              <label htmlFor='lastName' className='block text-xl font-medium text-gray-700 mb-1'>Last Name:</label>
              {editMode ? (
                <input
                  type='text'
                  id='lastName'
                  name='lastName'
                  value={profile.lastName}
                  onChange={handleInputChange}
                  className='block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 text-xl'
                  required
                />
              ) : (
                <p className='text-gray-800'>{profile.lastName}</p>
              )}
            </div>

            <div className='mb-4 flex flex-wrap'>
              <label htmlFor='email' className='block text-xl font-medium text-gray-700 mb-1'>Email:</label>
              {editMode ? (
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={profile.email}
                  onChange={handleInputChange}
                  className='block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 text-xl'
                  required
                />
              ) : (
                <p className='text-gray-800'>{profile.email}</p>
              )}
            </div>

            <div className='mb-4 flex flex-wrap'>
              <label htmlFor='phone' className='block text-xl font-medium text-gray-700 mb-1'>Phone:</label>
              {editMode ? (
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  value={profile.phone}
                  onChange={handleInputChange}
                  className='block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 text-xl'
                />
              ) : (
                <p className='text-gray-800'>{profile.phone}</p>
              )}
            </div>

            <div className='mb-4 flex flex-wrap'>
              <label htmlFor='address' className='block text-xl font-medium text-gray-700 mb-1'>Address:</label>
              {editMode ? (
                <textarea
                  id='address'
                  name='address'
                  value={profile.address}
                  onChange={handleInputChange}
                  rows={3}
                  className='block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 text-xl'
                />
              ) : (
                <p className='text-gray-800'>{profile.address}</p>
              )}
            </div>

            {editMode && (
              <div className='flex justify-end'>
                <button
                  type='submit'
                  className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none'
                >
                  Save Profile
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;

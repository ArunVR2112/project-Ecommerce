import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginData } from '../Hooks/FetchLinks';
import { DataContext } from '../context/dataContext/DataContext.tsx';

const LogIn = () => {
  const [data, setData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { setUser } = useContext(DataContext);
  const navigate = useNavigate();

  // Default admin credentials
  const adminCredentials = {
    email: 'admin@example.com',
    password: 'adminpassword', // Replace with a secure password in a real application
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if input matches admin credentials
    if (data.email === adminCredentials.email && data.password === adminCredentials.password) {
      setUser({
        status: 200,
        data: {
          email: adminCredentials.email,
          role: 'admin',
          // Any other admin-specific data
        },
      });
      navigate('/admin-dashboard'); // Redirect to an admin-specific page
      return;
    }

    // If not admin, proceed with normal login process
    try {
      const result = await loginData(data);
      if (result.status === 200) {
        setUser({
          status: result.status,
          data: result.data,
        });
        navigate('/home');
      }
    } catch (err) {
      console.log(err.response?.data);
      setError(err.response?.data || 'An error occurred');
    }
  };

  return (
    <section className='bg-gray-50 dark:bg-gray-500'>
      <div className='flex flex-col items-center justify-center px-6 py-4 mx-auto md:h-screen lg:py-0'>
        
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-2 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Log in to your account
            </h1>
            <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
              <div>
                <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Your email</label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='name@company.com'
                  required
                  value={data.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Password</label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='••••••••'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  required
                  value={data.password}
                  onChange={handleChange}
                />
              </div>
              {error && <p className="text-sm text-red-600 dark:text-red-500">{error}</p>}
              <div className='border-2 border-gray-300 p-2 rounded-lg shadow-lg'>
                <button type='submit' className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
                  Log In
                </button>
              </div>
              <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                Don't have an account? <Link to='/registration' className='font-medium text-primary-600 hover:underline dark:text-primary-500'>Create account here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;

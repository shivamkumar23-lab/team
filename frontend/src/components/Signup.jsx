import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await axios.post('http://localhost:4000/api/signup', userData);
      setMessage(response.data.message || 'User registered successfully!');
      setUserData({ username: '', email: '', password: '' });
    } catch (err) {
      const errorMsg =
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : 'Error registering user.';
      setError(errorMsg);
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-900'>
      <div className='w-96 p-8 bg-gray-800 rounded shadow'>
        <h1 className='text-3xl text-white font-bold text-center mb-6'>📚 EduPath</h1>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label className='block text-white'>Username</label>
            <input
              type='text'
              name='username'
              value={userData.username}
              onChange={handleChange}
              placeholder='Enter your username'
              className='w-full p-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none'
              required
            />
          </div>
          <div>
            <label className='block text-white'>Email</label>
            <input
              type='email'
              name='email'
              value={userData.email}
              onChange={handleChange}
              placeholder='Enter your email'
              className='w-full p-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none'
              required
            />
          </div>
          <div>
            <label className='block text-white'>Password</label>
            <input
              type='password'
              name='password'
              value={userData.password}
              onChange={handleChange}
              placeholder='Enter your password'
              className='w-full p-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none'
              required
            />
          </div>
          <button
            type='submit'
            className='w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700'
          >
            Sign Up
          </button>
        </form>
        {message && <p className='mt-4 text-center text-green-500'>{message}</p>}
        {error && <p className='mt-4 text-center text-red-500'>{error}</p>}
      </div>
    </div>
  );
};

export default Signup;

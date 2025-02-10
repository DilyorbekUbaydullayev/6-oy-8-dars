// src/components/forms/LoginForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onSubmit, error }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
          Ism
        </label>
        <input
          id="username"
          name="username"
          type="text"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md "
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Parol
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md "
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 "
      >
        Kirish
      </button>
      <div className="text-center mt-4">
          <button
            type="button"
            className="ml-1 text-indigo-600 hover:underline"
            onClick={() => navigate('/register')}
          >
            Ro‘yxatdan o‘tish
          </button>
      </div>
    </form>
  );
};

export default LoginForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterForm = ({ onSubmit, error }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = "Ism majburiy";
    if (!formData.email) {
      errors.email = "Email majburiy";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email noto'g'ri formatda";
    }
    if (!formData.password) errors.password = "Parol majburiy";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      onSubmit(formData);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Ism
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md "
          value={formData.name}
          onChange={handleChange}
        />
        {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md "
          value={formData.email}
          onChange={handleChange}
        />
        {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
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
        {formErrors.password && <p className="text-red-500 text-xs mt-1">{formErrors.password}</p>}
      </div>
      
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 "
      >
        Ro'yxatdan o'tish
      </button>
      <div className="text-center mt-4">
          <button
            type="button"
            className="ml-1 text-indigo-600 hover:underline"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
      </div>
    </form>
  );
};

export default RegisterForm;
// src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../services/axios';
import RegisterForm from '../../components/forms/RegisterForm';
import AuthLayout from '../../components/layout/AuthLayout';

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (formData) => {
    

    try {
      await axiosInstance.post('/auth/signup', {
        username: formData.name,
        email: formData.email,
        password: formData.password
      });
      navigate('/login');
    } catch (err) {
      setError('Ro\'yxatdan o\'tishda xatolik yuz berdi');
    }
  };

  return (
    <AuthLayout title="Ro'yxatdan o'tish">
      <RegisterForm onSubmit={handleSubmit} error={error} />
    </AuthLayout>
  );
};

export default Register;
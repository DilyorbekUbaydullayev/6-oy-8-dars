
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../services/axios';
import LoginForm from '../../components/forms/LoginForm';
import AuthLayout from '../../components/layout/AuthLayout';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (formData) => {
    try {
      const response = await axiosInstance.post('/auth/signin', formData);
      localStorage.setItem('token', response.data.token);
      navigate('/home');
    } catch (err) {
      setError('Login xatosi yuz berdi');
      navigate('/register');
    }
  };

  return (
    <AuthLayout title="Tizimga kirish">
      <LoginForm onSubmit={handleSubmit} error={error} />
    </AuthLayout>
  );
};

export default Login;
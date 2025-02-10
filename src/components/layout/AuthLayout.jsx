
import React from 'react';

const AuthLayout = ({ children, title }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg border border-gray-400">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
import React from 'react';
import AuthForm from '../components/Auth/AuthForm';

const SignupPage: React.FC = () => {
  return <AuthForm isLogin={false} />;
};

export default SignupPage;

import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../services/firebase';
import ProtectedRoute from './ProtectedRoutes';
import './Dashboard.css'

const Dashboard = () => {
  const [user] = useAuthState(auth);

  if (!user) {
    return <p>You need to log in to access the dashboard.</p>;
  }

 return (
  
  <ProtectedRoute>
    <div className='dashboard-container'>
      <h1>Welcome to your Dashboard</h1>
      <p> your email: {user.email}</p>
    </div>
    </ProtectedRoute>
  );
};



 
export default Dashboard;
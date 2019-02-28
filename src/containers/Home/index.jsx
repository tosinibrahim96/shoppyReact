import React from 'react';
import Navbar from '../Navbar';
import DashboardCard from '../../components/DashboardCard';

export default function Home() {
  return <Navbar displayPage={<DashboardCard />} />;
}

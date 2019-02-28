import React from 'react';
import Navbar from '../../components/Navbar';
import InfoCard from '../../components/InfoCard';

export default function Home() {
  return <Navbar displayPage={<InfoCard />} />;
}

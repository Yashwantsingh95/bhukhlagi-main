import { useState } from 'react';
import NavBar from '../component/NavBar';
import FloatingBgDoodles from '../component/FloatingBgDoodles';
import { useParams } from "react-router-dom";
import Outlets from '../layout/outlets';
import OutletDetails from '../layout/OutletDetails';
import Footer from '../component/Footer';
import Test from '../component/Test';
import Background from '../layout/Background';

const Locations = () => {
  const { city } = useParams();
  return (
    <>
      <NavBar currentPage='locations' />
      <FloatingBgDoodles />
      {city ? <OutletDetails /> : <Outlets />}
      <Footer />
    </>
  )
};

export default Locations;
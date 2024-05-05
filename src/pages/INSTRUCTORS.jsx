import React from 'react';
import { Link } from 'react-router-dom';
import Footer from "../components/footer/Footer";
import CustomHeader from '../components/Header/CustomHeader';

export const INSTRUCTORS = () => {
  return (
    
    <div>
       <CustomHeader />
      <Link to='/RawsRequests'>
        <button className="block bg-black text-white px-4 py-2 rounded-full mb-4 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-black">Inventory Manager</button>
      </Link>
      <Link to='/RawcsRequests'>
        <button className="block bg-black text-white px-4 py-2 rounded-full mb-4 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-black">Class & Schedule Manager</button>
      </Link>
      <Link to='/RawfbRequests'>
        <button className="block bg-black text-white px-4 py-2 rounded-full mb-4 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-black">Customer Service Manager</button>
      </Link>
      <Link to='/RawptRequests'>
        <button className="block bg-black text-white px-4 py-2 rounded-full mb-4 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-black">Personal Training Manager</button>
      </Link>
      <Link to='/Attendance'>
        <button className="block bg-black text-white px-4 py-2 rounded-full mb-4 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-black">Attendance Manager</button>
      </Link>
      <Link to='/RawcsRequests'>
        <button className="block bg-black text-white px-4 py-2 rounded-full mb-4 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-black">Medical Manager</button>
      </Link>
      <Footer/>
    </div>
  );
};

export default INSTRUCTORS;

import React from 'react';
import { Link } from 'react-router-dom';
import CustomHeader from '../components/Header/CustomHeader';
import card22 from '../../public/Ashvi/ashvi01.jpg';
import card23 from '../../public/Ashvi/ashvi02.jpg';
import card24 from '../../public/Ashvi/ashvi03.jpg';

import Footer from "../components/footer/Footer";

export const RelHome = () => {
  return (
    <div>
            <CustomHeader />
      <h1 className="text-5xl font-extrabold text-center text-gray-900 mt-8 mb-12">Customer Servise Management </h1>
      <div className="flex justify-around bg-zinc-900">
        <div className="w-60 h-100 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-red-600 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
          <img src={card22} alt="Card Image" className="w-full h-40 rounded-2xl mb-3" />
          <div>
            <p className="font-bold text-lg">We are</p>
            <p className="text-sm">The personal attention I received at [Life touch] was exceptional. My trainer tailored a program that suited my specific needs and was always there to encourage and push me beyond my limits</p>
          </div>
         
          <button className="bg-sky-700 font-bold text-sm p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">View Programs</button>
         
        </div>
        <div className="w-60 h-100 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-red-600 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
          <img src={card23} alt="Card Image" className="w-full h-40 rounded-2xl mb-3" />
          <div>
            <p className="font-bold text-lg">About Us</p>
            <p className="text-sm">After trying various fitness routines and failing, I finally found success with [Life touch].</p>
          </div>
         
          <button className="bg-sky-700 font-bold text-sm p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">View Plans</button>
         
        </div>
        <div className="w-60 h-100 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-red-600 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
          <img src={card24} alt="Card Image" className="w-full h-40 rounded-2xl mb-3" />
          <div>
            <p className="font-bold text-lg">Raise Ticket</p>
            <p className="text-sm">Book your personalized training sessions with our expert trainers for maximum results.</p>
          </div>
          
          <button className="bg-sky-700 font-bold text-sm p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">Book Now</button>
          
        </div>
        
      </div>
      <footer className="mt-8 text-center text-gray-500">
        
      </footer>
      <p className="mt-8 text-center text-gray-700">Our Personal Training Management System offers comprehensive solutions to manage your fitness programs, nutrition plans, training sessions, and progress tracking efficiently. With our advanced tools and expert guidance, achieving your fitness goals has never been easier!</p>
  
      <Footer/>
        </div>
  )
};

export default RelHome;

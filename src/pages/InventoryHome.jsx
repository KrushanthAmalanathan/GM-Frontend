import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CustomHeader from '../components/Header/CustomHeader';
import card12 from '../../public/kru/it02.png';
import card11 from '../../public/kru/it03.png';
import card5 from '../../public/kru/it04.png';
import card6 from '../../public/kru/it05.png';
import card7 from '../../public/kru/it06.png';
import card8 from '../../public/kru/it07.png';
import card9 from '../../public/kru/it08.png';
import card10 from '../../public/kru/it09.png';
import Footer from "../components/footer/Footer";


export default function Widget() {
  return (
    <body className="bg-zinc-900 text-white">
      <CustomHeader />
      <div className="relative">
        <img
          src="/home1.jpg"
          alt="logo"
          className="w-full "
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
          <h1 className="text-4xl font-bold mb-2">Perfect Gym Store !!</h1>
          <p className="text-xl mb-4">All progress takes place outside the comfort zone</p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Click Here →
          </button>
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-green-400 text-2xl font-bold">Accessories</h2>
        <div className="w-full bg-green-400 h-1 mb-4"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-zinc-800 p-4 rounded-lg">
          <img src={card12} alt="Card Image" className="w-full h-40 rounded-2xl mb-3" />


            <p>Suspendisse volutpat massa</p>
            <p className="text-green-400">1200.00 - 1500.00</p>
          </div>
          <div className="bg-zinc-800 p-4 rounded-lg">
          <img src={card5} alt="Card Image" className="w-full h-40 rounded-2xl mb-3" />


            <p>Nulla feugiat felis tempor sem</p>
            <p className="text-red-400 line-through">700.00</p>
            <p className="text-green-400">800.00</p>
          </div>
          <div className="bg-zinc-800 p-4 rounded-lg">
            <img src={card6} alt="Card Image" className="w-full h-40 rounded-2xl mb-3" />


            <p>Fusce nec diam et dolor</p>
            <p className="text-red-400 line-through">1800.00</p>
            <p className="text-green-400">2000.00</p>
          </div>
          <div className="bg-zinc-800 p-4 rounded-lg">
            <img src={card7} alt="Card Image" className="w-full h-40 rounded-2xl mb-3" />


            <p>Morbi varius ligula eget ante</p>
            <p className="text-green-400">900.00</p>
          </div>
          <div className="bg-zinc-800 p-4 rounded-lg">
            <img src={card8} alt="Card Image" className="w-full h-40 rounded-2xl mb-3" />


            <p>Suspendisse volutpat massa</p>
            <p className="text-green-400">1200.00 </p>
          </div>
          <div className="bg-zinc-800 p-4 rounded-lg">
           <img src={card9} alt="Card Image" className="w-full h-40 rounded-2xl mb-3" />


            <p>Nulla feugiat felis tempor sem</p>
            <p className="text-red-400 line-through"></p>
            <p className="text-green-400">800.00</p>
          </div>
          <div className="bg-zinc-800 p-4 rounded-lg">
            <img src={card10} alt="Card Image" className="w-full h-40 rounded-2xl mb-3" />


            <p>Fusce nec diam et dolor</p>
            <p className="text-red-400 line-through"></p>
            <p className="text-green-400">2000.00</p>
          </div>
          <div className="bg-zinc-800 p-4 rounded-lg">
            <img src={card11} alt="Card Image" className="w-full h-40 rounded-2xl mb-3" />


            <p>Morbi varius ligula eget ante</p>
            <p className="text-green-400">900.00</p>
          </div>
        </div>
       
      </div>
      <Footer/>
    </body>

  )
}
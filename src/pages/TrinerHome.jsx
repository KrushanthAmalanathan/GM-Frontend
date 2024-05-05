import React from 'react'
import NoteTakingApp from './Keep/NoteTakingApp'
import CalendarComponent from './Keep/CalendarComponent'
import CustomHeader from '../components/Header/CustomHeader';
import card1 from '../../public/Harshi/tr2.jpg';
import card2 from '../../public/Harshi/tr1.jpg';
import card3 from '../../public/Harshi/tr4.jpg';
import card4 from '../../public/Harshi/tr3.jpg';
import Footer from "../components/footer/Footer";

const TrinerHome = () => {
    return (
        
        <div>
            <CustomHeader />
      <h1 className="text-5xl font-extrabold text-center text-gray-900 mt-8 mb-12">Personal Training Management System</h1>
      <div className="flex justify-around bg-zinc-900">
        <div className="w-60 h-100 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
          <img src={card1} alt="Card Image" className="w-full h-40 rounded-2xl mb-3" />
          <div>
            <p className="font-bold text-lg">Personal Training Programs</p>
            <p className="text-sm">Explore our variety of personalized training programs designed to help you achieve your fitness goals.</p>
          </div>
         
          <button className="bg-sky-700 font-bold text-sm p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">View Programs</button>
         
        </div>
        <div className="w-60 h-100 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
          <img src={card2} alt="Card Image" className="w-full h-40 rounded-2xl mb-3" />
          <div>
            <p className="font-bold text-lg">Nutrition Plans</p>
            <p className="text-sm">Discover our customized nutrition plans to fuel your body for optimal performance and results.</p>
          </div>
         
          <button className="bg-sky-700 font-bold text-sm p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">View Plans</button>
         
        </div>
        <div className="w-60 h-100 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
          <img src={card3} alt="Card Image" className="w-full h-40 rounded-2xl mb-3" />
          <div>
            <p className="font-bold text-lg">Training Sessions</p>
            <p className="text-sm">Book your personalized training sessions with our expert trainers for maximum results.</p>
          </div>
          
          <button className="bg-sky-700 font-bold text-sm p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">Book Now</button>
          
        </div>
        <div className="w-60 h-100 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
          <img src={card4} alt="Card Image" className="w-full h-40 rounded-2xl mb-3" />
          <div>
            <p className="font-bold text-lg">Progress Tracking</p>
            <p className="text-sm">Monitor your progress and track your achievements with our advanced tracking tools.</p>
          </div>
          
          <button className="bg-sky-700 font-bold text-sm p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">Track Now</button>
        
        </div>
      </div>
      <footer className="mt-8 text-center text-gray-500">
        
      </footer>
      <p className="mt-8 text-center text-gray-700">Our Personal Training Management System offers comprehensive solutions to manage your fitness programs, nutrition plans, training sessions, and progress tracking efficiently. With our advanced tools and expert guidance, achieving your fitness goals has never been easier!</p>
    
        
            <NoteTakingApp />
            <Footer/>
        </div>
    )
}

export default TrinerHome;



import React from 'react';
import gymIcon from '../../public/titus/weightlifting.png';
import cardioIcon from '../../public/titus/cardio.jpg';
import yogaIcon from '../../public/titus/yoga.jpg';
import tredmillIcon from '../../public/titus/tredmill.jpg';
import funImage from '../../public/titus/fun.png'
import inclusivityImage from '../../public/titus/inclusivity.png'
import positivityImage from '../../public/titus/positivity.png'
import QuoteImage from '../../public/titus/quote.jpg'
import Logo from '../../public/logo.png'
import { Link } from 'react-router-dom'
import CustomHeader from '../components/Header/CustomHeader';



function Home() {
  return (

    <div className="App">

      <body className="bg-zinc-900 text-white">
        <CustomHeader />
        <div className="container mx-auto px-4">
          <header className="py-5">
            <h1 className="text-3xl font-bold">Explore Our Classes</h1>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <a href="gym" className="bg-green-800 p-4 rounded-lg block hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
              <img src={gymIcon} alt="Gym Icon" style={{ width: "150px", height: "150px", margin: "auto" }} />
              <h2 className="font-semibold">Gym Exercises</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </a>
            <a href="cardio" className="bg-green-800 p-4 rounded-lg block hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
              <img src={cardioIcon} alt="Cardio Icon" style={{ width: "150px", height: "150px", margin: "auto" }} />
              <h2 className="font-semibold">Cardio Exercises</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </a>
            <a href="yoga" className="bg-green-800 p-4 rounded-lg block hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
              <img src={yogaIcon} alt="Yoga Icon" style={{ width: "150px", height: "150px", margin: "auto" }} />
              <h2 className="font-semibold">Yoga Exercises</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </a>
            <a href="treadmill" className="bg-green-800 p-4 rounded-lg block hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
              <img src={tredmillIcon} alt="Treadmill Icon" style={{ width: "150px", height: "150px", margin: "auto" }} />
              <h2 className="font-semibold">Treadmill</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </a>
          </section>


          <br />

          <section className="bg-blue-900 text-white" >
            <div className="container mx-auto px-4 bg-green-700 rounded-lg" style={{ backgroundImage: `url(${QuoteImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>

              <div className="text-center py-20">
                <h1 className="text-4xl font-bold mb-4">Building strong and healthy people.</h1>
                <p className="text-xl mb-6">Graviton Fitness helps members achieve their fitness goals through tailored fitness plans from experienced coaches dedicated to your success.</p>
                <Link to='/csfitness/shome'>
                  <button className="bg-yellow-400 text-black px-8 py-3 rounded hover:bg-yellow-500">VIEW</button>
                </Link>

                <Link to="/csfitnesss/create" style={{ marginLeft: "10px" }}>
                  <button className="bg-yellow-400 text-black px-8 py-3 rounded hover:bg-yellow-500">BOOK YOUR SCHEDULE</button>
                </Link>
                <a />

              </div>
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "/" }}></div>
          </section>

          <br />


          <br></br>

          <section className="mb-8" style={{ backgroundImage: `url('../../assets/quote.jpg.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="text-center p-10 bg-green-700 rounded-lg">
              <h2 className="text-4xl font-bold mb-3">Transform your physique with our fitness plan.</h2>
              <ul className="list-disc list-inside mb-4">
                <li>Increase Muscle and Strength</li>
                <li>Be Healthier than before</li>
                <li>Increase Stamina</li>
              </ul>

              <Link to="/fbfitnesss/create" style={{ marginLeft: "10px" }}>
                <button className="bg-yellow-400 text-black px-8 py-3 rounded hover:bg-yellow-500">Contact us</button>
              </Link>
            </div>
          </section>

          <section className="mb-8 bg-green-700 p-1 rounded-lg">
            <h2 className="font-semibold">"Empower your fitness journey with personalized support from a dedicated Personal Trainer, alongside valuable resources such as nutrition tips, support networks, and engaging social features for a holistic approach to achieving your goals."</h2>
            <a href="https://www.healthline.com/nutrition/bodybuilding-meal-plan" target="_blank" rel="noopener noreferrer">
              <div style={{ display: "grid", justifyContent: "end" }}>
                <Link to="/ptfitnesss/create">
                  <button className="bg-yellow-400 text-black px-8 py-3 rounded hover:bg-yellow-500">Get Trainer</button>
                </Link>
              </div>

            </a>
          </section>


          <section className="mb-8 bg-green-700 p-1 rounded-lg">
            <h2 className="font-semibold">Enhance user experience with healthy nutrition tips, support resources, and social elements.</h2>
            <a href="https://www.healthline.com/nutrition/bodybuilding-meal-plan" target="_blank" rel="noopener noreferrer">
              <div style={{ display: "grid", justifyContent: "end" }}>
                <button className="bg-yellow-400 text-black px-8 py-3 rounded hover:bg-yellow-500">Explore</button>
              </div>

            </a>
          </section>

          <footer className="bg-green-800 p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-3">Embrace our Fitness Center</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center"> {/* Center the content */}
                <img src={positivityImage} alt="Positivity" className="mx-auto" style={{ width: "50px", height: "50px" }} /> {/* Resize image and center */}
                <h3 className="font-semibold">POSITIVITY</h3>
                <p>We are nurturers: we seek only to encourage, entertain, and empower.</p>
              </div>
              <div className="text-center"> {/* Center the content */}
                <img src={inclusivityImage} alt="Inclusivity" className="mx-auto" style={{ width: "50px", height: "50px" }} /> {/* Resize image and center */}
                <h3 className="font-semibold">INCLUSIVITY</h3>
                <p>Here we keep open minds. There is no one type or way in our diverse community. Come as you are!</p>
              </div>
              <div className="text-center"> {/* Center the content */}
                <img src={funImage} alt="Fun" className="mx-auto" style={{ width: "50px", height: "50px" }} /> {/* Resize image and center */}
                <h3 className="font-semibold">FUN</h3>
                <p>We know serious fitness is hard, but that doesn’t mean it can’t be an edge of your seat, can’t get enough, look forward to your workouts party.</p>
              </div>
            </div>
          </footer>

          <br />

          <footer class="bg-zinc-800 text-white p-10 rounded-lg">
            <div class="max-w-7xl mx-auto flex flex-wrap justify-between items-start">

              <div class="w-full md:w-1/4 mb-6 md:mb-0">
                <div class="flex items-center mb-4">
                  <img src={Logo} alt="Logo" class="mr-3" style={{ width: '40px', height: '40px' }} />
                  <span class="font-bold text-xl">Life Touch Fitness</span>
                </div>
                <p class="text-zinc-400 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                <div class="flex mt-4">
                  <a href="#" class="mr-4"><img src="https://placehold.co/24x24" alt="Facebook" /></a>
                  <a href="#" class="mr-4"><img src="https://placehold.co/24x24" alt="Twitter" /></a>
                  <a href="#" class="mr-4"><img src="https://placehold.co/24x24" alt="LinkedIn" /></a>
                  <a href="#"><img src="https://placehold.co/24x24" alt="Google Plus" /></a>
                </div>
              </div>


              <div class="w-full md:w-3/4 flex flex-wrap">
                <div class="w-1/2 md:w-1/4 mb-6 md:mb-0">
                  <h5 class="font-bold mb-3">HOME</h5>
                  <ul class="text-zinc-400 text-sm">
                    <li><a href="#" class="hover:text-white">Collections</a></li>
                    <li><a href="#" class="hover:text-white">New Item</a></li>
                    <li><a href="#" class="hover:text-white">Latest</a></li>
                    <li><a href="#" class="hover:text-white">Services</a></li>
                  </ul>
                </div>
                <div class="w-1/2 md:w-1/4 mb-6 md:mb-0">
                  <h5 class="font-bold mb-3">PRODUCT</h5>
                  <ul class="text-zinc-400 text-sm">
                    <li><a href="#" class="hover:text-white">New</a></li>
                    <li><a href="#" class="hover:text-white">Arrival</a></li>
                    <li><a href="#" class="hover:text-white">Oldest</a></li>
                    <li><a href="#" class="hover:text-white">Premium</a></li>
                  </ul>
                </div>
                <div class="w-1/2 md:w-1/4 mb-6 md:mb-0">
                  <h5 class="font-bold mb-3">ABOUT US</h5>
                  <ul class="text-zinc-400 text-sm">
                    <li><a href="#" class="hover:text-white">Contact Form</a></li>
                    <li><a href="#" class="hover:text-white">Email Us</a></li>
                    <li><a href="#" class="hover:text-white">Number</a></li>
                    <li><a href="#" class="hover:text-white">Customers Feedback</a></li>
                  </ul>
                </div>
                <div class="w-1/2 md:w-1/4">
                  <h5 class="font-bold mb-3">PRIVACY & TERM</h5>
                  <ul class="text-zinc-400 text-sm">
                    <li><a href="#" class="hover:text-white">Community</a></li>
                    <li><a href="#" class="hover:text-white">Guidelines</a></li>
                    <li><a href="#" class="hover:text-white">Terms</a></li>
                    <li><a href="#" class="hover:text-white">Privacy</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>



        </div>
      </body>

    </div>
  );
}

export default Home;

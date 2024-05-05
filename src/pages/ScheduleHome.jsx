import React from 'react';
import { Link } from 'react-router-dom';
import CustomHeader from '../components/Header/CustomHeader';
import Tanktop from '../../public/titus/tanktop.png'
import Logo from '../../public/logo.png'

function App() {
  return (
    <div className="App">

      <body className="bg-zinc-900 text-white">
      <CustomHeader />
        <div className="container mx-auto px-4">
          <header className="py-5">
            <h1 className="text-3xl font-bold"> Classes with Excercises </h1>
          </header>

          {/* First Section */}
          <section className="bg-green-700 text-zinc-900 dark:bg-green-700 dark:text-white p-4 rounded-lg">
            <div className="max-w-2xl mx-auto p-4" >
              <h1 className="text-3xl font-bold text-center mb-6">Gym Excercises</h1>
              <div className="flex gap-4 mb-8 flex justify-center">
                {/* Your class cards */}
                <div className="flex justify-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl">
                    <div className="bg-white dark:bg-zinc-700 p-3 rounded-lg shadow-md">
                      <img src="https://placehold.co/100x100" alt="Body Building" className="mx-auto mb-2" style={{ width: "50px", height: "50px" }} />
                      <h2 className="font-semibold text-md">Upper body Excercises</h2>
                      <ul className="list-disc list-inside mb-4">
                        <li>excercises1 </li>
                        <li>excercises2 </li>
                        <li>excercises3 </li>
                        <li>excercises4 </li>
                        <li>excercises5 </li>
                      </ul>
                    </div>
                    <div className="bg-white dark:bg-zinc-700 p-3 rounded-lg shadow-md">
                      <img src="https://placehold.co/100x100" alt="Muscle" className="mx-auto mb-2" style={{ width: "50px", height: "50px" }} />
                      <h2 className="font-semibold text-md">Lower body Excercises</h2>
                      <ul className="list-disc list-inside mb-4">
                        <li>excercises1 </li>
                        <li>excercises2 </li>
                        <li>excercises3 </li>
                        <li>excercises4 </li>
                        <li>excercises5 </li>
                      </ul>
                    </div>
                    <div className="bg-white dark:bg-zinc-700 p-3 rounded-lg shadow-md">
                      <img src="https://placehold.co/100x100" alt="Fitness Running" className="mx-auto mb-2" style={{ width: "50px", height: "50px" }} />
                      <h2 className="font-semibold text-md"> Full body Exercises</h2>
                      <ul className="list-disc list-inside mb-4">
                        <li>excercises1 </li>
                        <li>excercises2 </li>
                        <li>excercises3 </li>
                        <li>excercises4 </li>
                        <li>excercises5 </li>
                      </ul>
                    </div>
                    <div className="bg-white dark:bg-zinc-700 p-3 rounded-lg shadow-md">
                      <img src="https://placehold.co/100x100" alt="Body Building" className="mx-auto mb-2" style={{ width: "50px", height: "50px" }} />
                      <h2 className="font-semibold text-md">Core Body Excercises</h2>
                      <ul className="list-disc list-inside mb-4">
                        <li>excercises1 </li>
                        <li>excercises2 </li>
                        <li>excercises3 </li>
                        <li>excercises4 </li>
                        <li>excercises5 </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <br />

          <section className="bg-green-700 text-zinc-900 dark:bg-green-700 dark:text-white p-4 rounded-lg">
            <div className="max-w-2xl mx-auto p-4" >
              <h1 className="text-3xl font-bold text-center mb-6">Yoga Excercises</h1>
              <div className="flex gap-4 mb-8 flex justify-center">
                {/* Your class cards */}
                <div className="flex justify-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl">
                    <div className="bg-white dark:bg-zinc-700 p-3 rounded-lg shadow-md">
                      <img src="https://placehold.co/100x100" alt="Body Building" className="mx-auto mb-2" style={{ width: "50px", height: "50px" }} />
                      <h2 className="font-semibold text-md">Mountain Pose (Tadasana)</h2>
                      <ul className="list-disc list-inside mb-4">
                        <li>excercises1 </li>
                        <li>excercises2 </li>
                        <li>excercises3 </li>
                        <li>excercises4 </li>
                        <li>excercises5 </li>
                      </ul>
                    </div>
                    <div className="bg-white dark:bg-zinc-700 p-3 rounded-lg shadow-md">
                      <img src="https://placehold.co/100x100" alt="Muscle" className="mx-auto mb-2" style={{ width: "50px", height: "50px" }} />
                      <h2 className="font-semibold text-md">Downward Facing Dog (Adho Mukha Svanasana)</h2>
                      <ul className="list-disc list-inside mb-4">
                        <li>excercises1 </li>
                        <li>excercises2 </li>
                        <li>excercises3 </li>
                        <li>excercises4 </li>
                        <li>excercises5 </li>
                      </ul>
                    </div>
                    <div className="bg-white dark:bg-zinc-700 p-3 rounded-lg shadow-md">
                      <img src="https://placehold.co/100x100" alt="Fitness Running" className="mx-auto mb-2" style={{ width: "50px", height: "50px" }} />
                      <h2 className="font-semibold text-md">WarriorI (Virabhadrasana I)</h2>
                      <ul className="list-disc list-inside mb-4">
                        <li>excercises1 </li>
                        <li>excercises2 </li>
                        <li>excercises3 </li>
                        <li>excercises4 </li>
                        <li>excercises5 </li>
                      </ul>
                    </div>
                    <div className="bg-white dark:bg-zinc-700 p-3 rounded-lg shadow-md">
                      <img src="https://placehold.co/100x100" alt="Body Building" className="mx-auto mb-2" style={{ width: "50px", height: "50px" }} />
                      <h2 className="font-semibold text-md">Child's Pose (Balasana)</h2>
                      <ul className="list-disc list-inside mb-4">
                        <li>excercises1 </li>
                        <li>excercises2 </li>
                        <li>excercises3 </li>
                        <li>excercises4 </li>
                        <li>excercises5 </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <br />

          <section className="bg-green-700 text-zinc-900 dark:bg-green-700 dark:text-white p-4 rounded-lg">
            <div className="max-w-2xl mx-auto p-4" >
              <h1 className="text-3xl font-bold text-center mb-6">Cardio Excercises</h1>
              <div className="flex gap-4 mb-8 flex justify-center">
                {/* Your class cards */}
                <div className="flex justify-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl">
                    <div className="bg-white dark:bg-zinc-700 p-3 rounded-lg shadow-md">
                      <img src="https://placehold.co/100x100" alt="Body Building" className="mx-auto mb-2" style={{ width: "50px", height: "50px" }} />
                      <h2 className="font-semibold text-md">Running/Jogging </h2>
                      <ul className="list-disc list-inside mb-4">
                        <li>excercises1 </li>
                        <li>excercises2 </li>
                        <li>excercises3 </li>
                        <li>excercises4 </li>
                        <li>excercises5 </li>
                      </ul>
                    </div>
                    <div className="bg-white dark:bg-zinc-700 p-3 rounded-lg shadow-md">
                      <img src="https://placehold.co/100x100" alt="Muscle" className="mx-auto mb-2" style={{ width: "50px", height: "50px" }} />
                      <h2 className="font-semibold text-md">Jump Rope</h2>
                      <ul className="list-disc list-inside mb-4">
                        <li>excercises1 </li>
                        <li>excercises2 </li>
                        <li>excercises3 </li>
                        <li>excercises4 </li>
                        <li>excercises5 </li>
                      </ul>
                    </div>
                    <div className="bg-white dark:bg-zinc-700 p-3 rounded-lg shadow-md">
                      <img src="https://placehold.co/100x100" alt="Fitness Running" className="mx-auto mb-2" style={{ width: "50px", height: "50px" }} />
                      <h2 className="font-semibold text-md">High Knees</h2>
                      <ul className="list-disc list-inside mb-4">
                        <li>excercises1 </li>
                        <li>excercises2 </li>
                        <li>excercises3 </li>
                        <li>excercises4 </li>
                        <li>excercises5 </li>
                      </ul>
                    </div>
                    <div className="bg-white dark:bg-zinc-700 p-3 rounded-lg shadow-md">
                      <img src="https://placehold.co/100x100" alt="Body Building" className="mx-auto mb-2" style={{ width: "50px", height: "50px" }} />
                      <h2 className="font-semibold text-md">Mountain Climbers</h2>
                      <ul className="list-disc list-inside mb-4">
                        <li>excercises1 </li>
                        <li>excercises2 </li>
                        <li>excercises3 </li>
                        <li>excercises4 </li>
                        <li>excercises5 </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <br />

          <section className="bg-green-700 text-zinc-900 dark:bg-green-700 dark:text-white p-4 rounded-lg">
            <div className="max-w-2xl mx-auto p-4" >
              <h1 className="text-3xl font-bold text-center mb-6">Tredmill Excercises</h1>
              <div className="flex gap-4 mb-8 flex justify-center">
                {/* Your class cards */}
                <div className="flex justify-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl">
                    <div className="bg-white dark:bg-zinc-700 p-3 rounded-lg shadow-md">
                      <img src="https://placehold.co/100x100" alt="Body Building" className="mx-auto mb-2" style={{ width: "50px", height: "50px" }} />
                      <h2 className="font-semibold text-md">Treadmill Running</h2>
                      <ul className="list-disc list-inside mb-4">
                        <li>excercises1 </li>
                        <li>excercises2 </li>
                        <li>excercises3 </li>
                        <li>excercises4 </li>
                        <li>excercises5 </li>
                      </ul>
                    </div>
                    <div className="bg-white dark:bg-zinc-700 p-3 rounded-lg shadow-md">
                      <img src="https://placehold.co/100x100" alt="Muscle" className="mx-auto mb-2" style={{ width: "50px", height: "50px" }} />
                      <h2 className="font-semibold text-md">Stationary Bike</h2>
                      <ul className="list-disc list-inside mb-4">
                        <li>excercises1 </li>
                        <li>excercises2 </li>
                        <li>excercises3 </li>
                        <li>excercises4 </li>
                        <li>excercises5 </li>
                      </ul>
                    </div>
                    <div className="bg-white dark:bg-zinc-700 p-3 rounded-lg shadow-md">
                      <img src="https://placehold.co/100x100" alt="Fitness Running" className="mx-auto mb-2" style={{ width: "50px", height: "50px" }} />
                      <h2 className="font-semibold text-md">Elliptical Trainer</h2>
                      <ul className="list-disc list-inside mb-4">
                        <li>excercises1 </li>
                        <li>excercises2 </li>
                        <li>excercises3 </li>
                        <li>excercises4 </li>
                        <li>excercises5 </li>
                      </ul>
                    </div>
                    <div className="bg-white dark:bg-zinc-700 p-3 rounded-lg shadow-md">
                      <img src="https://placehold.co/100x100" alt="Body Building" className="mx-auto mb-2" style={{ width: "50px", height: "50px" }} />
                      <h2 className="font-semibold text-md">Rowing Machine</h2>
                      <ul className="list-disc list-inside mb-4">
                        <li>excercises1 </li>
                        <li>excercises2 </li>
                        <li>excercises3 </li>
                        <li>excercises4 </li>
                        <li>excercises5 </li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>

          <br />

          <section className="bg-zinc-700 text-zinc-900 dark:bg-green-700 dark:text-white p-4 rounded-lg">

            <div className="bg-white dark:bg-zinc-700 p-4 rounded-lg shadow-md">
              <h1 className="text-3xl font-bold text-center mb-6 p-4 rounded-lg"> Make Your Schedule</h1>
              <div className="flex items-center mb-4">
                <img src={Tanktop} alt="Class Schedule" className="rounded-full mr-4" style={{ width: '100px', height: '100px' }} />
                <div>
                  <h2 className="text-xl font-bold">Available now</h2>
                  <p>Select your preferred options with Booking</p>
                </div>
              </div>
              <ul>
                <li className="flex justify-between items-center py-2 border-b border-zinc-300 dark:border-zinc-600">
                  <div className="flex items-center">
                    <span className="font-bold text-lg mr-2">01</span>
                    <span>Gym Excercises</span>
                  </div>
                  <div>
                    <span>Monday – Sunday</span>
                    <span className="mx-2">|</span>
                    <span>08:00am – 11:00pm</span>
                    <Link to="/csfitnesss/create">
                      <button className="ml-4 bg-blue-500 text-white px-3 py-1 rounded">BOOK TRAINING</button>
                    </Link>
                  </div>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-zinc-300 dark:border-zinc-600">
                  <div className="flex items-center">
                    <span className="font-bold text-lg mr-2">02</span>
                    <span>Yoga Excercises</span>
                  </div>
                  <div>
                    <span>Saturday – Sunday</span>
                    <span className="mx-2">|</span>
                    <span>08:00am – 10:00am</span>
                    <Link to="/csfitnesss/create">
                      <button className="ml-4 bg-blue-500 text-white px-3 py-1 rounded">BOOK TRAINING</button>
                    </Link>
                  </div>
                </li>
                <li className="flex justify-between items-center py-2 border-b border-zinc-300 dark:border-zinc-600">
                  <div className="flex items-center">
                    <span className="font-bold text-lg mr-2">03</span>
                    <span>Cardio Excercises</span>
                  </div>
                  <div>
                    <span>Monday – Saturday</span>
                    <span className="mx-2">|</span>
                    <span>08:00am – 11:00pm</span>
                    <Link to="/csfitnesss/create">
                      <button className="ml-4 bg-blue-500 text-white px-3 py-1 rounded">BOOK TRAINING</button>
                    </Link>
                  </div>
                </li>
                <li className="flex justify-between items-center py-2">
                  <div className="flex items-center">
                    <span className="font-bold text-lg mr-2">04</span>
                    <span>Tredmill Excercises</span>
                  </div>
                  <div>
                    <span>Monday – Sunday</span>
                    <span className="mx-2">|</span>
                    <span>08:00am – 11:00pm</span>
                    <Link to="/csfitnesss/create">
                      <button className="ml-4 bg-blue-500 text-white px-3 py-1 rounded">BOOK TRAINING</button>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </section>






          <br></br>

          <section className="mb-8 bg-green-700 p-1 rounded-lg">
            <h2 className="font-semibold">Empower your fitness journey with a curated selection of gym essentials, nutritious supplements, and a supportive community</h2>
            <div style={{ display: "grid", justifyContent: "end" }}>
              <Link to="/StoreShoppingPage">
                <button className="bg-yellow-400 text-black px-8 py-3 rounded hover:bg-yellow-500">Online Shop</button>
              </Link>
            </div>
          </section>

          <footer class="bg-zinc-800 text-white p-10">
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

export default App;

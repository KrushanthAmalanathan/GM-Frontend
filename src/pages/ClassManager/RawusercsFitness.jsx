import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import TableView from '../../components/table/TableView';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';
import QuoteImage from '../../../public/titus/quote.jpg'
import ViewButton from '../../components/button2/ViewButton';
import CSHeader from '../../components/Header/CSHeader';

const RawcsRequests = () => {
  const [csfitnesss, setcsFitnesss] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(''); // Define search state

  const headers = ['ScheduleID', 'Name', 'Email', 'Category', 'Time', 'NeedTrainer', 'Operations'];

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/csFitnesss')
      .then((response) => {
        setcsFitnesss(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const userCountMap = {};
  csfitnesss.forEach((request) => {
    const name = request.Name.toLowerCase();
    userCountMap[name] = (userCountMap[name] || 0) + 1;
  });

  // Filter the requests based on search input
  const filteredRequests = csfitnesss.filter((v) => v.Name.toLowerCase().includes(search.toLowerCase()));
  const userCount = filteredRequests.length;
  const totaluserCount = csfitnesss.length;

  return (
    <div className='relative'style={{backgroundImage: `url(${QuoteImage})`, backgroundRepeat: "no-repeat",backgroundSize: "cover"}}>
    <CSHeader/>

      {/* Pass onSearch callback to the SearchBar */}
      <SearchBar placeholder={"Enter the Schedule ID"} onSearch={setSearch} />

      {loading ? (
        <Spinner />
      ) : (
        <div>
          <table className='mx-auto font-BreeSerif bg-green-700 rounded-lg border-4 border-gray-900 '>
            <TableView headers={headers} />
            <tbody>
              {filteredRequests.map((csfitness, index) => (
                <tr key={csfitness._id} className='h-8'>
                  <td className='border border-slate-700 rounded-md'>
                    {csfitness.ScheduleID}
                  </td>
                  <td className='border border-slate-700 rounded-md'>
                    {csfitness.Name}
                  </td>
                  <td className='border border-slate-700 rounded-md'>
                    {csfitness.Email}
                  </td>
                  <td className='border border-slate-700 rounded-md'>
                    {csfitness.Category}
                  </td>
                  <td className='border border-slate-700 rounded-md'>
                    {csfitness.Time}
                  </td>
                  <td className='border border-slate-700 rounded-md'>
                    {csfitness.NeedTrainer}
                  </td>
                  <td className='border border-slate-700 rounded-md'>
                    <div className='flex justify-center gap-x-4'>
                      <Link to={`/csFitnesss/details/${csfitness._id}`}>
                        <ViewButton />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="inline-block border-4 border-gray-300 rounded-lg px-2 py-1 text-white">
            <p className="text-2xl font-bold">Total Users{search}: {userCount}</p>
          </div>

          <div className="text-center font-bold mt-4 mb-8">
            {/* {Object.entries(userCountMap).map(([name, count]) => (
              count < 2 && <p key={name}>"{name}" is lowerstock</p>
            ))} */}
          </div>
        </div>
      )}
    </div>
  )
}

export default RawcsRequests;

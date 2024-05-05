import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import TableView from '../../components/table/TableView';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';
import AddButton from '../../components/button2/AddButton';
import DeleteButton from '../../components/button2/DeleteButton';
import EditButton from '../../components/button2/EditButton';
import ViewButton from '../../components/button2/ViewButton';
import PMHeader from '../../components/navbar/PMHeader';
import Footer from "../../components/footer/Footer";

const RawatRequests = () => {
  const [atfitnesss, setatFitnesss] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const headers = ['AttnaceID', 'UserID', ' Name', 'Operations'];

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/atFitnesss')
      .then((response) => {
        setatFitnesss(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const itemCountMap = {};
  atfitnesss.forEach((request) => {
    if (request.Name) {
      const name = request.Name.toLowerCase();
      itemCountMap[name] = (itemCountMap[name] || 0) + 1;
    }
  });
  const filteredRequests = atfitnesss.filter((v) => v.Name && v.Name.toLowerCase().includes(search.toLowerCase()));
  const itemCount = filteredRequests.length;
  const totalItemCount = atfitnesss.length;

  return (
    <div className='relative'>
      <PMHeader />
      <div className="text-center font-bold text-3xl mb-4">Shop</div>
      <div className='flex justify-between items-center m-5'>
        <Link to='/atFitnesss/create'>
          <AddButton />
        </Link>
      </div>
      <SearchBar placeholder={"Enter the Item Name"} onSearch={setSearch} />
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <table className='mx-auto font-BreeSerif w-full'>
  <thead className='bg-purple-200'>
    <tr>
      {headers.map((header, index) => (
        <th key={index} className='py-2 px-4 border border-gray-300 text-left'>{header}</th>
      ))}
      <th className='py-2 px-4 border border-gray-300'></th> {/* Empty cell for actions */}
    </tr>
  </thead>
  <tbody>
    {filteredRequests.map((atfitness, index) => (
      <tr key={atfitness._id} className='h-10'>
        <td className='border border-gray-300 py-2 px-4'>{atfitness.AttnaceID}</td>
        <td className='border border-gray-300 py-2 px-4'>{atfitness.UserID}</td>
        <td className='border border-gray-300 py-2 px-4'>{atfitness.Name}</td>
        <td className='border border-gray-300 py-2 px-4 flex justify-center items-center'>
          {/* <Link to={`/atFitnesss/details/${atfitness._id}`} className='text-blue-600 hover:text-blue-700 mr-4'>
            <ViewButton />
          </Link> */}
          {/* <Link to={`/atFitnesss/edit/${atfitness._id}`} className='text-yellow-600 hover:text-yellow-700 mr-4'>
            <EditButton />
          </Link> */}
          <Link to={`/atFitnesss/delete/${atfitness._id}`} className='text-red-600 hover:text-red-700'>
            <DeleteButton />
          </Link>
        </td>
      </tr>
    ))}
  </tbody>
</table>

          <div className="text-center mt-4 mb-8">
            <p>Total Attendance: {totalItemCount}</p>
            <p>Total Items Matching{search}: {itemCount}</p>
          </div>
          <div className="text-center font-bold mt-4 mb-8">
            {/* {Object.entries(itemCountMap).map(([name, count]) => (
              count < 2 && <p key={name}>"{name}" is low stock</p>
            ))} */}
          </div>
        </div>
      )}
       <Footer/>
    </div>
  );
};

export default RawatRequests;

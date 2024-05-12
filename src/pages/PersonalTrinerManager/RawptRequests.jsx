import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../../components/Spinner';
import TableView from '../../components/table/TableView';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar'
import AddButton from '../../components/button2/AddButton';
import DeleteButton from '../../components/button2/DeleteButton';
import EditButton from '../../components/button2/EditButton';
import ViewButton from '../../components/button2/ViewButton';
import PTHeader from '../../components/Header/PTHeader';
import Footer from "../../components/footer/Footer";

const RawptRequests = () => {
  const [ptfitnesss, setptFitnesss] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(""); // Define search state
  const headers = ['User ID', 'Name', 'Age', 'Email', 'Weight', 'Height', 'Operations'];

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/ptFitnesss')
      .then((response) => {
        setptFitnesss(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const userCountMap = {};
  ptfitnesss.forEach((request) => {
    const name = request.Name.toLowerCase();
    userCountMap[name] = (userCountMap[name] || 0) + 1;
  });
  const filteredRequests = ptfitnesss.filter((v) => v.Name.toLowerCase().includes(search.toLowerCase()));
  const userCount = filteredRequests.length;
  const totaluserCount = ptfitnesss.length;

  return (
    <div className='relative'>
      <PTHeader />
      <div className='flex justify-betweusers-center m-5'>
        <Link to='/ptFitnesss/create'>
          <AddButton />
        </Link>
      </div>

      {/* Pass onSearch prop to SearchBar */}
      <SearchBar placeholder={"Enter the User Name"} onSearch={setSearch} />

      {loading ? (
        <Spinner />
      ) : (
        <div>
          <table className='mx-auto font-BreeSerif'>
            <TableView headers={headers} />
            <tbody>
              {filteredRequests.map((ptfitness, index) => (
                <tr key={ptfitness._id} className='h-8'>
                  <td className='border border-slate-700 rounded-md'>
                    {ptfitness.UserID}
                  </td>
                  <td className='border border-slate-700 rounded-md'>
                    {ptfitness.Name}
                  </td>
                  <td className='border border-slate-700 rounded-md'>
                    {ptfitness.Age}
                  </td>
                  <td className='border border-slate-700 rounded-md'>
                    {ptfitness.Email}
                  </td>
                  <td className='border border-slate-700 rounded-md'>
                    {ptfitness.Weight}
                  </td>
                  <td className='border border-slate-700 rounded-md'>
                    {ptfitness.Height}
                  </td>
                  <td className='border border-slate-700 rounded-md'>
                    <div className='flex justify-center gap-x-4'>
                      <Link to={`/ptFitnesss/details/${ptfitness._id}`}>
                        <ViewButton />
                      </Link>
                      <Link to={`/ptFitnesss/edit/${ptfitness._id}`}>
                        <EditButton />
                      </Link>
                      <Link to={`/ptFitnesss/delete/${ptfitness._id}`}>
                        <DeleteButton />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-center mt-4 mb-8">
            {/* <p>Total Users: {totalUserCount}</p> */}
            <p>Total Users "{search}": {userCount}</p>
          </div>
          <div className="text-center font-bold mt-4 mb-8">
            {/* {Object.entries(userCountMap).map(([name, count]) => (
              count < 2 && <p key={name}>"{name}" is lowerstock</p>
            ))} */}
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default RawptRequests;

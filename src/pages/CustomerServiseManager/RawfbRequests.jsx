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
import Button from '../../components/button/Button';
import FBHeader from '../../components/Header/FBHeader';
import Footer from "../../components/footer/Footer";

const RawfbRequests = () => {
  const [fbfitnesss, setfbFitnesss] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState(""); // Define search state
  const headers = ['User ID', 'Name', 'Email', 'Feedback', 'Rating', 'Answer', 'Operations'];

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/fbFitnesss')
      .then((response) => {
        setfbFitnesss(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const userCountMap = {};
  fbfitnesss.forEach((request) => {
    const name = request.Name.toLowerCase();
    userCountMap[name] = (userCountMap[name] || 0) + 1;
  });
  const filteredRequests = fbfitnesss.filter((v) => v.Name.toLowerCase().includes(search.toLowerCase()));
  const userCount = filteredRequests.length;
  const totaluserCount = fbfitnesss.length;

  return (
    <div className='relative'>
      <FBHeader/>
      <div className='flex justify-betweusers-center m-5'>
        <Link to='/fbFitnesss/create'>
          <AddButton />
        </Link>
      </div>

      {/* Pass onSearch prop to SearchBar */}
      <SearchBar placeholder={"Enter the User ID"} onSearch={setSearch} />

      {loading ? (
        <Spinner />
      ) : (
        <div>
          <table className='mx-auto font-BreeSerif'>
            <TableView headers={headers} />
            <tbody>
              {filteredRequests.map((fbfitness, index) => (
                <tr key={fbfitness._id} className='h-8'>
                  <td className='border border-slate-700 rounded-md'>
                    {fbfitness.UserID}
                  </td>
                  <td className='border border-slate-700 rounded-md'>
                    {fbfitness.Name}
                  </td>
                  <td className='border border-slate-700 rounded-md'>
                    {fbfitness.Email}
                  </td>
                  <td className='border border-slate-700 rounded-md'>
                    {fbfitness.Feedback}
                  </td>
                  <td className='border border-slate-700 rounded-md'>
                    {fbfitness.Rating}
                  </td>
                  <td className='border border-slate-700 rounded-md'>
                    {fbfitness.Reply}
                  </td>
                  <td className='border border-slate-700 rounded-md'>
                    <div className='flex justify-center gap-x-4'>
                      <Link to={`/fbFitnesss/details/${fbfitness._id}`}>
                        <ViewButton />
                      </Link>
                      <Link to={`/fbFitnesss/edit/${fbfitness._id}`}>
                        <Button>Give Answer</Button> 
                      </Link>
                      <Link to={`/fbFitnesss/delete/${fbfitness._id}`}>
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

export default RawfbRequests;

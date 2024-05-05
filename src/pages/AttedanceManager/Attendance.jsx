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
import PMHeader from '../../components/navbar/PMHeader';
import MarkAttendance from '../../components/button2/MarkAttendance';
import Footer from "../../components/footer/Footer";

const Attendance = () => {
    const [ptfitnesss, setptFitnesss] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState(""); // Define search state
    const headers = ['User ID', 'Name', 'Operations'];

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
            <PMHeader />
            <div className='flex justify-betweusers-center m-5'>
                <Link to='/ptFitnesss/create'>
                    <AddButton />
                </Link>
            </div>

            {/* Pass onSearch prop to SearchBar */}
            <SearchBar placeholder={"Enter the Name"} onSearch={setSearch} />

            {loading ? (
                <Spinner /> 
            ) : (
                <div>
                    <table className='mx-auto font-BreeSerif'>
    <thead>
        <tr className='bg-purple-200'>
            <th className='py-2 px-4 text-left'>User ID</th>
            <th className='py-2 px-4 text-left'>Name</th>
            <th className='py-2 px-4 text-center'>Actions</th>
        </tr>
    </thead>
    <tbody>
        {ptfitnesss.map((ptfitness, index) => (
            <tr key={ptfitness._id} className='h-10'>
                <td className='border border-gray-300 rounded-md py-2 px-4'>{ptfitness.UserID}</td>
                <td className='border border-gray-300 rounded-md py-2 px-4'>{ptfitness.Name}</td>
                <td className='border border-gray-300 rounded-md py-2 px-4 flex justify-center items-center'>
                    <Link to={`/atFitnesss/create/${ptfitness._id}`} className='mr-4 text-green-600 hover:text-green-700'>
                        Mark Attendance
                    </Link>
                    <Link to={`/ptFitnesss/delete/${ptfitness._id}`} className='text-red-600 hover:text-red-700'>
                        Delete
                    </Link>
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

export default Attendance;

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
import CustomHeader from '../../components/Header/CustomHeader';


export const CustomerfbFitness = () => {
    const [fbfitnesss, setfbFitnesss] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState(""); // Define search state
    const headers = ['Feedback', 'Rating', 'Answer'];

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
            <CustomHeader />
            <div className='flex justify-betweusers-center m-5'>
                <Link to='/fbFitnesss/create'>
                    <AddButton />
                </Link>
            </div>

            {loading ? (
                <Spinner />
            ) : (
                <div>
                   <table className='mx-auto font-BreeSerif w-full bg-gray-100 rounded-lg overflow-hidden border border-white'>
    <thead className='bg-purple-200'>
        <tr>
            <th className='w-40% py-2 px-4 rounded-tl-lg border-r border-b border-white'>Question</th>
            <th className='w-5% py-2 px-4 border-r border-b border-white'>Rating</th>
            <th className='w-40% py-2 px-4 rounded-tr-lg border-b border-white'>Reply</th>
        </tr>
    </thead>
    <tbody>
        {fbfitnesss.map((fbfitness, index) => (
            <tr key={fbfitness._id} className='h-8'>
                <td className='w-40% py-2 px-4 bg-gray-200 rounded-bl-lg border-r border-b border-white'>
                    {fbfitness.Feedback}
                </td>
                <td className='w-5% py-2 px-4 bg-gray-200 border-r border-b border-white'>
                    {fbfitness.Rating}
                </td>
                <td className='w-40% py-2 px-4 bg-gray-200 rounded-br-lg border-b border-white'>
                    {fbfitness.Reply}
                </td>
            </tr>
        ))}
    </tbody>
</table>


                </div>
            )}
        </div>
    );
};

export default CustomerfbFitness;
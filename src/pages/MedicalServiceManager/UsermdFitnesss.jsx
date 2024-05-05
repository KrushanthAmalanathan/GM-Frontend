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

const UsermdFitnesss = () => {
    const [mdfitnesss, setmdFitnesss] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    // Update headers to include BMI next to Height
    const headers = ['User ID', 'Name', 'Tests', 'Medications', 'Conditions', 'Age', 'Weight', 'Height', 'BMI', 'Operations'];

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/mdFitnesss')
            .then((response) => {
                // Calculate BMI for each record
                const dataWithBMI = response.data.data.map(item => ({
                    ...item,
                    BMI: calculateBMI(item.Weight, item.Height)
                    
                }));
                setmdFitnesss(dataWithBMI);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    // BMI Calculation Function
    const calculateBMI = (weight, height) => {
        const heightInMeters = height / 100; // assuming height is in cm
        return (weight / (heightInMeters * heightInMeters)).toFixed(2);
    };

    const userCountMap = {};
    mdfitnesss.forEach((request) => {
        const name = request.Name.toLowerCase();
        userCountMap[name] = (userCountMap[name] || 0) + 1;
    });
    const filteredRequests = mdfitnesss.filter((v) => v.Name.toLowerCase().includes(search.toLowerCase()));
    const userCount = filteredRequests.length;

    // Calculate Average BMI
    const totalBMI = mdfitnesss.reduce((acc, curr) => acc + parseFloat(curr.BMI), 0);
    const averageBMI = (totalBMI / mdfitnesss.length).toFixed(2);

    return (
        <div className='relative'>
            <PMHeader />
            <div className='flex justify-between m-5'>
                <Link to='/mdFitnesss/create'>
                    <AddButton />
                </Link>
            </div>

            <SearchBar placeholder={"Enter the User ID"} onSearch={setSearch} />

            {loading ? (
                <Spinner />
            ) : (
                <div>
                    <table className='mx-auto font-BreeSerif'>
                        <TableView headers={headers} />
                        <tbody>
                            {mdfitnesss.map((mdfitness, index) => (
                                <tr key={mdfitness._id} className='h-8'>
                                    <td className='border border-slate-700 rounded-md'>
                                        {mdfitness.UserID}
                                    </td>
                                    <td className='border border-slate-700 rounded-md'>
                                        {mdfitness.Name}
                                    </td>
                                    <td className='border border-slate-700 rounded-md'>
                                        {mdfitness.Tests}
                                    </td>
                                    <td className='border border-slate-700 rounded-md'>
                                        {mdfitness.Medications}
                                    </td>
                                    <td className='border border-slate-700 rounded-md'>
                                        {mdfitness.Conditions}
                                    </td>
                                    <td className='border border-slate-700 rounded-md'>
                                        {mdfitness.Age}
                                    </td>
                                    <td className='border border-slate-700 rounded-md'>
                                        {mdfitness.Weight}
                                    </td>
                                    <td className='border border-slate-700 rounded-md'>
                                        {mdfitness.Height}
                                    </td>
                                    <td className='border border-slate-700 rounded-md'>
                                        {mdfitness.BMI}
                                    </td>
                                    <td className='border border-slate-700 rounded-md'>
                                        <div className='flex justify-center gap-x-4'>
                                            {/* <Link to={`/mdFitnesss/details/${mdfitness._id}`}>
                                                <ViewButton />
                                            </Link> */}
                                            <Link to={`/mdFitnesss/edit/${mdfitness._id}`}>
                                                <EditButton />
                                            </Link>
                                             <Link to={`/mdFitnesss/delete/${mdfitness._id}`}>
                                                <DeleteButton />
                                            </Link> 
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="text-center mt-4 mb-8">

                    </div>
                </div>
            )}
        </div>
    );
};

export default UsermdFitnesss;

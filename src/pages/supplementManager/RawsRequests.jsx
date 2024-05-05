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
import AddToShopButton from '../../components/button2/AddToShopButton';


const RawsRequests = () => {
    const [rmrequests, setrmRequests] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const headers = ['Item ID', 'Item Name', 'Company', 'Price', 'ItemWeight', 'Description', 'Operations'];

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/rmRequests')
            .then((response) => {
                setrmRequests(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const filteredRequests = rmrequests.filter((v) => v.ItemType.toLowerCase() === 'supplement');

    return (
        <div className='relative'>
            <PMHeader />
            <div className="text-center font-bold text-3xl mb-4">SUPPLEMENT STOCKS</div>
            <div className='flex justify-between items-center m-5'>
                {/* <Link to='/rmRequests/create'>
                    <AddButton />
                </Link> */}
            </div>
            <div className='flex justify-end items-center m-5 font-BreeSerif'>
                <Link to='/RawiRequests'>
                    <button className='p-2 bg-blue-300 m-8 text-black rounded-xl'>Inventory Items</button>
                </Link>
                {/* <Link to='/RawsRequests'>
                    <button className='p-2 bg-blue-300 m-8 text-black rounded-xl'>Supplement Items</button>
                </Link> */}
            </div>
            <SearchBar placeholder={"Enter the Item ID"} onSearch={setSearch} />
            {loading ? (
                <Spinner />
            ) : (
                <div>
                    <table className='mx-auto font-BreeSerif'>
                        <TableView headers={headers} />
                        <tbody>
                            {rmrequests
                                .filter((v) => v.ItemType.toLowerCase() === 'supplement')
                                .map((rmrequest, index) => (
                                    <tr key={rmrequest._id} className='h-8'>
                                        <td className='border border-slate-700 rounded-md'>
                                            {rmrequest.ItemID}
                                        </td>
                                        <td className='border border-slate-700 rounded-md'>
                                            {rmrequest.ItemName}
                                        </td>
                                        <td className='border border-slate-700 rounded-md'>
                                            {rmrequest.Company}
                                        </td>
                                        <td className='border border-slate-700 rounded-md'>
                                            {rmrequest.Price}
                                        </td>
                                        <td className='border border-slate-700 rounded-md'>
                                            {rmrequest.ItemWeight}
                                        </td>
                                        <td className='border border-slate-700 rounded-md'>
                                            {rmrequest.Description}
                                        </td>
                                        <td className='border border-slate-700 rounded-md'>
                                            <div className='flex justify-center gap-x-4'>
                                                <Link to={`/rmRequests/details/${rmrequest._id}`}>
                                                    <ViewButton />
                                                </Link>
                                                <Link to={`/smShops/create/${rmrequest._id}`}>
                                                    <AddToShopButton />
                                                </Link>
                                                <Link to={`/rmRequests/delete/${rmrequest._id}`}>
                                                    <DeleteButton />
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                    <div className="text-center mt-4 mb-8">
                        <p>Item Count: {filteredRequests.length}</p>
                    </div>
                </div>
            )}
          
        </div>
    );
};

export default RawsRequests;

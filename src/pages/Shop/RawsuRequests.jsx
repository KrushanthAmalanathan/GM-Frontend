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


const RawsuRequests = () => {
  const [smshops, setsmShops] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const headers = ['Supplement ID', 'Item Name', 'Company', 'Price', 'Item Weight', 'Discount', 'Description', 'Operations'];

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/smShops')
      .then((response) => {
        setsmShops(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const itemCountMap = {};
  smshops.forEach((request) => {
    if (request.ItemName) {
      const itemName = request.ItemName.toLowerCase();
      itemCountMap[itemName] = (itemCountMap[itemName] || 0) + 1;
    }
  });
  const filteredRequests = smshops.filter((v) => v.ItemName && v.ItemName.toLowerCase().includes(search.toLowerCase()));
  const itemCount = filteredRequests.length;
  const totalItemCount = smshops.length;

  return (
    <div className='relative'>
      <PMHeader />
      <div className='relative' style={{ backgroundImage: "url('../../public/kru/sup02.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="text-center font-bold text-3xl mb-4">Shop</div>
      <div className='flex justify-between items-center m-5'>
        <Link to='/smShops/create'>
          <AddButton />
        </Link>
      </div>
      <SearchBar placeholder={"Enter the Item Name"} onSearch={setSearch} />
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <table className='mx-auto font-BreeSerif'>
            <TableView headers={headers} />
            <tbody>
              {filteredRequests.map((smshop, index) => (
                <tr key={smshop._id} className='h-8'>
                  <td className='border border-slate-700 rounded-md'>
                    {smshop.SmID}
                  </td>
                  <td className='border border-slate-700 rounded-md'>
                    {smshop.ItemName}
                  </td>
                  <td className='border border-slate-700 rounded-md'>
                    {smshop.Company}
                  </td>
                  <td className='border border-slate-700 rounded-md'>
                    {smshop.Price}
                  </td>
                  <td className='border border-slate-700 rounded-md'>
                    {smshop.ItemWeight}
                  </td>
                  <td className='border border-slate-700 rounded-md'>
                    {smshop.Discount}
                  </td>
                  <td className='border border-slate-700 rounded-md'>
                    {smshop.Description}
                  </td>
                  <td className='border border-slate-700 rounded-md'>
                    <div className='flex justify-center gap-x-4'>
                      <Link to={`/smShops/details/${smshop._id}`}>
                        <ViewButton />
                      </Link>
                      <Link to={`/smShops/edit/${smshop._id}`}>
                        <EditButton />
                      </Link>
                      <Link to={`/smShops/delete/${smshop._id}`}>
                        <DeleteButton />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-center mt-4 mb-8">
            <p>Total Items: {totalItemCount}</p>
            <p>Total Items Matching "{search}": {itemCount}</p>
          </div>
          <div className="text-center font-bold mt-4 mb-8">
            {Object.entries(itemCountMap).map(([itemName, count]) => (
              count < 2 && <p key={itemName}>"{itemName}" is low stock</p>
            ))}
          </div>
        </div>
      )}
      </div>
      <Footer/>
    </div>
  );
};

export default RawsuRequests;

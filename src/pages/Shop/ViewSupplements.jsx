import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import { Link } from 'react-router-dom';
import AcceptButton from '../../components/button2/AcceptButton';
import RejectButton from '../../components/button2/RejectButton';
import Button from '../../components/button/Button';
import html2pdf from 'html2pdf.js';

const ViewSupplements = () => {
  const [smshop, setsmShops] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/smShops/${id}`)
      .then((response) => {
        setsmShops(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [])

  const handlePrint = () => {
    const element = document.getElementById('pdfContent');

    html2pdf()
      .from(element)
      .save();
  };

  return (
    <div className='relative'>
      {loading ? (
        <Spinner />
      ) : (
        <div id="pdfContent" className='flex flex-col bg-bgc rounded-xl w-[600px] p-4 mx-auto font-BreeSerif text-ternary'>
          <h1 className='text-3xl my-4 text-center font-semibold'>Inventory Report</h1>
          <div className='my-4'>
            <span className='text-xl mr-4'>Supplement ID :</span>
            <span>{smshop.SmID}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Supplement Name :</span>
            <span>{smshop.SupplementName}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Company :</span>
            <span>{smshop.Company}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Price :</span>
            <span>{smshop.Price}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Weight :</span>
            <span>{smshop.Weight}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Discount :</span>
            <span>{smshop.Discount}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Description :</span>
            <span>{smshop.Description}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Create Time :</span>
            <span>{new Date(smshop.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Last Update Time :</span>
            <span>{new Date(smshop.updatedAt).toString()}</span>
          </div>
          <div className='flex justify-center gap-x-20'>
            <Button onClick={handlePrint}>Print</Button>
            <Link to={`/smShops/delete/${smshop._id}`}>
              <RejectButton />
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default ViewSupplements


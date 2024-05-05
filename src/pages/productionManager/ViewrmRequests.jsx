import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import { Link } from 'react-router-dom';
import AcceptButton from '../../components/button2/AcceptButton';
import RejectButton from '../../components/button2/RejectButton';
import Button from '../../components/button/Button';
import html2pdf from 'html2pdf.js';

const ViewrmRequests = () => {
  const [rmrequest, setrmRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/rmRequests/${id}`)
      .then((response) => {
        setrmRequests(response.data);
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
            <span className='text-xl mr-4'>Item ID :</span>
            <span>{rmrequest.ItemID}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Item Name :</span>
            <span>{rmrequest.ItemName}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Item Type :</span>
            <span>{rmrequest.ItemType}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Company :</span>
            <span>{rmrequest.Company}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Condition :</span>
            <span>{rmrequest.Condition}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Price :</span>
            <span>{rmrequest.Price}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Item Weight :</span>
            <span>{rmrequest.ItemWeight}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Description :</span>
            <span>{rmrequest.Description}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Create Time :</span>
            <span>{new Date(rmrequest.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Last Update Time :</span>
            <span>{new Date(rmrequest.updatedAt).toString()}</span>
          </div>
          <div className='flex justify-center gap-x-20'>
            <Button onClick={handlePrint}>Print</Button>
            <Link to={`/rmRequests/delete/${rmrequest._id}`}>
              <RejectButton />
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default ViewrmRequests


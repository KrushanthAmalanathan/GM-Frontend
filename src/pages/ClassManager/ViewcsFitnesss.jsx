import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';

import html2pdf from 'html2pdf.js';


const ViewcsFitnesss = () => {
  const [csfitness, setcsFitnesss] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/csFitnesss/${id}`)
      .then((response) => {
        setcsFitnesss(response.data);
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
          <h1 className='text-3xl my-4 text-center font-semibold'>Schedule Form</h1>
          <div className='my-4'>
            <span className='text-xl mr-4'>Schedule ID :</span>
            <span>{csfitness.ScheduleID}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Name :</span>
            <span>{csfitness.Name}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Email :</span>
            <span>{csfitness.Email}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Category :</span>
            <span>{csfitness.Category}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Time :</span>
            <span>{csfitness.Time}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Need Trainer :</span>
            <span>{csfitness.NeedTrainer}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Created Time :</span>
            <span>{new Date(csfitness.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Last Updated Time :</span>
            <span>{new Date(csfitness.updatedAt).toString()}</span>
          </div>
          <div className='flex justify-left gap-x-20'>
          <Link to ='/csfitness/home'>
          <Button onClick={handlePrint}>Print</Button>
          </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default ViewcsFitnesss


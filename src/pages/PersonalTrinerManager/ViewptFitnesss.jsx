import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import { Link } from 'react-router-dom';
import AcceptButton from '../../components/button2/AcceptButton';
import RejectButton from '../../components/button2/RejectButton';
import Button from '../../components/button/Button';
import html2pdf from 'html2pdf.js';

const ViewptFitnesss = () => {
  const [ptfitness, setptFitnesss] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/ptFitnesss/${id}`)
      .then((response) => {
        setptFitnesss(response.data);
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
          <h1 className='text-3xl my-4 text-center font-semibold'>FeedBack Report</h1>
          <div className='my-4'>
            <span className='text-xl mr-4'>UserID :</span>
            <span>{ptfitness.UserID}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Name :</span>
            <span>{ptfitness.Name}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Age :</span>
            <span>{ptfitness.Age}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Email :</span>
            <span>{ptfitness.Email}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Weight :</span>
            <span>{ptfitness.Weight}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Height :</span>
            <span>{ptfitness.Height}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Create Time :</span>
            <span>{new Date(ptfitness.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Last Update Time :</span>
            <span>{new Date(ptfitness.updatedAt).toString()}</span>
          </div>
          <div className='flex justify-center gap-x-20'>
            <Button onClick={handlePrint}>Print</Button>
            <Link to={`/ptFitnesss/delete/${ptfitness._id}`}>
              <RejectButton />
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default ViewptFitnesss


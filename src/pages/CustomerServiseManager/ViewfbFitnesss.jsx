import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import { Link } from 'react-router-dom';
import AcceptButton from '../../components/button2/AcceptButton';
import RejectButton from '../../components/button2/RejectButton';
import Button from '../../components/button/Button';
import html2pdf from 'html2pdf.js';

const ViewfbFitnesss = () => {
  const [fbfitness, setfbFitnesss] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/fbFitnesss/${id}`)
      .then((response) => {
        setfbFitnesss(response.data);
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
            <span>{fbfitness.UserID}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Name :</span>
            <span>{fbfitness.Name}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Email :</span>
            <span>{fbfitness.Email}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Feedback :</span>
            <span>{fbfitness.Feedback}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Rating :</span>
            <span>{fbfitness.Rating}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Reply :</span>
            <span>{fbfitness.Reply}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Question Time :</span>
            <span>{new Date(fbfitness.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4'>Answered Time :</span>
            <span>{new Date(fbfitness.updatedAt).toString()}</span>
          </div>
          <div className='flex justify-center gap-x-20'>
            <Button onClick={handlePrint}>Print</Button>
            <Link to={`/fbFitnesss/delete/${fbfitness._id}`}>
              <RejectButton />
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default ViewfbFitnesss


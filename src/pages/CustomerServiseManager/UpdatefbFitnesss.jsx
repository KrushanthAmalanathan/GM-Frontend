import React, { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import FBHeader from '../../components/Header/FBHeader';
import BackButton from '../../components/button/BackButton';

const UpdatefbFitnesss = () => {
  const [UserID, setUserID] = useState('');
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Feedback, setFeedback] = useState('');
  const [Rating, setRating] = useState('');
  const [Complaints, setComplaints] = useState('');
  const [Reply, setReply] = useState('');

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackBar } = useSnackbar();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/fbFitnesss/${id}`)
      .then((response) => {
        setUserID(response.data.UserID);
        setName(response.data.Name)
        setEmail(response.data.Email)
        setFeedback(response.data.Feedback)
        setRating(response.data.Rating)
        setComplaints(response.data.Complaints)
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happend. Please Check console');
        console.log(error);
      });
  }, [])

  const handleUpdateRawfbRequest = () => {
    const data = {
      UserID,
      Name,
      Email,
      Feedback,
      Rating,
      Complaints,
      Reply,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/fbFitnesss/${id}`, data)
      .then(() => {
        setLoading(false);
        // enqueueSnackBar('Request updated successfully', { variant: 'success' });
        navigate('/RawfbRequests');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please Check console');
        // enqueueSnackBar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='relative'>
      <FBHeader />
      <BackButton />
      {loading ? <Spinner /> : ''}
      <div
        className='flex flex-col bg-formbg rounded-xl w-[600px] p-4 mx-auto font-BreeSerif'
      >
        <h1 className='text-3xl my-4 text-center'>Update Raw Material Request Form</h1>
        {/* <div className='my-2'>
          <label className='text-xl mr-4'>User ID</label>
          <input
            className='drop-shadow-md px-4 py-2 w-full'
            placeholder='Enter User ID'
            id='userID'
            name='UserID'
            type='text'
            value={UserID}
            onChange={(e) => setUserID(e.target.value)}
            validation={{ required: 'User ID is required' }}
          />
        </div> */}
        <div className='my-2'>
          <label className='text-xl mr-4'>Name</label>
          <textarea
            className='drop-shadow-md px-4 py-2 w-full'
            type='text'
            id='name'
            name='Name'
            placeholder='Enter Name'
            value={Name}
            readOnly={true}
            onChange={(e) => setName(e.target.value)}
            validation={{ required: 'Name is required' }}
          />
        </div>
        <div className='my-2'>
          <label className='text-xl mr-4'>Email</label>
          <textarea
            className='drop-shadow-md px-4 py-2 w-full'
            type='email'
            id='email'
            name='Email'
            placeholder='Enter Email'
            value={Email}
            readOnly={true}
            onChange={(e) => setEmail(e.target.value)}
            validation={{ required: 'Email is required' }}
          />
        </div>
        <div className='my-2'>
          <label className='text-xl mr-4'>Feedback</label>
          <textarea
            className='drop-shadow-md px-4 py-2 w-full'
            type='text'
            id='feedback'
            name='Feedback'
            placeholder='Enter Feedback'
            value={Feedback}
            readOnly={true}
            onChange={(e) => setFeedback(e.target.value)}
            validation={{ required: 'Feedback is required' }}
          />
        </div>
        <div className='my-2'>
          <label className='text-xl mr-4'>Rating</label>
          <textarea
            className='drop-shadow-md px-4 py-2 w-full'
            type='text'
            id='rating'
            name='Rating'
            placeholder='Enter Rating'
            value={Rating}
            readOnly={true}
            onChange={(e) => setRating(e.target.value)}
            validation={{ required: 'Rating is required' }}
          />
        </div>
        <div className='my-2'>
          <label className='text-xl mr-4'>Reply</label>
          <textarea
            className='drop-shadow-md px-4 py-2 w-full'
            type='text'
            id='reply'
            name='Reply'
            placeholder='Enter Reply'
            value={Reply}
            onChange={(e) => setReply(e.target.value)}
            validation={{ required: 'Reply is required' }}
          />
        </div>

        <button className='p-2 bg-black m-8 text-white rounded-xl' onClick={handleUpdateRawfbRequest}>Submit</button>
      </div>
    </div>
  )
}

export default UpdatefbFitnesss

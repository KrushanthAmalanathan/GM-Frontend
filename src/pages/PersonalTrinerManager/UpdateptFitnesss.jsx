import React, { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import PTHeader from '../../components/Header/PTHeader';
import BackButton from '../../components/button/BackButton';

const UpdateptFitnesss = () => {
  const [UserID, setUserID] = useState('');
  const [Name, setName] = useState('');
  const [Age, setAge] = useState('');
  const [Email, setEmail] = useState('');
  const [Weight, setWeight] = useState('');
  const [Height, setHeight] = useState('');

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackBar } = useSnackbar();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/ptFitnesss/${id}`)
      .then((response) => {
        setUserID(response.data.UserID);
        setName(response.data.Name)
        setAge(response.data.Age)
        setEmail(response.data.Email)
        setWeight(response.data.Weight)
        setHeight(response.data.Height)
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happend. Please Check console');
        console.log(error);
      });
  }, [])

  const handleUpdateRawptRequest = () => {
    const data = {
      UserID,
      Name,
      Age,
      Email,
      Weight,
      Height,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/ptFitnesss/${id}`, data)
      .then(() => {
        setLoading(false);
        // enqueueSnackBar('Request updated successfully', { variant: 'success' });
        navigate('/RawptRequests');
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
      <PTHeader />
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
            onChange={(e) => setName(e.target.value)}
            validation={{ required: 'Name is required' }}
          />
        </div>
        <div className='my-2'>
          <label className='text-xl mr-4'>Age</label>
          <textarea
            className='drop-shadow-md px-4 py-2 w-full'
            type='text'
            id='age'
            name='Age'
            placeholder='Enter Age'
            value={Age}
            onChange={(e) => setAge(e.target.value)}
            validation={{ required: 'Age is required' }}
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
            onChange={(e) => setEmail(e.target.value)}
            validation={{ required: 'Email is required' }}
          />
        </div>
        <div className='my-2'>
          <label className='text-xl mr-4'>Weight</label>
          <textarea
            className='drop-shadow-md px-4 py-2 w-full'
            type='text'
            id='weight'
            name='Weight'
            placeholder='Enter Weight'
            value={Weight}
            onChange={(e) => setWeight(e.target.value)}
            validation={{ required: 'Weight is required' }}
          />
        </div>
        <div className='my-2'>
          <label className='text-xl mr-4'>Height</label>
          <textarea
            className='drop-shadow-md px-4 py-2 w-full'
            type='text'
            id='height'
            name='Height'
            placeholder='Enter Height'
            value={Height}
            onChange={(e) => setHeight(e.target.value)}
            validation={{ required: 'Height is required' }}
          />
        </div>

        <button className='p-2 bg-black m-8 text-white rounded-xl' onClick={handleUpdateRawptRequest}>Submit</button>
      </div>
    </div>
  )
}

export default UpdateptFitnesss

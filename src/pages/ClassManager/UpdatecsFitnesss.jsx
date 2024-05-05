import React, { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import CSHeader from '../../components/Header/CSHeader';
import BackButton from '../../components/button/BackButton';

const UpdatecsFitnesss = () => {
  const [ScheduleID, setScheduleID] = useState('');
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Category, setCategory] = useState('');
  const [Time, setTime] = useState('');
  const [NeedTrainer, setNeedTrainer] = useState('');

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackBar } = useSnackbar();
  const { id } = useParams();

  const options = [
    { id: 1, value: 'Gym', option: 'Gym' },
    { id: 2, value: 'Yoga', option: 'Yoga' },
    { id: 3, value: 'Cardio', option: 'Cardio' },
    { id: 4, value: 'Tredmill', option: 'Tredmill' },

  ];

  const options1 = [
    { id: 5, value: 'Day(8am-4pm)', option: 'Day(8am-4pm)' },
    { id: 6, value: 'Night(5pm-11pm)', option: 'Night(5pm-11pm)' },

  ];

  const options2 = [
    { id: 7, value: 'yes', option: 'yes' },
    { id: 8, value: 'no', option: 'no' },

  ];

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/csFitnesss/${id}`)
      .then((response) => {
        setScheduleID(response.data.ScheduleID);
        setName(response.data.Name)
        setEmail(response.data.Email)
        setCategory(response.data.Category)
        setTime(response.data.Time)
        setNeedTrainer(response.data.NeedTrainer)
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happend. Please Check console');
        console.log(error);
      });
  }, [])

  const handleUpdateRawcsRequest = () => {
    const data = {
      ScheduleID,
      Name,
      Email,
      Category,
      Time,
      NeedTrainer,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/csFitnesss/${id}`, data)
      .then(() => {
        setLoading(false);
        // enqueueSnackBar('Request updated successfully', { variant: 'success' });
        navigate('/RawcsRequests');
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
     <CSHeader/>
      <BackButton />
      {loading ? <Spinner /> : ''}
      <div
        className='flex flex-col bg-formbg rounded-xl w-[600px] p-4 mx-auto font-BreeSerif'
      >
        <h1 className='text-3xl my-4 text-center'>Update Schedule Form</h1>
        {/* <div className='my-2'>
          <label className='text-xl mr-4'>Schedule ID</label>
          <input
            className='drop-shadow-md px-4 py-2 w-full'
            placeholder='Enter Schedule ID'
            id='scheduleID'
            name='ScheduleID'
            type='text'
            value={ScheduleID}
            onChange={(e) => setScheduleID(e.target.value)}
            validation={{ required: 'Schedule ID is required' }}
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
          <label className='text-xl mr-4'>Category</label>
          <textarea
            className='drop-shadow-md px-4 py-2 w-full'
            type='text'
            id='category'
            name='Category'
            placeholder='Enter Category'
            value={Category}
            onChange={(e) => setCategory(e.target.value)}
            validation={{ required: 'Category is required' }}
          />
        </div>
        <div className='my-2'>
          <label className='text-xl mr-4'>Time</label>
          <textarea
            className='drop-shadow-md px-4 py-2 w-full'
            type='text'
            id='time'
            name='Time'
            placeholder='Enter Time'
            value={Time}
            onChange={(e) => setTime(e.target.value)}
            validation={{ required: 'Time is required' }}
          />
        </div>
        <div className='my-2'>
          <label className='text-xl mr-4'>NeedTrainer</label>
          <textarea
            className='drop-shadow-md px-4 py-2 w-full'
            type='text'
            id='needTrainer'
            name='NeedTrainer'
            placeholder='Enter NeedTrainer'
            value={NeedTrainer}
            onChange={(e) => setNeedTrainer(e.target.value)}
            validation={{ required: 'NeedTrainer is required' }}
          />
        </div>

        <button className='p-2 bg-black m-8 text-white rounded-xl' onClick={handleUpdateRawcsRequest}>Submit</button>
      </div>
    </div>
  )
}

export default UpdatecsFitnesss

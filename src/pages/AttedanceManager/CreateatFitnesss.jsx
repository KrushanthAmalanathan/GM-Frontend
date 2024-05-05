import React, { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Input from '../../components/form/Input';
import { useForm, FormProvider } from 'react-hook-form'; // Importing useForm and FormProvider
import { useSnackbar } from 'notistack';
import PMHeader from '../../components/navbar/PMHeader';
import BackButton from '../../components/button/BackButton';


const CreateatFitnesss = () => {

  const [UserID, setUserID] = useState('');
  const [Name, setName] = useState('');

  

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackBar } = useSnackbar();
  const { id } = useParams();


  const methods = useForm(); // Initializing useForm

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/ptFitnesss/${id}`)
      .then((response) => {
        setUserID(response.data.UserID)
        setName(response.data.Name)
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happend. Please Check console');
        console.log(error);
      });
  }, [])

  const handleSaveRawatRequest = () => {
    const data = {
      UserID,
      Name,
      
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/atFitnesss', data)
      .then(() => {
        setLoading(false);
        // enqueueSnackBar('Request updated successfully', { variant: 'success' });
        navigate('/RawatRequests');
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
      <PMHeader />
      <BackButton />
      {loading ? <Spinner /> : ''}
      <FormProvider {...methods}> {/* Providing methods from useForm */}
        <form
          className='flex flex-col bg-formbg rounded-xl w-[600px] p-4 mx-auto font-BreeSerif'
          onSubmit={methods.handleSubmit(handleSaveRawatRequest)} // Using handleSubmit from useForm
        >
          <h1 className='text-3xl my-4 text-center'>Attanace Request Form</h1>

          
          <div className='my-2'>
            <label className='text-xl mr-4'>UserID</label>
            <textarea
              className='drop-shadow-md px-4 py-2 w-full'
              type='text'
              id='userID'
              name='UserID'
              placeholder='Enter UserID'
              value={UserID}
              onChange={(e) => setUserID(e.target.value)}
              validation={{ required: 'UserID is required' }}
            />
          </div>
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
           
         
          <button className='p-2 bg-black m-8 text-white rounded-xl' type='submit'>Submit</button>
        </form>
      </FormProvider>
    </div>
  )
}

export default CreateatFitnesss
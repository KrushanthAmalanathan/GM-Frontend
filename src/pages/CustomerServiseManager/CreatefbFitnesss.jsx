import React, { useState } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/form/Input';
import { useForm, FormProvider } from 'react-hook-form'; // Importing useForm and FormProvider
import { useSnackbar } from 'notistack';
import CustomHeader from '../../components/Header/CustomHeader';
import BackButton from '../../components/button/BackButton';
import { SnackbarProvider } from 'notistack';


const CreatefbFitnesss = () => {

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Feedback, setFeedback] = useState('');
  const [Rating, setRating] = useState('');

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackBar } = useSnackbar();

  const methods = useForm(); // Initializing useForm

  const handleSaveRawfbRequest = async (data) => {

    setLoading(true);
    try {
      await axios.post('http://localhost:5555/fbFitnesss', data);
      setLoading(false);
      // enqueueSnackBar('Request created successfully', { variant: 'success' });
      navigate('/RawfbRequests');
    } catch (error) {
      setLoading(false);
      alert('An error happened. Please Check console');
      // enqueueSnackBar('Error', { variant: 'error' });
      console.log(error);
    }
  };

  return (
    <div className='relative'>
      <CustomHeader />
      <BackButton />
      {loading ? <Spinner /> : ''}
      <FormProvider {...methods}> {/* Providing methods from useForm */}
        <form
          className='flex flex-col bg-formbg rounded-xl w-[600px] p-4 mx-auto font-BreeSerif'
          onSubmit={methods.handleSubmit(handleSaveRawfbRequest)} // Using handleSubmit from useForm
        >
          <h1 className='text-3xl my-4 text-center'>User Details Request Form</h1>

          <Input
            formtype='textarea'
            type='text'
            id='name'
            name='Name'
            label='Name'
            placeholder='Enter Name'
            value={Name}
            onChange={(e) => setName(e.target.value)}
            validation={{ required: 'Name is required' }}
          />
          <Input
            formtype='textarea'
            type='email'
            id='email'
            name='Email'
            label='Email'
            placeholder='Enter Email'
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            validation={{ required: 'Email is required' }}
          />
          <Input
            formtype='textarea'
            type='text'
            id='feedback'
            name='Feedback'
            label='Feedback'
            placeholder='Enter Feedback'
            value={Feedback}
            onChange={(e) => setFeedback(e.target.value)}
            validation={{ required: 'Feedback is required' }}
          />
          <Input
            formtype='textarea'
            type='text'
            id='rating'
            name='Rating'
            label='Rating'
            placeholder='Enter Rating'
            value={Rating}
            onChange={(e) => setRating(e.target.value)}
            validation={{ required: 'Rating is required' }}
          />
          
          <button className='p-2 bg-black m-8 text-white rounded-xl' type='submit'>Submit</button>
        </form>
      </FormProvider>
    </div>
  )
}

export default CreatefbFitnesss

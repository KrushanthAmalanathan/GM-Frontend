import React, { useState } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/form/Input';
import { useForm, FormProvider } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import CustomHeader from '../../components/Header/CustomHeader';
import BackButton from '../../components/button/BackButton';
import { SnackbarProvider } from 'notistack';

const CreateptFitnesss = () => {
  const [Name, setName] = useState('');
  const [Age, setAge] = useState('');
  const [Email, setEmail] = useState('');
  const [Weight, setWeight] = useState('');
  const [Height, setHeight] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Hook to navigate
  const { enqueueSnackbar } = useSnackbar();
  const methods = useForm();

  const handleSaveRawptRequest = async (data) => {
    setLoading(true);
    try {
      await axios.post('http://localhost:5555/ptFitnesss', data);
      setLoading(false);
      navigate('/ptfitnesss/create');
    } catch (error) {
      setLoading(false);
      alert('An error happened. Please Check console');
      console.log(error);
    }
  };

  const handleMedicalFormButtonClick = () => {
    navigate('/mdfitnesss/create'); // Redirecting to '/mdfitnesss/create' route
  };

  return (
    <div className='relative'>
      <CustomHeader />
      <BackButton />
      {loading ? <Spinner /> : ''}
      <FormProvider {...methods}>
        <form
          className='flex flex-col bg-formbg rounded-xl w-[600px] p-4 mx-auto font-BreeSerif'
          onSubmit={methods.handleSubmit(handleSaveRawptRequest)}
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
            type='text'
            id='age'
            name='Age'
            label='Age'
            placeholder='Enter Age'
            value={Age}
            onChange={(e) => setAge(e.target.value)}
            validation={{ required: 'Age is required' }}
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
            id='weight'
            name='Weight'
            label='Weight'
            placeholder='Enter Weight'
            value={Weight}
            onChange={(e) => setWeight(e.target.value)}
            validation={{ required: 'Weight is required' }}
          />
          <Input
            formtype='textarea'
            type='text'
            id='height'
            name='Height'
            label='Height'
            placeholder='Enter Height'
            value={Height}
            onChange={(e) => setHeight(e.target.value)}
            validation={{ required: 'Height is required' }}
          />
          <button className='p-2 bg-black m-8 text-white rounded-xl' type='submit'>
            Submit
          </button>
        </form>
      </FormProvider>

      <div className='flex flex-col items-center mt-4'> {/* Added mt-4 for top margin */}
        <p>If you submit the form above, please fill out the Medical Form</p>
        <button className='p-2 bg-blue-500 text-white rounded-xl mt-2' onClick={handleMedicalFormButtonClick}>
          Fill the Medical Form
        </button>
      </div>
    </div>
  );
};

export default CreateptFitnesss;

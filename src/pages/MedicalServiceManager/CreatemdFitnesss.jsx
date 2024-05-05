import React, { useState } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/form/Input';
import { useForm, FormProvider } from 'react-hook-form'; // Importing useForm and FormProvider
import { useSnackbar } from 'notistack';
import PMHeader from '../../components/navbar/PMHeader';
import BackButton from '../../components/button/BackButton';
import { SnackbarProvider } from 'notistack';


const CreatemdFitnesss = () => {

  const [Name, setName] = useState('');
  const [Tests, setTests] = useState('');
  const [Medications, setMedications] = useState('');
  const [Conditions, setConditions] = useState('');
  const [Age, setAge] = useState('');
  const [Weight, setWeight] = useState('');
  const [Height, setHeight] = useState('');

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackBar } = useSnackbar();

  const methods = useForm(); // Initializing useForm

  const handleSaveRawmdRequest = async (data) => {

    setLoading(true);
    try {
      await axios.post('http://localhost:5555/mdFitnesss', data);
      setLoading(false);
      // enqueueSnackBar('Request created successfully', { variant: 'success' });
      navigate('/RawmdRequests');
    } catch (error) {
      setLoading(false);
      alert('An error happened. Please Check console');
      // enqueueSnackBar('Error', { variant: 'error' });
      console.log(error);
    }
  };

  return (
    <div className='relative'>
      <PMHeader />
      <BackButton />
      {loading ? <Spinner /> : ''}
      <FormProvider {...methods}> {/* Providing methods from useForm */}
        <form
          className='flex flex-col bg-formbg rounded-xl w-[600px] p-4 mx-auto font-BreeSerif'
          onSubmit={methods.handleSubmit(handleSaveRawmdRequest)} // Using handleSubmit from useForm
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
            id='tests'
            name='Tests'
            label='Tests'
            placeholder='Enter Tests'
            value={Tests}
            onChange={(e) => setTests(e.target.value)}
            validation={{ required: 'Tests is required' }}
          />
          <Input
            formtype='textarea'
            type='text'
            id='medications'
            name='Medications'
            label='Medications'
            placeholder='Enter Medications'
            value={Medications}
            onChange={(e) => setMedications(e.target.value)}
            validation={{ required: 'Medications is required' }}
          />
          <Input
            formtype='textarea'
            type='text'
            id='conditions'
            name='Conditions'
            label='Conditions'
            placeholder='Enter Conditions'
            value={Conditions}
            onChange={(e) => setConditions(e.target.value)}
            validation={{ required: 'Conditions is required' }}
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
          <button className='p-2 bg-black m-8 text-white rounded-xl' type='submit'>Submit</button>
        </form>
      </FormProvider>
    </div>
  )
}

export default CreatemdFitnesss

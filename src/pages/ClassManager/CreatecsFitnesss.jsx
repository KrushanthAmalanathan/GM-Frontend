import React, { useState } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/form/Input';
import { useForm, FormProvider } from 'react-hook-form'; // Importing useForm and FormProvider
import { useSnackbar } from 'notistack';
import BackButton from '../../components/button/BackButton';
import Select from '../../components/form/Select';
import QuoteImage from '../../../public/titus/quote.jpg';
import CustomHeader from '../../components/Header/CustomHeader';

const CreatecsFitnesss = () => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Category, setCategory] = useState('');
  const [Time, setTime] = useState('');
  const [NeedTrainer, setNeedTrainer] = useState('');

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackBar } = useSnackbar();

  const methods = useForm(); // Initializing useForm

  const handleSaveRawcsRequest = async (data) => {

    setLoading(true);
    try {
      await axios.post('http://localhost:5555/csFitnesss', data);
      setLoading(false);
      // enqueueSnackBar('Request created successfully', { variant: 'success' });
      navigate('/csFitness/userdetails/:id');
    } catch (error) {
      setLoading(false);
      alert('An error happened. Please Check console');
      // enqueueSnackBar('Error', { variant: 'error' });
      console.log(error);
    }
  };

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

  return (
    <div className='relative' style={{ backgroundImage: `url(${QuoteImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
      <CustomHeader />
      <BackButton />
      {loading ? <Spinner /> : ''}
      <FormProvider {...methods}> {/* Providing methods from useForm */}
        <form
          className='flex flex-col bg-formbg rounded-xl w-[600px] p-4 mx-auto font-BreeSerif bg-green-700 rounded-lg'
          onSubmit={methods.handleSubmit(handleSaveRawcsRequest)} // Using handleSubmit from useForm
        >
          <h1 className='text-3xl my-4 text-center'>Schedule Details Request Form</h1>
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
          {/* <Input
            formtype='textarea'
            type='text'
            id='category'
            name='Category'
            label='Category'
            placeholder='Enter Category'
            value={Category}
            onChange={(e) => setCategory(e.target.value)}
            validation={{ required: 'Category is required' }}
          /> */}
          <Select
            label="Category"
            id="category"
            name="Category"
            firstOption="Select the Category"
            options={options}
            validation={{ required: 'Category is required' }}
          />
          {/* <Input
            formtype='textarea'
            type='text'
            id='time'
            name='Time'
            label='Time'
            placeholder='Enter Time'
            value={Time}
            onChange={(e) => setTime(e.target.value)}
            validation={{ required: 'Time is required' }}
          /> */}
          <Select
            label="Time"
            id="time"
            name="Time"
            firstOption="Select the Time"
            options={options1}
            validation={{ required: 'Time is required' }}
          />
          {/* <Input
            formtype='textarea'
            type='text'
            id='needTrainer'
            name='NeedTrainer'
            label='NeedTrainer'
            placeholder='Enter NeedTrainer'
            value={NeedTrainer}
            onChange={(e) => setNeedTrainer(e.target.value)}
            validation={{ required: 'NeedTrainer is required' }}
          /> */}
          <Select
            label="NeedTrainer"
            id="needTrainer"
            name="NeedTrainer"
            firstOption=" Need Personal Trainer"
            options={options2}
            validation={{ required: 'NeedTrainer is required' }}
          />
          {/* <div className="flex items-center">
                <label htmlFor="needTrainer" className="mr-2">Need Trainer?</label>
                <div>
                  <input
                    type="checkbox"
                    id="needTrainerYes"
                    name="NeedTrainer"
                    value="Yes"
                    checked={NeedTrainer === "Yes"}
                    onChange={(e) => setNeedTrainer(e.target.checked ? "Yes" : "No")}
                    className="mr-1"
                  />
                  <label htmlFor="needTrainerYes" className="mr-2">Yes</label>
                  <input
                    type="checkbox"
                    id="needTrainerNo"
                    name="NeedTrainer"
                    value="No"
                    checked={NeedTrainer === "No"}
                    onChange={(e) => setNeedTrainer(e.target.checked ? "No" : "Yes")}
                    className="mr-1"
                  />
                  <label htmlFor="needTrainerNo">No</label>
                </div>
              </div> */}

          <button className='p-2 bg-black m-8 text-white rounded-xl' type='submit'>Submit</button>
        </form>
      </FormProvider>
    </div>
  )
}

export default CreatecsFitnesss

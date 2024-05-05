import React, { useState } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/form/Input';
import { useForm, FormProvider } from 'react-hook-form'; // Importing useForm and FormProvider
import { useSnackbar } from 'notistack';
import PMHeader from '../../components/navbar/PMHeader';
import BackButton from '../../components/button/BackButton';
import Select from '../../components/form/Select';


const CreatermRequests = () => {

  const [ItemName, setItemName] = useState('');
  const [ItemType, setItemType] = useState('');
  const [Company, setCompany] = useState('');
  const [Condition, setCondition] = useState('');
  const [Price, setPrice] = useState('');
  const [ItemWeight, setItemWeight] = useState('');
  const [Description, setDescription] = useState('');

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackBar } = useSnackbar();

  const methods = useForm(); // Initializing useForm

  const handleSaveRawmRequest = async (data) => {

    setLoading(true);
    try {
      await axios.post('http://localhost:5555/rmRequests', data);
      setLoading(false);
      // enqueueSnackBar('Request created successfully', { variant: 'success' });
      navigate('/RawmRequests');
    } catch (error) {
      setLoading(false);
      alert('An error happened. Please Check console');
      // enqueueSnackBar('Error', { variant: 'error' });  
      console.log(error);
    }
  };

  const options = [
    { id: 1, value: 'Inventory', option: 'Inventory' },
    { id: 2, value: 'Supplement', option: 'Supplement' },

  ];

  const option1 = [
    { id: 1, value: 'New', option: 'New' },
    { id: 2, value: 'Old', option: 'Old' },

  ];

  return (
    <div className='relative'>
      <PMHeader />
      <BackButton />
      {loading ? <Spinner /> : ''}
      <FormProvider {...methods}> {/* Providing methods from useForm */}
        <form
          className='flex flex-col bg-formbg rounded-xl w-[600px] p-4 mx-auto font-BreeSerif'
          onSubmit={methods.handleSubmit(handleSaveRawmRequest)} // Using handleSubmit from useForm
        >
          <h1 className='text-3xl my-4 text-center'>Raw Material Request Form</h1>

          <Input
            formtype='textarea'
            type='text'
            id='itemName'
            name='ItemName'
            label='Item Name'
            placeholder='Enter ItemName'
            value={ItemName}
            onChange={(e) => setItemName(e.target.value)}
            validation={{ required: 'ItemName is required' }}
          />
          {/* <Input
            formtype='textarea'
            type='text'
            id='itemType'
            name='ItemType'
            label='ItemType'
            placeholder='Enter ItemType'
            value={ItemType}
            onChange={(e) => setItemType(e.target.value)}
            validation={{ required: 'ItemType is required' }}
          /> */}
          <Select
            label="ItemType"
            id="itemType"
            name="ItemType"
            firstOption="Select the type"
            options={options}
            validation={{ required: 'ItemType is required' }}
          />
          <Input
            formtype='textarea'
            type='text'
            id='company'
            name='Company'
            label='Company'
            placeholder='Enter Company'
            value={Company}
            onChange={(e) => setCompany(e.target.value)}
            validation={{ required: 'Company is required' }}
          />
          {/* <Input
            formtype='textarea'
            type='text'
            id='condition'
            name='Condition'
            label='Condition'
            placeholder='Enter Condition'
            value={Condition}
            onChange={(e) => setCondition(e.target.value)}
            validation={{ required: 'Condition is required' }}
          /> */}
          <Select
            label="Condition"
            id="condition"
            name="Condition"
            firstOption="Select the Condition"
            options={option1}
            validation={{ required: 'Condition is required' }}
          />
          <Input
            formtype='textarea'
            type='text'
            id='price'
            name='Price'
            label='Price'
            placeholder='Enter Price'
            value={Price}
            onChange={(e) => setPrice(e.target.value)}
            validation={{ required: 'Price is required' }}
          />
          <Input
            formtype='textarea'
            type='text'
            id='itemWeight'
            name='ItemWeight'
            label='ItemWeight'
            placeholder='Enter ItemWeight'
            value={ItemWeight}
            onChange={(e) => setItemWeight(e.target.value)}
            validation={{ required: 'ItemWeight is required' }}
          />
          <Input
            formtype='textarea'
            type='text'
            id='description'
            name='Description'
            label='Description'
            placeholder='Enter Description'
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
            validation={{ required: 'Description is required' }}
          />
          <button className='p-2 bg-black m-8 text-white rounded-xl' type='submit'>Submit</button>
        </form>
      </FormProvider>
    </div>
  )
}

export default CreatermRequests

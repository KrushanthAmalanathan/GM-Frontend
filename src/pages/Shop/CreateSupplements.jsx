import React, { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Input from '../../components/form/Input';
import { useForm, FormProvider } from 'react-hook-form'; // Importing useForm and FormProvider
import { useSnackbar } from 'notistack';
import PMHeader from '../../components/navbar/PMHeader';
import BackButton from '../../components/button/BackButton';


const CreateSupplements = () => {

  const [ItemName, setItemName] = useState('');
  const [Company, setCompany] = useState('');
  const [Price, setPrice] = useState('');
  const [ItemWeight, setItemWeight] = useState('');
  const [Discount, setDiscount] = useState('');
  const [Image, setImage] = useState("");
  const [Description, setDescription] = useState('');

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackBar } = useSnackbar();
  const { id } = useParams();


  const methods = useForm(); // Initializing useForm

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/rmRequests/${id}`)
      .then((response) => {
        setItemName(response.data.ItemName)
        setCompany(response.data.Company)
        setPrice(response.data.Price)
        setItemWeight(response.data.ItemWeight)
        setDescription(response.data.Description)
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happend. Please Check console');
        console.log(error);
      });
  }, [])

  const handleSaveRawsuRequest = () => {
    const data = {
      ItemName,
      Company,
      Price,
      ItemWeight,
      Discount,
      Description,
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/smShops', data)
      .then(() => {
        setLoading(false);
        // enqueueSnackBar('Request updated successfully', { variant: 'success' });
        navigate('/RawsuRequests');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please Check console');
        // enqueueSnackBar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  const handleImageChange = (event) => {
    console.log("called");
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      console.log("called");

      const base64String = reader.result;
      console.log(base64String);

      localStorage.setItem("storedImage", base64String); // Store the image
      console.log(base64String);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className='relative'>
      <PMHeader />
      <BackButton />
      {loading ? <Spinner /> : ''}
      <FormProvider {...methods}> {/* Providing methods from useForm */}
        <form
          className='flex flex-col bg-formbg rounded-xl w-[600px] p-4 mx-auto font-BreeSerif'
          onSubmit={methods.handleSubmit(handleSaveRawsuRequest)} // Using handleSubmit from useForm
        >
          <h1 className='text-3xl my-4 text-center'>Supplement Request Form</h1>

          <div className='my-2'>
            <label className='text-xl mr-4'>Item Name</label>
            <textarea
              className='drop-shadow-md px-4 py-2 w-full'
              type='text'
              id='itemName'
              name='ItemName'
              placeholder='Enter Item Name'
              value={ItemName}
              onChange={(e) => setItemName(e.target.value)}
              validation={{ required: 'Item Name is required' }}
            />
          </div>
          <div className='my-2'>
            <label className='text-xl mr-4'>Company</label>
            <textarea
              className='drop-shadow-md px-4 py-2 w-full'
              type='text'
              id='company'
              name='Company'
              placeholder='Enter Company'
              value={Company}
              onChange={(e) => setCompany(e.target.value)}
              validation={{ required: 'Company is required' }}
            />
          </div>
          <div className='my-2'>
            <label className='text-xl mr-4'>Price</label>
            <textarea
              className='drop-shadow-md px-4 py-2 w-full'
              type='text'
              id='price'
              name='Price'
              placeholder='Enter Price'
              value={Price}
              onChange={(e) => setPrice(e.target.value)}
              validation={{ required: 'Price is required' }}
            />
          </div>
          <div className='my-2'>
            <label className='text-xl mr-4'>Item Weight</label>
            <textarea
              className='drop-shadow-md px-4 py-2 w-full'
              type='text'
              id='itemWeight'
              name='ItemWeight'
              placeholder='Enter Item Weight'
              value={ItemWeight}
              onChange={(e) => setItemWeight(e.target.value)}
              validation={{ required: 'Item Weight is required' }}
            />
          </div>
          <div className='my-2'>
            <label className='text-xl mr-4'>Discount</label>
            <textarea
              className='drop-shadow-md px-4 py-2 w-full'
              type='text'
              id='discount'
              name='Discount'
              placeholder='Enter Discount'
              value={Discount}
              onChange={(e) => setDiscount(e.target.value)}
              validation={{ required: 'Discount is required' }}
            />
          </div>
          <div className="my-2">
            <label className="text-xl mr-4">Image</label>
            <input type="file" onChange={handleImageChange} />
          </div>
          <div className='my-2'>
            <label className='text-xl mr-4'>Description</label>
            <textarea
              className='drop-shadow-md px-4 py-2 w-full'
              type='text'
              id='description'
              name='Description'
              placeholder='Enter Description'
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
              validation={{ required: 'Description is required' }}
            />
          </div>
          <button className='p-2 bg-black m-8 text-white rounded-xl' type='submit'>Submit</button>
        </form>
      </FormProvider>
    </div>
  )
}

export default CreateSupplements
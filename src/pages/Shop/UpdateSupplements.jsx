import React, { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import PMHeader from '../../components/navbar/PMHeader';
import BackButton from '../../components/button/BackButton';

const UpdateSupplements = () => {
  const [SmID, setSmID] = useState('');
  const [SupplementName, setSupplementName] = useState('');
  const [Company, setCompany] = useState('');
  const [Price, setPrice] = useState('');
  const [Weight, setWeight] = useState('');
  const [Discount, setDiscount] = useState('');
  const [Description, setDescription] = useState('');

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackBar } = useSnackbar();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/smShops/${id}`)
      .then((response) => {
        setSmID(response.data.SmID)
        setSupplementName(response.data.SupplementName)
        setCompany(response.data.Company)
        setPrice(response.data.Price)
        setWeight(response.data.Weight)
        setDiscount(response.data.Discount)
        setDescription(response.data.Description)
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happend. Please Check console');
        console.log(error);
      });
  }, [])

  const handleUpdateRawsuRequest = () => {
    const data = {
      SmID,
      SupplementName,
      Company,
      Price,
      Weight,
      Discount,
      Description,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/smShops/${id}`, data)
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

  return (
    <div className='relative'>
      <PMHeader />
      <BackButton />
      {loading ? <Spinner /> : ''}
      <div
        className='flex flex-col bg-formbg rounded-xl w-[600px] p-4 mx-auto font-BreeSerif'
      >
        <h1 className='text-3xl my-4 text-center'>Update Supplement Request Form</h1>
        {/* <div className='my-2'>
          <label className='text-xl mr-4'>Supplement ID</label>
          <input
            className='drop-shadow-md px-4 py-2 w-full'
            placeholder='Enter Supplement ID'
            id='smID'
            name='SmID'
            type='text'
            value={SmID}
            onChange={(e) => setSmID(e.target.value)}
            validation={{ required: 'Item ID is required' }}
          />
        </div> */}
        <div className='my-2'>
          <label className='text-xl mr-4'>Supplement Name</label>
          <textarea
            className='drop-shadow-md px-4 py-2 w-full'
            type='text'
            id='supplementName'
            name='SupplementName'
            placeholder='Enter Supplement Name'
            value={SupplementName}
            onChange={(e) => setSupplementName(e.target.value)}
            validation={{ required: 'Supplement Name is required' }}
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

        <button className='p-2 bg-black m-8 text-white rounded-xl' onClick={handleUpdateRawsuRequest}>Submit</button>
      </div>
    </div>
  )
}

export default UpdateSupplements

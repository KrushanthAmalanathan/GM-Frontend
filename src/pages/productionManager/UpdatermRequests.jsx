import React, { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import PMHeader from '../../components/navbar/PMHeader';
import BackButton from '../../components/button/BackButton';

const UpdatermRequests = () => {
  const [ItemID, setItemID] = useState('');
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
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/rmRequests/${id}`)
      .then((response) => {
        setItemID(response.data.ItemID)
        setItemName(response.data.ItemName)
        setItemType(response.data.ItemType)
        setCompany(response.data.Company)
        setCondition(response.data.Condition)
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

  const handleUpdateRawmRequest = () => {
    const data = {
      ItemID,
      ItemName,
      ItemType,
      Company,
      Condition,
      Price,
      ItemWeight,
      Description,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/rmRequests/${id}`, data)
      .then(() => {
        setLoading(false);
        // enqueueSnackBar('Request updated successfully', { variant: 'success' });
        navigate('/RawmRequests');
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
        <h1 className='text-3xl my-4 text-center'>Update Inventory Request Form</h1>
        {/* <div className='my-2'>
          <label className='text-xl mr-4'>Item ID</label>
          <input
            className='drop-shadow-md px-4 py-2 w-full'
            placeholder='Enter Item ID'
            id='itemID'
            name='ItemID'
            type='text'
            value={ItemID}
            onChange={(e) => setItemID(e.target.value)}
            validation={{ required: 'Item ID is required' }}
          />
        </div> */}
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
          <label className='text-xl mr-4'>Item Type</label>
          <textarea
            className='drop-shadow-md px-4 py-2 w-full'
            type='text'
            id='itemType'
            name='ItemType'
            placeholder='Enter Item Type'
            value={ItemType}
            onChange={(e) => setItemType(e.target.value)}
            validation={{ required: 'Item Type is required' }}
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
          <label className='text-xl mr-4'>Condition</label>
          <textarea
            className='drop-shadow-md px-4 py-2 w-full'
            type='text'
            id='condition'
            name='Condition'
            placeholder='Enter Condition'
            value={Condition}
            onChange={(e) => setCondition(e.target.value)}
            validation={{ required: 'Condition is required' }}
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

        <button className='p-2 bg-black m-8 text-white rounded-xl' onClick={handleUpdateRawmRequest}>Submit</button>
      </div>
    </div>
  )
}

export default UpdatermRequests

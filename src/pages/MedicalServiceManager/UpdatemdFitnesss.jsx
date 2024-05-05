import React, { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import PMHeader from '../../components/navbar/PMHeader';
import BackButton from '../../components/button/BackButton';

const UpdatemdFitnesss = () => {
    const [UserID, setUserID] = useState('');
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
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/mdFitnesss/${id}`)
            .then((response) => {
                setUserID(response.data.UserID);
                setName(response.data.Name)
                setTests(response.data.Tests)
                setMedications(response.data.Medications)
                setConditions(response.data.Conditions)
                setAge(response.data.Age)
                setWeight(response.data.Weight)
                setHeight(response.data.Height)
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                alert('An error happend. Please Check console');
                console.log(error);
            });
    }, [])

    const handleUpdateRawmdRequest = () => {
        const data = {
            UserID,
            Name,
            Tests,
            Medications,
            Conditions,
            Age,
            Weight,
            Height,
        };
        setLoading(true);
        axios
            .put(`http://localhost:5555/mdFitnesss/${id}`, data)
            .then(() => {
                setLoading(false);
                // enqueueSnackBar('Request updated successfully', { variant: 'success' });
                navigate('/RawmdRequests');
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
                <h1 className='text-3xl my-4 text-center'>Update Raw Material Request Form</h1>
                {/* <div className='my-2'>
          <label className='text-xl mr-4'>User ID</label>
          <input
            className='drop-shadow-md px-4 py-2 w-full'
            placeholder='Enter User ID'
            id='userID'
            name='UserID'
            type='text'
            value={UserID}
            onChange={(e) => setUserID(e.target.value)}
            validation={{ required: 'User ID is required' }}
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
                    <label className='text-xl mr-4'>Tests</label>
                    <textarea
                        className='drop-shadow-md px-4 py-2 w-full'
                        type='text'
                        id='tests'
                        name='Tests'
                        placeholder='Enter Tests'
                        value={Tests}
                        onChange={(e) => setTests(e.target.value)}
                        validation={{ required: 'Tests is required' }}
                    />
                </div>
                <div className='my-2'>
                    <label className='text-xl mr-4'>Medications</label>
                    <textarea
                        className='drop-shadow-md px-4 py-2 w-full'
                        type='text'
                        id='medications'
                        name='Medications'
                        placeholder='Enter Medications'
                        value={Medications}
                        onChange={(e) => setMedications(e.target.value)}
                        validation={{ required: 'Medications is required' }}
                    />
                </div>
                <div className='my-2'>
                    <label className='text-xl mr-4'>Conditions</label>
                    <textarea
                        className='drop-shadow-md px-4 py-2 w-full'
                        type='text'
                        id='conditions'
                        name='Conditions'
                        placeholder='Enter Conditions'
                        value={Conditions}
                        onChange={(e) => setConditions(e.target.value)}
                        validation={{ required: 'Conditions is required' }}
                    />
                </div>
                <div className='my-2'>
                    <label className='text-xl mr-4'>Age</label>
                    <textarea
                        className='drop-shadow-md px-4 py-2 w-full'
                        type='text'
                        id='age'
                        name='Age'
                        placeholder='Enter Age'
                        value={Age}
                        onChange={(e) => setAge(e.target.value)}
                        validation={{ required: 'Age is required' }}
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
                    <label className='text-xl mr-4'>Height</label>
                    <textarea
                        className='drop-shadow-md px-4 py-2 w-full'
                        type='text'
                        id='height'
                        name='Height'
                        placeholder='Enter Height'
                        value={Height}
                        onChange={(e) => setHeight(e.target.value)}
                        validation={{ required: 'Height is required' }}
                    />
                </div>

                <button className='p-2 bg-black m-8 text-white rounded-xl' onClick={handleUpdateRawmdRequest}>Submit</button>
            </div>
        </div>
    )
}

export default UpdatemdFitnesss

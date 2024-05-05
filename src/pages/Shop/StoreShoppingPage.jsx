import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import CustomCard1 from "../../components/homecontainer/CustomCard1";
import TableView2 from "../../components/table/TableView2";
import CustomHeader from "../../components/Header/CustomHeader";

const StoreShoppingPage = () => {
    const [smshops, setsmShops] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [imageSrc, setImageSrc] = useState("");

    const navigate = useNavigate(); // Create a navigate function using the hook

    useEffect(() => {
        const storedImage = localStorage.getItem("storedImage");
        console.log("use effect");
        console.log(storedImage);
        if (storedImage) {
            setImageSrc(storedImage);
        }
    }, []);

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:5555/smShops')
            .then((response) => {
                setsmShops(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const handleAddToCart = (product) => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
        const updatedTotalPrice = updatedCart.reduce((total, item) => total + parseInt(item.Price), 0);
        setTotalPrice(updatedTotalPrice);
    };

    const handleSaveTotalPrice = (smID) => {
        axios.post('http://localhost:5555/updateTotalPrice', {
            smID: smID,
            totalPrice: totalPrice
        })
        .then(response => {
            console.log('Total Price updated:', response.data);
        })
        .catch(error => {
            console.error('Failed to update total price:', error);
        });
    };

    const chunkArray = (arr, size) => {
        return arr.reduce((chunks, el, i) => {
            if (i % size === 0) {
                chunks.push([el]);
            } else {
                chunks[chunks.length - 1].push(el);
            }
            return chunks;
        }, []);
    };

    const filteredProducts = smshops.filter((v) => v.ItemName && v.ItemName.toLowerCase().includes(search.toLowerCase()));

    return (
        <div>
            <CustomHeader />
            <div className='relative' style={{ backgroundImage: "url('../../public/kru/sup01.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}>

            <div className='text-center font-bold text-3xl mb-4'>Shop</div>
            <div className='flex justify-between items-center m-5'>
                {/* Additional components if required */}
            </div>
            <input
                type="text"
                placeholder="Enter the Item Name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-gray-400 rounded-md px-4 py-2 mb-4"
            />
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <TableView2 headers={[]} />
                    <div className="flex flex-wrap justify-center">
                        {chunkArray(filteredProducts, 5).map((row, rowIndex) => (
                            <div key={rowIndex} className="flex flex-wrap justify-center">
                                {row.map((product, index) => (
                                    <CustomCard1
                                        key={index}
                                        header={product.ItemName}
                                        imageSrc={imageSrc}
                                        buttonLabel={`$${product.Price}`}
                                        buttonClassName="text-white bg-black-500 hover:bg-gray-800"
                                        buttonOnClick={() => handleAddToCart(product)}
                                        className="m-4 bg-gray-200 hover:bg-gray-700 transition duration-300 ease-in-out"
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                    <hr className="border-b-2 border-gray-300 my-8" />
                    <div className="text-center mt-4">
                        {cart.length > 0 && (
                            <div className="bg-gray-100 border border-gray-300 p-4">
                                <h2 className="text-lg font-semibold mb-2">Bill Summary</h2>
                                <ul className="text-left">
                                    {cart.map((item, index) => (
                                        <li key={index}>{item.ItemName}: ${item.Price}</li>
                                    ))}
                                </ul>
                                <p className="text-xl font-bold mt-4">Total Price: ${totalPrice}</p>
                                <button onClick={() => handleSaveTotalPrice(/* smID here */)}>Save Total</button>
                            </div>
                        )}
                    </div>
                    <hr className="border-b-2 border-gray-300 my-8" />
                </div>
            )}
            {/* Pay the Bill button with navigation */}
            <div className="text-center my-8">
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => navigate('/InventoryHome')}
                >
                    Pay the Bill
                </button>
            </div>
            </div>
        </div>
    );
};

export default StoreShoppingPage;

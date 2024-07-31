// components/AddItem.js

import { useState } from 'react';
import db from '../utils/firestore';
import { collection, addDoc } from "firebase/firestore";

const AddItem = () => {
    const [value, setValue] = useState('');
    const [quantity, setQuantity] = useState(0); // Added state for quantity
    const [expirationDate, setExpirationDate] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "items"), {
                name: value,
                quantity: quantity, // Store quantity in Firestore
                expirationDate: expirationDate
            });
            console.log("Document written with ID: ", docRef.id);
            setValue('');
            setQuantity(0); // Clear quantity after submission
            setExpirationDate('');
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    const handleIncrement = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
    };

    return (
        <div className="bg-slate-500 p-4 rounded-lg">
            <form onSubmit={handleSubmit} className="flex items-center space-x-4 text-black">
                <input
                    className="p-5 border-4 flex-1 box-border h-11"
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Enter Item"
                />
                <div className="flex items-center space-x-2">
                    <button
                        type="button"
                        onClick={handleDecrement}
                        className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-l-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                    >
                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
                        </svg>
                    </button>
                    <input
                        type="text"
                        value={quantity}
                        readOnly
                        className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-16 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <button
                        type="button"
                        onClick={handleIncrement}
                        className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-r-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                    >
                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </button>
                </div>
                <input
                    type="date" // Input type for date
                    value={expirationDate}
                    onChange={(e) => setExpirationDate(e.target.value)}
                    className="p-5 border-4 box-border h-11"
                    placeholder="Expiration Date"
                /> 

                <button
                    className="text-white bg-slate-950 hover:bg-slate-900 p-3 text-xl"
                    type="submit">
                    Add
                </button>
            </form>
        </div>
    );
};

export default AddItem;


"use client"

import { useEffect, useState } from "react"
import db from "../utils/firestore"
import { collection, getDocs } from "firebase/firestore"
import DeleteItem from "./DeleteItem"

const ListItems = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, "items"))
      setItems(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    fetchItems()
  }, [])

  return (
    <div className="bg-slate-500 p-4 rounded-lg mt-4">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                
                <tr>
                    <th scope="col" className="px-6 py-3">Item</th>
                    <th scope="col" className="px-6 py-3">Quantity</th>
                    <th scope="col" className="px-6 py-3">Expiration Date</th>
                    <th scope="col" className="px-6 py-3 text-center">Action</th>
                </tr>
            </thead>
            
            <tbody>
                {items.map(item => (
                    <tr key={item.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{item.name}</td>
                        <td className="px-6 py-4">{item.quantity}</td>
                        <td className="px-6 py-4">{item.expirationDate}</td>
                        <td className="px-6 py-4 flex justify-center">
                        <DeleteItem id={item. id} />
                        </td>
                    </tr>
                ))}
                
            </tbody>
        </table>
        
    </div>
);
};

export default ListItems

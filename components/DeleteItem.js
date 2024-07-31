
import db from "../utils/firestore"
import { doc, deleteDoc } from "firebase/firestore"

const DeleteItem = ({ id }) => {
  const handleDelete = async () => {
    const itemRef = doc(db, "items", id)
    try {
      await deleteDoc(itemRef)
      alert("Item deleted successfully")
    } catch (error) {
      console.error("Error deleting document: ", error)
      alert("Error deleting item")
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 hover:bg-red-400 text-white font-bold p-2 w-8 h-8 border-b-4 border-red-700 hover:border-red-600 rounded flex items-center justify-center">
        
      X 
    </button>


  )
}

export default DeleteItem

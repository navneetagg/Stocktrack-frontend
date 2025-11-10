import axios from "axios";
import { useState,useEffect } from "react";

function Inventory(){
    const [allitems,setallitems]= useState([]);
    const[loading,setloading]= useState(true);
    const callitems = async()=>{
        try{
        const response = await axios.get('/api/items');
        setallitems(response.data);
        }
        catch(e){
            console.error("Error",e);
        }finally{
            setloading(false);
        }
        
    }
    
    useEffect(()=>{
            callitems();
        },[])
        if(loading){
            return<div>Loading...</div>
        }
        const deleteitem = async (id)=>{
            if(window.confirm("are you sure want to delete this item?")){
                try{
                    await axios.delete(`/api/items/${id}`);
                    setallitems(allitems.filter(item=>item._id!=id));
                }
                catch(e){
                    console.error("Failed to delete item",e);
                    alert("cannot delete item");
                }
            }
        }
    return(
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">
                    Inventory
                </h1>
                <div className="flex space-x-4">
                    <input type="text" placeholder="Search items..." className="p-2 bg-zinc-700 rounded-md text-white border border-zinc-600 focus:ring-cyan-500 focus:border-cyan-500"/>
                    <button className="bg-cyan-500 text-white font-bold py-2 px-4 rounded-md hover:bg-cyan-600 transition-colors">
                    +Add New Item
                    </button>
                </div>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg shadow-lg">
                <table className="w-full text-left">
                    <thead className="border-b border-zinc-600">
                        <tr>
                           <th className="py-3 text-sm font-medium text-gray-400 uppercase">SKU</th>
                           <th className="py-3 text-sm font-medium text-gray-400 uppercase">Product Name</th>
                           <th className="py-3 text-sm font-medium text-gray-400 uppercase">Category</th>
                           <th className="py-3 text-sm font-medium text-gray-400 uppercase">Quantity</th>
                           <th className="py-3 text-sm font-medium text-gray-400 uppercase">Price</th>
                           <th className="py-3 text-sm font-medium text-gray-400 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                       {allitems.map((item)=>(
                         <tr key={item._id} className="border-b border-zinc-700 hover:bg-zinc-700">
                            <td className="py-4 text-cyan-400">{item.id}</td>
                            <td className="py-4 text-white">{item.name}</td>
                            <td className="py-4 text-gray-300">{item.category}</td>
                            <td className="py-4 text-white">{item.quantity}</td>
                            <td className="py-4 text-gray-300">${item.price.toFixed(2)}</td>
                            <td className="py-4 flex space-x-2">
                                <button className="text-blue-400 hover:text-blue-300">Edit</button>
                                <button className="text-red-500 hover:text-red-400"onClick={()=>{
                                    deleteitem(item._id)
                                }}>Delete</button></td>
                        </tr>
                       ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Inventory;
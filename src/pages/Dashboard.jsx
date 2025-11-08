import { useState,useEffect } from 'react';
import axios from 'axios';
import StatCard from "../components/StatCard";
import RecentItemsTable from "../components/RecentItemsTable";
import QuickAddItemForm from "../components/QuickAddItemForm"
function Dashboard(){
      const[TotalItems,SetTotalItems]= useState('...');
  const[TotalValue,SetTotalValue]= useState('...');
  const[LowStock,SetLowStock]= useState('...');
  useEffect(()=>{
const fetchDashboardStats= async()=>{
try{
  const response = await axios.get('/api/items');
  const items = response.data;
  const totalItemsCount = items.length;
  const totalValueCalc = items.reduce((acc,item)=>{
    return acc +(item.price*item.quantity);
  },0);
  const lowStockCount = items.filter(item=>item.quantity<10).length;
  SetTotalItems(totalItemsCount);
  SetTotalValue(totalValueCalc);
  SetLowStock(lowStockCount);

}catch(error){
  console.error("Error Fetching Dashboard stats",error);
    SetTotalItems('Error');
  SetTotalValue('Error');
  SetLowStock('Error');

}
}
fetchDashboardStats();
  },[]);
    return(<>
        <h1 className="text-3xl font-bold mb-8">
    Welcome To The StockTrack Dashboard
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <StatCard title="Total Items" value={TotalItems}/>
      <StatCard title="Low on Stock" value={LowStock}/>
      <StatCard title="Total Value" value={typeof TotalValue === 'number' ? `$${TotalValue.toFixed(2)}` : TotalValue}/>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
      <div className="lg:col-span-2"> <RecentItemsTable/></div>
      <div className="lg:col-span-1"><QuickAddItemForm/></div>
    </div>
    </>)
}
export default Dashboard
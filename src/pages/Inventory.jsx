function Inventory(){
    const allitems = [
  { id: 'SKU-836', name: 'Wireless Mouse', category: 'Electronics', quantity: 50, price: 29.99 },
  { id: 'SKU-492', name: 'Mechanical Keyboard', category: 'Electronics', quantity: 25, price: 119.99 },
  { id: 'SKU-105', name: 'USB-C Hub', category: 'Accessories', quantity: 120, price: 19.99 },
  { id: 'SKU-773', name: '4K Monitor', category: 'Monitors', quantity: 10, price: 399.00 },
  { id: 'SKU-231', name: 'Ergonomic Chair', category: 'Furniture', quantity: 15, price: 249.50 },
  { id: 'SKU-589', name: 'Desk Mat', category: 'Accessories', quantity: 200, price: 14.99 },
];
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
                         <tr key={item.id} className="border-b border-zinc-700 hover:bg-zinc-700">
                            <td className="py-4 text-cyan-400">{item.id}</td>
                            <td className="py-4 text-white">{item.name}</td>
                            <td className="py-4 text-gray-300">{item.category}</td>
                            <td className="py-4 text-white">{item.quantity}</td>
                            <td className="py-4 text-gray-300">${item.price.toFixed(2)}</td>
                            <td className="py-4 flex space-x-2">
                                <button className="text-blue-400 hover:text-blue-300">Edit</button>
                                <button className="text-red-500 hover:text-red-400">Delete</button></td>
                        </tr>
                       ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Inventory;
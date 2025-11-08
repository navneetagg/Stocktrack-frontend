const items = [{id:'SKU-836',name:'Wireless-Mouse',quantity:'50',added:'2025-11-07'},{id:'SKU-492',name:'Mechanical-keyboard',quantity:'25',added:'2025-11-08'},{id:'SKU-105',name:'USB-C-hub',quantity:'120',added:'2025-11-08'},{id:'SKU-773',name:'4k-Monitor',quantity:'10',added:'2025-11-06'}]
function RecentitemsTable(){
    return(<div className="bg-zinc-800 p-6 rounded-lg shadow-lg ">
        <h3 className="text-xl font-semibold text-white mb-4">
            Recently Added Items
        </h3>
        <table className="w-full text-left">
            <thead className="border-b border-zinc-600">
                <tr>
                    <th className="py-3 text-sm font-medium text-gray-400 uppercase">SKU</th>
                    <th className="py-3 text-sm font-medium text-gray-400 uppercase">Product Name</th>
                    <th className="py-3 text-sm font-medium text-gray-400 uppercase">Quantity</th>
                    <th className="py-3 text-sm font-medium text-gray-400 uppercase">Date Added</th>
                </tr>

            </thead>
            <tbody>
        {items.map((item) => (
            <tr key={item.id} className="border-b border-zinc-700 hover:bg-zinc-700">
              <td className="py-4 text-cyan-400">{item.id}</td>
              <td className="py-4 text-white">{item.name}</td>
              <td className="py-4 text-white">{item.quantity}</td>
              <td className="py-4 text-gray-300">{item.added}</td>
            </tr>
          ))}
            </tbody>
        </table>
    </div>)
}
export default RecentitemsTable;
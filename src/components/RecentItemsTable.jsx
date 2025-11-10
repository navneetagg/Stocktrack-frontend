
function RecentitemsTable({items}){
    const recentitems = items.slice(0,5);
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
        {recentitems.map((item) => (
            <tr key={item._id} className="border-b border-zinc-700 hover:bg-zinc-700">
              <td className="py-4 text-cyan-400">{item._id}</td>
              <td className="py-4 text-white">{item.name}</td>
              <td className="py-4 text-white">{item.quantity}</td>
              <td className="py-4 text-gray-300">{item.createdAt}</td>
            </tr>
          ))}
            </tbody>
        </table>
    </div>)
}
export default RecentitemsTable;
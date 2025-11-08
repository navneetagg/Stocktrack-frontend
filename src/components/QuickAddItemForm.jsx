function QuickAddItemForm(){
    return(<div className="bg-zinc-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-white mb-4">
            Quick Add Item
        </h3>
        <form className="space-y-4">
            <div>
                <label htmlFor="ProductNAME" className="block text-sm font-medium text-gray-300">Product Name</label>
                <input type="text" id="productName" className="w-full mt-1 p-2 bg-zinc-700 rounded-md text-white border border-zinc-600 focus:ring-cyan-500 focus:border-cyan-500" />
            </div>
            <div>
                <label htmlFor="sku" className="block text-sm  font-medium text-gray-300">SKU</label>
                <input type="text" id="sku" className="w-full mt-1 p-2 bg-zinc-700 rounded-md text-white border border-zinc-600 focus:ring-cyan-500 focus:border-cyan-500"/>

            </div>
            <div>
                <label htmlFor="quantity" className="block text-sm  font-medium text-gray-300">Quantity</label>
                <input type="number" id="quantity" className="w-full mt-1 p-2 bg-zinc-700 rounded-md text-white border border-zinc-600 focus:ring-cyan-500 focus:border-cyan-500"/>
            </div>
            <button type="submit" className="w-full bg-cyan-500 text-white font-bold py-2 px-4 rounded-md hover:bg-cyan-600 transition-colors">Add Item</button>
        </form>
    </div>)
}
export default QuickAddItemForm;
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="w-full bg-zinc-800 text-white p-4 shadow-md">
      <div className="flex justify-between items-center px-6">
        <Link to="/" className="text-2xl font-bold text-cyan-400">
          StockTrack
        </Link>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-cyan-300">DashBoard</a>
          <a href="#" className="hover:text-cyan-300">Inventory</a>
          <a href="#" className="hover:text-cyan-300">Add Item</a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
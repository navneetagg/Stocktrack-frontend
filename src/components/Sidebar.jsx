import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-700 text-white h-screen shadow-lg">
      <nav className="mt-8">
        <Link 
          to="/dashboard" 
          className="block py-3 px-6 text-lg font-semibold  hover:bg-zinc-600 focus:bg-zinc-800"
        >
          Dashboard
        </Link>
        
        <Link 
          to="/inventory" 
          className="block py-3 px-6 text-lg hover:bg-zinc-600 focus:bg-zinc-800"
        >
          Inventory
        </Link>
        
        <a 
          href="#" 
          className="block py-3 px-6 text-lg hover:bg-zinc-600"
        >
          Reports
        </a>
        <a 
          href="#" 
          className="block py-3 px-6 text-lg hover:bg-zinc-600"
        >
          Suppliers
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
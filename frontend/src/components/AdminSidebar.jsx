import { Link } from 'react-router-dom';

function AdminSidebar() {
  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-gray-900 text-white p-4 transition-all duration-300 md:w-16">
      <Link to="/admin" className="flex items-center text-xl font-bold mb-8 md:justify-center">
        <span className="md:hidden">Admin Panel</span>
        <span className="hidden md:block">📊</span>
      </Link>
      
      <nav className="space-y-2">
        <Link to="/admin" className="flex items-center text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg p-3 transition-colors md:justify-center">
          <span className="mr-3 md:mr-0">📊</span>
          <span className="md:hidden">Dashboard</span>
        </Link>
        <Link to="/admin/products" className="flex items-center text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg p-3 transition-colors md:justify-center">
          <span className="mr-3 md:mr-0">📦</span>
          <span className="md:hidden">Products</span>
        </Link>
        <Link to="/admin/orders" className="flex items-center text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg p-3 transition-colors md:justify-center">
          <span className="mr-3 md:mr-0">🛍️</span>
          <span className="md:hidden">Orders</span>
        </Link>
        <Link to="/admin/customers" className="flex items-center text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg p-3 transition-colors md:justify-center">
          <span className="mr-3 md:mr-0">👥</span>
          <span className="md:hidden">Customers</span>
        </Link>
        <Link to="/admin/settings" className="flex items-center text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg p-3 transition-colors md:justify-center">
          <span className="mr-3 md:mr-0">⚙️</span>
          <span className="md:hidden">Settings</span>
        </Link>
      </nav>
    </aside>
  );
}

export default AdminSidebar;
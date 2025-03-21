import AdminSidebar from './AdminSidebar';

function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-4 bg-gray-50 ml-32 transition-all duration-300 md:ml-16 lg:ml-60">
        {children}
      </main>
    </div>
  );
}

export default AdminLayout;
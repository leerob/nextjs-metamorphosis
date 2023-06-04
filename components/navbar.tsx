import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="flex h-16 items-center px-4 border-b border-gray-200">
      <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
        <Link className="text-sm font-medium" href="/">
          Invoices
        </Link>
        <p className="text-sm font-medium">Customers</p>
        <p className="text-sm font-medium">Products</p>
        <Link className="text-sm font-medium" href="/settings/profile">
          Settings
        </Link>
      </nav>
    </div>
  );
}

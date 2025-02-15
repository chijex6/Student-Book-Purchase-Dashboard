import React from "react";
import { Home, Book, ShoppingCart, Settings, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
export const Sidebar = () => {
  return <div className="w-64 h-full bg-white border-r border-gray-200 p-4">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-gray-800">StudyBooks</h1>
      </div>
      <nav className="space-y-2">
        <Link to="/" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
          <Home className="w-5 h-5 mr-3" />
          Dashboard
        </Link>
        <Link to="/books" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
          <Book className="w-5 h-5 mr-3" />
          Books
        </Link>
        <Link to="/cart" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
          <ShoppingCart className="w-5 h-5 mr-3" />
          Cart
        </Link>
        <Link to="/settings" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
          <Settings className="w-5 h-5 mr-3" />
          Settings
        </Link>
      </nav>
      <div className="absolute bottom-4">
        <button className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </button>
      </div>
    </div>;
};
import React from "react";
import { ShoppingCart } from "lucide-react";
interface BookProps {
  title: string;
  author: string;
  price: number;
  cover: string;
}
export const BookCard = ({
  title,
  author,
  price,
  cover
}: BookProps) => {
  return <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <img src={cover} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm mb-2">{author}</p>
      <div className="flex justify-between items-center">
        <span className="font-bold text-gray-900">${price}</span>
        <button className="bg-blue-600 text-white px-3 py-2 rounded-lg flex items-center text-sm hover:bg-blue-700">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </button>
      </div>
    </div>;
};
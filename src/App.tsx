import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { SearchBar } from "./components/SearchBar";
import { BookCard } from "./components/BookCard";
const books = [{
  title: "The Design of Everyday Things",
  author: "Don Norman",
  price: 29.99,
  cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400"
}, {
  title: "Clean Code",
  author: "Robert C. Martin",
  price: 34.99,
  cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400"
}, {
  title: "Learning Python",
  author: "Mark Lutz",
  price: 39.99,
  cover: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?auto=format&fit=crop&q=80&w=400"
}, {
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford",
  price: 24.99,
  cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400"
}];
export function App() {
  return <Router>
      <div className="flex w-full min-h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Welcome back, Student!
              </h2>
              <SearchBar />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {books.map((book, index) => <BookCard key={index} {...book} />)}
            </div>
          </div>
        </main>
      </div>
    </Router>;
}
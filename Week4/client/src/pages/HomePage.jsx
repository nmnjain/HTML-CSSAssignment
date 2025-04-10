import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { products } from '../data/products';
import axios from 'axios';

// API base URL - will be updated during deployment
const API_URL = '/api';

function HomePage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // ...existing code...

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${API_URL}/users`);
        // Ensure response.data is an array
        const userData = Array.isArray(response.data) ? response.data : [];
        setUsers(userData);
        setError(null);
      } catch (err) {
        console.error('Error fetching users:', err);
        setError('Failed to load users. Server might be offline.');
        setUsers([]); // Set empty array on error
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary-600 text-white">
        <div className="container py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to TechStore</h1>
            <p className="text-xl mb-8">Discover the latest tech gadgets and accessories for your everyday needs.</p>
            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <div key={product.id} className="card hover:shadow-lg transition">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-primary-600 font-bold mb-2">${product.price.toFixed(2)}</p>
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  <Link
                    to={`/product/${product.id}`}
                    className="btn btn-primary w-full text-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Users from API Section */}
      <div className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Users</h2>
          {isLoading && <p className="text-center">Loading users...</p>}
          {error && <p className="text-red-500 text-center">{error}</p>}

          {!isLoading && !error && Array.isArray(users) && users.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {users.map(user => (
                <div key={user.id} className="card p-4">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold">
                      {user.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold">{user.name}</h3>
                      <p className="text-gray-600">{user.email}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            ) : (
              <p className="text-center">No users found.</p>
            )}
        </div>
      </div>
    </div>
  );
}

export default HomePage; 
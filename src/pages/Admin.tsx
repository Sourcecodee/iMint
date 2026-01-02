import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { Product } from '../components/ProductCard';
import AddProductForm from '../components/AddProductForm';
import AdminProductList from '../components/AdminProductList';

const Admin: React.FC = () => {
  const { products } = useProducts();
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center mr-3 shadow-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h1 className="text-xl sm:text-2xl brand-font bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent">iMint Admin</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="text-gray-800 hover:text-black font-medium text-sm sm:text-base"
              >
                <span className="hidden sm:inline">← Back to Store</span>
                <span className="sm:hidden">← Back</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-7 lg:py-8 pt-24">
        {/* Admin Controls */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-5 lg:p-6 mb-6 sm:mb-7 lg:mb-8">
          <div className="flex justify-between items-center mb-4 sm:mb-5 lg:mb-6">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Product Management</h2>
              <p className="text-sm sm:text-base text-gray-600">Manage your product inventory</p>
            </div>
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-gradient-to-r from-gray-800 to-black hover:from-black hover:to-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              + Add New Product
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-5 lg:mb-6">
            <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
              <div className="text-xl sm:text-2xl font-bold text-gray-800">{products.length}</div>
              <div className="text-sm text-gray-600">Total Products</div>
            </div>
            <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
              <div className="text-xl sm:text-2xl font-bold text-green-600">
                {products.filter(p => p.condition === 'Excellent').length}
              </div>
              <div className="text-sm text-gray-600">Excellent Condition</div>
            </div>
            <div className="bg-yellow-50 p-3 sm:p-4 rounded-lg">
              <div className="text-xl sm:text-2xl font-bold text-yellow-600">
                {products.filter(p => p.condition === 'Very Good').length}
              </div>
              <div className="text-sm text-gray-600">Very Good Condition</div>
            </div>
            <div className="bg-orange-50 p-3 sm:p-4 rounded-lg">
              <div className="text-xl sm:text-2xl font-bold text-orange-600">
                {products.filter(p => p.condition === 'Good').length}
              </div>
              <div className="text-sm text-gray-600">Good Condition</div>
            </div>
          </div>
        </div>

        {/* Add/Edit Product Form */}
        {showAddForm && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                {editingProduct ? 'Edit Product' : 'Add New Product'}
              </h3>
              <button
                onClick={() => {
                  setShowAddForm(false);
                  setEditingProduct(null);
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <AddProductForm
              product={editingProduct}
              onClose={() => {
                setShowAddForm(false);
                setEditingProduct(null);
              }}
            />
          </div>
        )}

        {/* Product List */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">All Products</h3>
          </div>
          <AdminProductList
            onEdit={(product) => {
              setEditingProduct(product);
              setShowAddForm(true);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Admin;

import React, { useState } from 'react';
import { Plus, Edit, Trash2, Eye, MapPin, Ruler, Phone, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useListings, LandListing } from '../contexts/ListingsContext';
import AddListingForm from './AddListingForm';

interface DashboardPageProps {
  setCurrentPage: (page: string) => void;
  setSelectedListing: (listing: LandListing) => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ setCurrentPage, setSelectedListing }) => {
  const { user } = useAuth();
  const { getUserListings, deleteListing } = useListings();
  const [showAddForm, setShowAddForm] = useState(false);
  
  const userListings = getUserListings(user?.id || '');

  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)} Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)} L`;
    } else {
      return `₹${price.toLocaleString()}`;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'residential':
        return 'bg-blue-100 text-blue-800';
      case 'commercial':
        return 'bg-purple-100 text-purple-800';
      case 'agricultural':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'sold':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleViewDetails = (listing: LandListing) => {
    setSelectedListing(listing);
    setCurrentPage('listing-details');
  };

  const handleDeleteListing = (id: string) => {
    if (window.confirm('Are you sure you want to delete this listing?')) {
      deleteListing(id);
    }
  };

  if (showAddForm) {
    return (
      <AddListingForm 
        onClose={() => setShowAddForm(false)}
        onSuccess={() => {
          setShowAddForm(false);
          // The form will automatically update the listings context
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-stone-900 mb-2">
                Welcome back, {user?.name}!
              </h1>
              <p className="text-gray-600">
                Manage your land listings and track your property portfolio
              </p>
            </div>
            <button
              onClick={() => setShowAddForm(true)}
              className="mt-4 sm:mt-0 flex items-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium"
            >
              <Plus className="h-5 w-5" />
              <span>Add New Plot</span>
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Listings</p>
                <p className="text-2xl font-bold text-stone-900">{userListings.length}</p>
              </div>
              <MapPin className="h-8 w-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Available</p>
                <p className="text-2xl font-bold text-green-600">
                  {userListings.filter(l => l.availability === 'available').length}
                </p>
              </div>
              <Eye className="h-8 w-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {userListings.filter(l => l.availability === 'pending').length}
                </p>
              </div>
              <Edit className="h-8 w-8 text-yellow-500" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Sold</p>
                <p className="text-2xl font-bold text-red-600">
                  {userListings.filter(l => l.availability === 'sold').length}
                </p>
              </div>
              <Trash2 className="h-8 w-8 text-red-500" />
            </div>
          </div>
        </div>

        {/* Listings */}
        <div className="bg-white rounded-xl shadow-lg">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-stone-900">Your Listings</h2>
          </div>

          {userListings.length === 0 ? (
            <div className="p-12 text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No listings yet</h3>
              <p className="text-gray-600 mb-6">
                Start by adding your first land plot to reach potential buyers.
              </p>
              <button
                onClick={() => setShowAddForm(true)}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium"
              >
                Add Your First Plot
              </button>
            </div>
          ) : (
            <div className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {userListings.map((listing) => (
                  <div
                    key={listing.id}
                    className="border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-200"
                  >
                    {/* Image */}
                    <div className="relative h-40 overflow-hidden rounded-t-lg">
                      <img
                        src={listing.images[0]}
                        alt={listing.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeColor(listing.type)}`}>
                          {listing.type.charAt(0).toUpperCase() + listing.type.slice(1)}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(listing.availability)}`}>
                          {listing.availability.charAt(0).toUpperCase() + listing.availability.slice(1)}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="font-semibold text-stone-900 mb-2 line-clamp-1">
                        {listing.title}
                      </h3>
                      
                      <div className="flex items-center text-gray-600 mb-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm line-clamp-1">{listing.location}</span>
                      </div>

                      <div className="flex items-center text-gray-600 mb-3">
                        <Ruler className="h-4 w-4 mr-1" />
                        <span className="text-sm">{listing.plotSize}</span>
                      </div>

                      <div className="text-lg font-bold text-green-600 mb-4">
                        {formatPrice(listing.price)}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleViewDetails(listing)}
                          className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors text-sm"
                        >
                          <Eye className="h-4 w-4" />
                          <span>View</span>
                        </button>
                        <button
                          onClick={() => handleDeleteListing(listing.id)}
                          className="flex items-center justify-center px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
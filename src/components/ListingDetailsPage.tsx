import React from 'react';
import { ArrowLeft, MapPin, Ruler, Tag, Phone, MessageCircle, Calendar, CheckCircle, User, Mail } from 'lucide-react';
import { LandListing } from '../contexts/ListingsContext';

interface ListingDetailsPageProps {
  listing: LandListing;
  setCurrentPage: (page: string) => void;
  setScheduleData: (data: any) => void;
}

const ListingDetailsPage: React.FC<ListingDetailsPageProps> = ({ 
  listing, 
  setCurrentPage, 
  setScheduleData 
}) => {
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

  const handleScheduleVisit = () => {
    setScheduleData({
      listing: listing,
      ownerName: listing.ownerName,
      ownerPhone: listing.ownerPhone,
      ownerEmail: listing.ownerEmail
    });
    setCurrentPage('schedule');
  };

  const handleCall = () => {
    window.location.href = `tel:${listing.ownerPhone}`;
  };

  const handleMessage = () => {
    const message = `Hi, I'm interested in your land plot: ${listing.title} in ${listing.location}. Could you please provide more details?`;
    window.location.href = `sms:${listing.ownerPhone}?body=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-stone-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => setCurrentPage('listings')}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Listings</span>
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-96 overflow-hidden">
                <img
                  src={listing.images[0]}
                  alt={listing.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {listing.images.length > 1 && (
                <div className="p-4 flex space-x-2 overflow-x-auto">
                  {listing.images.slice(1).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${listing.title} ${index + 2}`}
                      className="h-20 w-20 object-cover rounded-lg flex-shrink-0"
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Property Details */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getTypeColor(listing.type)}`}>
                  {listing.type.charAt(0).toUpperCase() + listing.type.slice(1)}
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                  {listing.availability.charAt(0).toUpperCase() + listing.availability.slice(1)}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-stone-900 mb-4">
                {listing.title}
              </h1>

              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-lg">{listing.location}</span>
              </div>

              <div className="flex items-center text-gray-600 mb-6">
                <Ruler className="h-5 w-5 mr-2" />
                <span className="text-lg">{listing.plotSize}</span>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-stone-900 mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed">{listing.description}</p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-stone-900 mb-4">Features & Amenities</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {listing.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {formatPrice(listing.price)}
                </div>
                <p className="text-gray-600">Total Price</p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleCall}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Owner</span>
                </button>

                <button
                  onClick={handleMessage}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Send Message</span>
                </button>

                <button
                  onClick={handleScheduleVisit}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Schedule Visit</span>
                </button>
              </div>
            </div>

            {/* Owner Details */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-stone-900 mb-4">Owner Details</h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-700">{listing.ownerName}</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-700">{listing.ownerPhone}</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-700">{listing.ownerEmail}</span>
                </div>
              </div>
            </div>

            {/* Property Summary */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-stone-900 mb-4">Property Summary</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Type:</span>
                  <span className="font-medium text-stone-900 capitalize">{listing.type}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Size:</span>
                  <span className="font-medium text-stone-900">{listing.plotSize}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="font-medium text-green-600 capitalize">{listing.availability}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Listed:</span>
                  <span className="font-medium text-stone-900">
                    {new Date(listing.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetailsPage;
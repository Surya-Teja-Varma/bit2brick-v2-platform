import React from 'react';
import { MapPin, Search, Users, CheckCircle, ArrowRight, Leaf, Building, Tractor } from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const features = [
    {
      icon: <MapPin className="h-8 w-8 text-green-500" />,
      title: 'Prime Locations',
      description: 'Discover land plots in the most sought-after locations with verified documentation.'
    },
    {
      icon: <Search className="h-8 w-8 text-green-500" />,
      title: 'Smart Search',
      description: 'Find your perfect plot with advanced filters for location, price, size, and type.'
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: 'Direct Connect',
      description: 'Connect directly with verified landowners without any middleman commission.'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-green-500" />,
      title: 'Verified Listings',
      description: 'All listings are verified with proper documentation and legal clearances.'
    }
  ];

  const plotTypes = [
    {
      icon: <Building className="h-12 w-12 text-blue-500" />,
      title: 'Residential Plots',
      description: 'Perfect locations for building your dream home',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Building className="h-12 w-12 text-purple-500" />,
      title: 'Commercial Plots',
      description: 'Strategic locations for business and investment',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Tractor className="h-12 w-12 text-green-500" />,
      title: 'Agricultural Land',
      description: 'Fertile lands for farming and agriculture',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-green-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              List Your Land.
              <span className="text-green-400 block">Reach Genuine Buyers.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              The trusted platform where landowners connect directly with serious buyers. 
              No commission, no hassle, just genuine connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setCurrentPage('listings')}
                className="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Search className="h-5 w-5" />
                <span>Browse Land Plots</span>
              </button>
              <button
                onClick={() => setCurrentPage('auth')}
                className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-stone-900 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <MapPin className="h-5 w-5" />
                <span>List Your Land</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Plot Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              What Type of Land Are You Looking For?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you're planning to build, invest, or farm, we have the perfect plot for you.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plotTypes.map((type, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`p-8 text-center bg-gradient-to-br ${type.color} rounded-t-xl`}>
                  <div className="bg-white rounded-full p-4 inline-block mb-4">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{type.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <button
                    onClick={() => setCurrentPage('listings')}
                    className="text-green-600 hover:text-green-700 font-semibold flex items-center space-x-1 group-hover:space-x-2 transition-all"
                  >
                    <span>Explore Plots</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Why Choose Bit2Brick?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We make land transactions simple, transparent, and secure for both buyers and sellers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                <div className="bg-green-50 rounded-full p-4 inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-green-100">Listed Plots</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-green-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-green-100">Cities Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-green-100">Verified Listings</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Perfect Plot?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of satisfied customers who found their ideal land through Bit2Brick.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('listings')}
              className="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
            >
              Start Browsing Plots
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="px-8 py-4 bg-transparent border-2 border-gray-400 hover:border-white hover:bg-white hover:text-stone-900 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
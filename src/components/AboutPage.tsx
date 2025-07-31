import React from 'react';
import { MapPin, Users, CheckCircle, Heart, Target, Shield } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-green-500" />,
      title: 'Our Mission',
      description: 'To create a transparent, efficient platform where landowners can directly connect with genuine buyers, eliminating unnecessary middlemen and reducing transaction costs.'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: 'Trust & Security',
      description: 'We verify all listings and ensure secure transactions. Our platform provides a safe environment for both buyers and sellers to conduct business with confidence.'
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: 'Customer First',
      description: 'We prioritize our users experience above all else. Our dedicated support team ensures that every transaction is smooth and hassle-free.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Properties Listed' },
    { number: '200+', label: 'Happy Customers' },
    { number: '50+', label: 'Cities Covered' },
    { number: '100%', label: 'Verified Listings' }
  ];

  const features = [
    'Direct connection between buyers and sellers',
    'No hidden fees or commissions',
    'Verified property documentation',
    'Advanced search and filtering',
    'Mobile-responsive platform',
    '24/7 customer support'
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-stone-900 via-stone-800 to-green-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Bit2Brick
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Connecting landowners with genuine buyers through a transparent, 
            commission-free platform that puts trust and efficiency first.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Founded in 2024, Bit2Brick emerged from a simple observation: 
                  land transactions were unnecessarily complicated, expensive, and opaque. 
                  Traditional real estate platforms focused on houses and rentals, 
                  leaving landowners with limited options to showcase their properties.
                </p>
                <p>
                  We saw an opportunity to create something different - a platform 
                  exclusively dedicated to land plots, where owners could list their 
                  properties directly and buyers could discover opportunities without 
                  the burden of heavy commissions and middleman fees.
                </p>
                <p>
                  Today, Bit2Brick serves as the trusted bridge between landowners 
                  and buyers across multiple cities, facilitating transparent, 
                  secure, and efficient land transactions.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-stone-50 p-8 rounded-xl">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our core values shape everything we do and guide us in building 
              the best land marketplace experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gray-50 rounded-full p-4 inline-block mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
                Why Choose Bit2Brick?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                We've built our platform with both landowners and buyers in mind, 
                focusing on simplicity, transparency, and effectiveness.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-green-100 mb-6">
                Join thousands of satisfied users who have successfully bought 
                and sold land through our platform.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-green-300" />
                  <span className="text-green-100">List your land in minutes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-green-300" />
                  <span className="text-green-100">Connect with genuine buyers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-300" />
                  <span className="text-green-100">No commission fees</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Bit2Brick Community
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether you're looking to buy land or sell your property, 
            we're here to make the process simple and transparent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-lg transition-all transform hover:scale-105">
              Start Browsing Lands
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-gray-400 hover:border-white hover:bg-white hover:text-stone-900 rounded-lg font-semibold text-lg transition-all transform hover:scale-105">
              List Your Property
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface LandListing {
  id: string;
  title: string;
  location: string;
  price: number;
  plotSize: string;
  type: 'residential' | 'commercial' | 'agricultural';
  availability: 'available' | 'sold' | 'pending';
  description: string;
  images: string[];
  ownerId: string;
  ownerName: string;
  ownerPhone: string;
  ownerEmail: string;
  features: string[];
  createdAt: string;
}

interface ListingsContextType {
  listings: LandListing[];
  addListing: (listing: Omit<LandListing, 'id' | 'createdAt'>) => void;
  updateListing: (id: string, listing: Partial<LandListing>) => void;
  deleteListing: (id: string) => void;
  getListingById: (id: string) => LandListing | undefined;
  getUserListings: (userId: string) => LandListing[];
}

const ListingsContext = createContext<ListingsContextType | undefined>(undefined);

export const useListings = () => {
  const context = useContext(ListingsContext);
  if (!context) {
    throw new Error('useListings must be used within a ListingsProvider');
  }
  return context;
};

const sampleListings: LandListing[] = [
  {
    id: '1',
    title: 'Prime Residential Plot in Green Valley',
    location: 'Green Valley, Bangalore',
    price: 1500000,
    plotSize: '2400 sq ft',
    type: 'residential',
    availability: 'available',
    description: 'Premium residential plot in a well-developed area with all modern amenities. Perfect for building your dream home.',
    images: ['https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg'],
    ownerId: 'sample1',
    ownerName: 'Rajesh Kumar',
    ownerPhone: '+91 98765 43210',
    ownerEmail: 'rajesh@email.com',
    features: ['Water Connection', 'Electricity', 'Road Access', 'Clear Title'],
    createdAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    title: 'Commercial Land Near IT Hub',
    location: 'Electronic City, Bangalore',
    price: 3500000,
    plotSize: '5000 sq ft',
    type: 'commercial',
    availability: 'available',
    description: 'Strategic commercial plot near major IT companies. Excellent investment opportunity with high appreciation potential.',
    images: ['https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg'],
    ownerId: 'sample2',
    ownerName: 'Priya Sharma',
    ownerPhone: '+91 87654 32109',
    ownerEmail: 'priya@email.com',
    features: ['Corner Plot', 'Wide Road', 'Commercial Zone', 'Metro Connectivity'],
    createdAt: '2024-01-14T15:30:00Z'
  },
  {
    id: '3',
    title: 'Fertile Agricultural Land',
    location: 'Mysore Highway, Karnataka',
    price: 800000,
    plotSize: '2 acres',
    type: 'agricultural',
    availability: 'available',
    description: 'Fertile agricultural land with water facility. Ideal for organic farming or investment purposes.',
    images: ['https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg'],
    ownerId: 'sample3',
    ownerName: 'Suresh Reddy',
    ownerPhone: '+91 76543 21098',
    ownerEmail: 'suresh@email.com',
    features: ['Bore Well', 'Fertile Soil', 'Irrigation', 'Road Access'],
    createdAt: '2024-01-13T09:15:00Z'
  },
  {
    id: '4',
    title: 'Premium Villa Plot in Whitefield',
    location: 'Whitefield, Bangalore',
    price: 2200000,
    plotSize: '3600 sq ft',
    type: 'residential',
    availability: 'available',
    description: 'Spacious residential plot in premium locality. Close to schools, hospitals, and shopping centers.',
    images: ['https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg'],
    ownerId: 'sample4',
    ownerName: 'Anita Desai',
    ownerPhone: '+91 65432 10987',
    ownerEmail: 'anita@email.com',
    features: ['Gated Community', 'Park Facing', 'Premium Location', 'All Amenities'],
    createdAt: '2024-01-12T14:20:00Z'
  },
  {
    id: '5',
    title: 'Industrial Plot in KIADB',
    location: 'KIADB, Tumkur',
    price: 5000000,
    plotSize: '1 acre',
    type: 'commercial',
    availability: 'available',
    description: 'KIADB approved industrial plot with all necessary clearances. Perfect for manufacturing setup.',
    images: ['https://apollo.olx.in/v1/files/mktnl6e5q5v92-IN/image'],
    ownerId: 'sample5',
    ownerName: 'Mahesh Patel',
    ownerPhone: '+91 54321 09876',
    ownerEmail: 'mahesh@email.com',
    features: ['KIADB Approved', 'Industrial Zone', 'Power Supply', 'Transportation'],
    createdAt: '2024-01-11T11:45:00Z'
  },
  {
    id: '6',
    title: 'Scenic Plot Near Lake',
    location: 'Yelahanka, Bangalore',
    price: 1800000,
    plotSize: '3000 sq ft',
    type: 'residential',
    availability: 'available',
    description: 'Beautiful residential plot overlooking the lake. Serene environment perfect for peaceful living.',
    images: ['https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg'],
    ownerId: 'sample6',
    ownerName: 'Kavitha Nair',
    ownerPhone: '+91 43210 98765',
    ownerEmail: 'kavitha@email.com',
    features: ['Lake View', 'Peaceful Location', 'Good Connectivity', 'Appreciation Potential'],
    createdAt: '2024-01-10T16:30:00Z'
  },
  {
    id: '7',
    title: 'Highway Facing Commercial Plot',
    location: 'Hosur Road, Bangalore',
    price: 4200000,
    plotSize: '6000 sq ft',
    type: 'commercial',
    availability: 'available',
    description: 'Prime commercial plot facing main highway. High visibility location ideal for showrooms or offices.',
    images: ['https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg'],
    ownerId: 'sample7',
    ownerName: 'Ravi Krishnan',
    ownerPhone: '+91 32109 87654',
    ownerEmail: 'ravi@email.com',
    features: ['Highway Facing', 'High Visibility', 'Commercial Zone', 'Investment Grade'],
    createdAt: '2024-01-09T13:15:00Z'
  },
  {
    id: '8',
    title: 'Organic Farm Land',
    location: 'Doddaballapur, Bangalore Rural',
    price: 1200000,
    plotSize: '3 acres',
    type: 'agricultural',
    availability: 'available',
    description: 'Perfect for organic farming with natural water source. Chemical-free soil ideal for sustainable agriculture.',
    images: ['https://images.pexels.com/photos/533988/pexels-photo-533988.jpeg'],
    ownerId: 'sample8',
    ownerName: 'Lakshmi Rao',
    ownerPhone: '+91 21098 76543',
    ownerEmail: 'lakshmi@email.com',
    features: ['Natural Water', 'Organic Soil', 'Peaceful Location', 'Good Access'],
    createdAt: '2024-01-08T10:00:00Z'
  },
  {
    id: '9',
    title: 'Premium Residential Plot in Sarjapur',
    location: 'Sarjapur Road, Bangalore',
    price: 2800000,
    plotSize: '4000 sq ft',
    type: 'residential',
    availability: 'available',
    description: 'Premium residential plot in rapidly developing area. Close to IT corridor and excellent infrastructure.',
    images: ['https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg'],
    ownerId: 'sample9',
    ownerName: 'Vikram Singh',
    ownerPhone: '+91 10987 65432',
    ownerEmail: 'vikram@email.com',
    features: ['IT Corridor', 'Premium Locality', 'Infrastructure Ready', 'Investment Potential'],
    createdAt: '2024-01-07T17:45:00Z'
  },
  {
    id: '10',
    title: 'Corner Plot in Residential Layout',
    location: 'JP Nagar, Bangalore',
    price: 1900000,
    plotSize: '2800 sq ft',
    type: 'residential',
    availability: 'available',
    description: 'Corner residential plot in established layout. Excellent for villa construction with ample space.',
    images: ['https://imagecdn.99acres.com/media1/29239/11/584791631M-1744113558211.webp'],
    ownerId: 'sample10',
    ownerName: 'Deepa Menon',
    ownerPhone: '+91 09876 54321',
    ownerEmail: 'deepa@email.com',
    features: ['Corner Plot', 'Established Area', 'Good Infrastructure', 'Villa Plot'],
    createdAt: '2024-01-06T12:30:00Z'
  }
];

export const ListingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [listings, setListings] = useState<LandListing[]>([]);

  useEffect(() => {
    const savedListings = localStorage.getItem('bit2brick_listings');
    if (savedListings) {
      setListings(JSON.parse(savedListings));
    } else {
      setListings(sampleListings);
      localStorage.setItem('bit2brick_listings', JSON.stringify(sampleListings));
    }
  }, []);

  const addListing = (listingData: Omit<LandListing, 'id' | 'createdAt'>) => {
    const newListing: LandListing = {
      ...listingData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };

    const updatedListings = [newListing, ...listings];
    setListings(updatedListings);
    localStorage.setItem('bit2brick_listings', JSON.stringify(updatedListings));
  };

  const updateListing = (id: string, updates: Partial<LandListing>) => {
    const updatedListings = listings.map(listing =>
      listing.id === id ? { ...listing, ...updates } : listing
    );
    setListings(updatedListings);
    localStorage.setItem('bit2brick_listings', JSON.stringify(updatedListings));
  };

  const deleteListing = (id: string) => {
    const updatedListings = listings.filter(listing => listing.id !== id);
    setListings(updatedListings);
    localStorage.setItem('bit2brick_listings', JSON.stringify(updatedListings));
  };

  const getListingById = (id: string) => {
    return listings.find(listing => listing.id === id);
  };

  const getUserListings = (userId: string) => {
    return listings.filter(listing => listing.ownerId === userId);
  };

  return (
    <ListingsContext.Provider value={{
      listings,
      addListing,
      updateListing,
      deleteListing,
      getListingById,
      getUserListings
    }}>
      {children}
    </ListingsContext.Provider>
  );
};

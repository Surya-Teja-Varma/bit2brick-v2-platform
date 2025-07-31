import React, { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { ListingsProvider } from './contexts/ListingsContext';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AuthPage from './components/AuthPage';
import ListingsPage from './components/ListingsPage';
import ListingDetailsPage from './components/ListingDetailsPage';
import DashboardPage from './components/DashboardPage';
import SchedulePage from './components/SchedulePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import { LandListing } from './contexts/ListingsContext';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedListing, setSelectedListing] = useState<LandListing | null>(null);
  const [scheduleData, setScheduleData] = useState<any>(null);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'auth':
        return <AuthPage setCurrentPage={setCurrentPage} />;
      case 'listings':
        return (
          <ListingsPage 
            setCurrentPage={setCurrentPage}
            setSelectedListing={setSelectedListing}
          />
        );
      case 'listing-details':
        return selectedListing ? (
          <ListingDetailsPage 
            listing={selectedListing}
            setCurrentPage={setCurrentPage}
            setScheduleData={setScheduleData}
          />
        ) : (
          <HomePage setCurrentPage={setCurrentPage} />
        );
      case 'dashboard':
        return (
          <DashboardPage 
            setCurrentPage={setCurrentPage}
            setSelectedListing={setSelectedListing}
          />
        );
      case 'schedule':
        return scheduleData ? (
          <SchedulePage 
            scheduleData={scheduleData}
            setCurrentPage={setCurrentPage}
          />
        ) : (
          <HomePage setCurrentPage={setCurrentPage} />
        );
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <AuthProvider>
      <ListingsProvider>
        <div className="min-h-screen bg-stone-50">
          <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
          {renderPage()}
        </div>
      </ListingsProvider>
    </AuthProvider>
  );
}

export default App;
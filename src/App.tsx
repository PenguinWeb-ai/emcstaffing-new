import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import ReadyToWork from './components/ReadyToWork';
import RequestConsultant from './components/RequestConsultant';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import ImagePreloader from './components/ImagePreloader';
import { BookingModal } from './components/BookingModal';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <Router>
      <ImagePreloader />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ready-to-work" element={<ReadyToWork />} />
          <Route path="/request-consultant" element={<RequestConsultant />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
        </Routes>
      </Layout>

      {/* Floating Book Meeting Button */}
      <button
        onClick={() => setIsBookingOpen(!isBookingOpen)}
        className="book-meeting-button"
        aria-label={isBookingOpen ? 'Close booking window' : 'Book a meeting'}
      >
        <img 
          src="/calendar-light.png"
          alt="Calendar" 
          className="w-5 h-5"
        />
        <span>{isBookingOpen ? 'CLOSE WINDOW' : 'BOOK MEETING'}</span>
      </button>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </Router>
  );
}

export default App;
import React from 'react';
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

function App() {
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
    </Router>
  );
}

export default App;
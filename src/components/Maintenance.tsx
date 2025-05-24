import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Construction } from 'lucide-react';

function Maintenance() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-2xl">
        <Construction className="w-16 h-16 text-primary mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-secondary mb-4">Under Maintenance</h1>
        <p className="text-xl text-secondary mb-6">
          We're currently performing some maintenance to improve your experience.
        </p>
        <p className="text-lg text-gray-600">
          You will be automatically redirected to our home page in 10 seconds...
        </p>
        <div className="mt-8">
          <button
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-primary text-white hover:bg-highlight transition-colors duration-300 rounded-lg font-semibold"
          >
            Return to Home Page
          </button>
        </div>
      </div>
    </div>
  );
}

export default Maintenance;
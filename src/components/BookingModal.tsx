import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.onload = function() {
      (window as any).voiceflow.chat.load({
        verify: { projectID: '67ddd0398ef7fa02101b6dcb' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production',
        autostart: true,
        render: {
          mode: 'embedded',
          target: document.getElementById('voiceflow-container')
        }
      });
    };
    script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    document.body.appendChild(script);
  }, []); // Empty dependency array - load script only once

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={onClose}
          />
        )}
      </AnimatePresence>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
        className="fixed md:bottom-24 md:right-6 z-50 md:transform-none inset-0 md:inset-auto pointer-events-none"
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: isOpen ? 1 : 0.95, opacity: isOpen ? 1 : 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-white rounded-2xl shadow-xl md:w-[450px] md:h-[800px] w-full h-full border-2 border-gray-200 pointer-events-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-4 left-4 text-white hover:text-gray-300 transition-colors text-2xl font-bold z-10 w-8 h-8 rounded-full flex items-center justify-center"
            aria-label="Close modal"
          >
            ✕
          </button>
          <div id="voiceflow-container" className="w-full h-full rounded-2xl overflow-hidden" />
        </motion.div>
      </motion.div>
    </>
  );
}
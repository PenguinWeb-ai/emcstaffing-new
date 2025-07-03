import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  useEffect(() => {
    if (isOpen) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.onload = function() {
        (window as any).voiceflow.chat.load({
          verify: { projectID: '681f8dae97a9ce1e0ea9ba5a' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          autostart: true, // Auto-start the conversation
          voice: {
            url: "https://runtime-api.voiceflow.com"
          },
          render: {
            mode: 'embedded',
            target: document.getElementById('voiceflow-container')
          }
        });
      };
      script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed md:bottom-24 md:right-6 z-50 md:transform-none inset-0 md:inset-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-[var(--bg-primary)] rounded-[2rem] shadow-xl md:w-[450px] md:h-[800px] w-full h-full border-2 border-black"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-[var(--text-primary)] hover:opacity-70 transition-opacity text-2xl font-bold"
                aria-label="Close modal"
              >
                ✕
              </button>
              <div id="voiceflow-container" className="w-full h-full rounded-[2rem] overflow-hidden" />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
import { useState, useEffect } from 'react';

function VoiceflowChat() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.onload = function() {
        window.voiceflow.chat.load({
          verify: { projectID: '681f8dae97a9ce1e0ea9ba5a' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          autostart: true,
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
    <>
      {/* Meeting Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          zIndex: 99999,
          padding: '1rem 2rem',
          borderRadius: '9999px',
          background: 'linear-gradient(135deg, #ff1493 0%, #ff6b00 100%)',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontWeight: '600'
        }}
      >
        {isOpen ? 'CLOSE CHAT' : 'BOOK MEETING'}
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '6rem',
            right: '1.5rem',
            zIndex: 50,
            width: '450px',
            height: '800px',
            backgroundColor: 'white',
            borderRadius: '2rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            border: '2px solid black'
          }}
        >
          <button
            onClick={() => setIsOpen(false)}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer'
            }}
          >
            ✕
          </button>
          <div id="voiceflow-container" style={{ width: '100%', height: '100%', borderRadius: '2rem', overflow: 'hidden' }} />
        </div>
      )}
    </>
  );
}

export default VoiceflowChat;

import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-fade';

function Home() {
  const [key, setKey] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const heroImages = [
    '/hero2.webp',
    '/hero3.webp',
    '/hero4.webp',
    '/hero5.webp',
    '/hero6.webp',
    '/hero7.webp',
    '/hero8.webp',
    '/hero9.webp'
  ];

  useEffect(() => {
    let loadedCount = 0;
    const totalImages = heroImages.length;

    const loadImage = (src: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          setLoadingProgress((loadedCount / totalImages) * 100);
          resolve(img);
        };
        img.onerror = reject;
        img.src = src;
      });
    };

    const loadAllImages = async () => {
      try {
        await Promise.all(heroImages.map(loadImage));
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error loading images:', error);
        setImagesLoaded(true);
      }
    };

    loadAllImages();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const preventContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    return false;
  };

  return (
    <>
      <section id="home" className="relative h-[70vh] sm:h-screen flex items-center justify-center" role="banner">
        {!imagesLoaded && (
          <div className="absolute inset-0 bg-secondary flex items-center justify-center">
            <div className="text-center">
              <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
              <p className="text-white text-lg">Loading images... {Math.round(loadingProgress)}%</p>
            </div>
          </div>
        )}
        
        {imagesLoaded && (
          <Swiper
            key={key}
            modules={[Autoplay, EffectFade]}
            effect="fade"
            speed={2000}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            fadeEffect={{
              crossFade: true
            }}
            loop={true}
            className="absolute inset-0 z-0"
            updateOnWindowResize={true}
            observer={true}
            observeParents={true}
            aria-label="Hero Image Slideshow"
          >
            {heroImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="absolute inset-0" style={{ backgroundColor: '#1a1a1a', opacity: 0.7 }}></div>
                <img 
                  src={image}
                  alt={`Emergency Response Scene ${index + 1}`}
                  width="1920"
                  height="1080"
                  className="w-full h-full object-cover"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                  onContextMenu={preventContextMenu}
                  draggable="false"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
            <span className="block mb-2">Your 24/7 Emergency</span>
            <span className="block">Management Consultant needs in</span>
            <div className="mt-2">
              <TypeAnimation
                sequence={[
                  'Individual Assistance',
                  3000,
                  'FEMA Public Assistance / 406',
                  3000,
                  'Disaster Recovery Reform Act (DRRA) 1206',
                  3000,
                  'Hazard Mitigation Grants Program',
                  3000,
                  'Mitigation Planning',
                  3000,
                  '',
                  100,
                ]}
                wrapper="span"
                speed={50}
                style={{ color: '#d5242d' }}
                repeat={Infinity}
                cursor={true}
              />
            </div>
          </h1>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
            <Link 
              to="/ready-to-work#lets-get-started"
              className="px-12 py-4 bg-[#8a122d] text-white hover:bg-highlight transition-colors duration-300 rounded-lg font-semibold text-lg"
              aria-label="Find Work - Apply for emergency management positions"
            >
              APPLY NOW
            </Link>
            <Link 
              to="/request-consultant#submit-request"
              className="px-12 py-4 bg-[#8a122d] text-white hover:bg-highlight transition-colors duration-300 rounded-lg font-semibold text-lg"
              aria-label="Hire Talent - Request emergency management consultants"
            >
              REQUEST TALENT
            </Link>
          </div>
        </div>
      </section>

      <section id="applicants" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-5xl font-bold text-secondary mb-6">Providing Staff Augmentation When and Where You Need It</h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>
              <p className="text-xl text-secondary mb-8">
              EMC Staffing is your nationwide resource resolution with emergency management professionals within 24-72 hours of your request.
              </p>
              <Link 
                to="/request-consultant#submit-request"
                className="px-12 py-4 bg-[#8a122d] text-white hover:bg-highlight transition-colors duration-300 rounded-lg font-semibold text-lg"
              >
                REQUEST TALENT
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="/rapid-staffing.webp" 
                alt="Emergency Management Professional" 
                width="800"
                height="533"
                className="rounded-lg shadow-xl w-full h-auto"
                loading="lazy"
                decoding="async"
                onContextMenu={preventContextMenu}
                draggable="false"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="organizations" className="py-20 bg-[#DBDBDB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/front lines.webp" 
                alt="Emergency Response Team" 
                width="800"
                height="533"
                className="rounded-lg shadow-xl w-full h-auto"
                loading="lazy"
                decoding="async"
                onContextMenu={preventContextMenu}
                draggable="false"
              />
            </div>
            <div>
              <h2 className="text-5xl font-bold text-secondary mb-6">Join the Front Line of Response and Recovery</h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>
              <p className="text-xl text-secondary mb-8">
              EMC provides full and part time positions to independent consultants with in-person, hybrid and virtual positions supporting State, Local government, Private Non-Profit (PNP), Educators and Consulting firms.
              </p>
              <Link 
                to="/ready-to-work#lets-get-started"
                className="px-12 py-4 bg-primary text-white hover:bg-highlight transition-colors duration-300 rounded-lg font-semibold text-lg"
              >
                APPLY NOW
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{ backgroundColor: '#1a1a1a', opacity: 0.7 }}></div>
          <img 
            src="/impact.webp"
            alt="Emergency Response Background" 
            width="1920"
            height="1080"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            onContextMenu={preventContextMenu}
            draggable="false"
          />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-12 max-w-4xl mx-auto">
            Join our network of emergency management professionals or find the perfect talent for your team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/ready-to-work#lets-get-started"
              className="px-12 py-4 bg-[#8a122d] text-white hover:bg-highlight transition-colors duration-300 rounded-lg font-semibold text-lg"
            >
              APPLY NOW
            </Link>
            <Link 
              to="/request-consultant#submit-request"
              className="px-12 py-4 bg-[#8a122d] text-white hover:bg-highlight transition-colors duration-300 rounded-lg font-semibold text-lg"
            >
              REQUEST TALENT
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
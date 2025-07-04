import { useState, useRef, useEffect } from 'react';

const projects = [
  { id: 1, title: 'Project One', description: 'Short description', image: '/img1.png' },
  { id: 2, title: 'Project Two', description: 'Another short desc', image: '/img2.png' },
  { id: 3, title: 'Project Three', description: 'More details', image: '/img3.png' },
  { id: 4, title: 'Project Four', description: 'Another one', image: '/img4.png' },
  { id: 5, title: 'Project Five', description: 'Last project', image: '/img5.png' },
];

const visibleCount = 3;
const cardWidth = 400;
const cardMargin = 16;
const carouselWidth = visibleCount * (cardWidth + cardMargin);
const panelHeight = 400;
const arrowWidth = 80;

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(visibleCount);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const slides = [
    ...projects.slice(-visibleCount),
    ...projects,
    ...projects.slice(0, visibleCount),
  ];
  const totalSlides = slides.length;

  const handleTransitionEnd = () => {
    setIsAnimating(false);
    if (currentIndex >= projects.length + visibleCount) {
      const resetIndex = visibleCount;
      setCurrentIndex(resetIndex);
      if (containerRef.current) {
        containerRef.current.style.transition = 'none';
        containerRef.current.style.transform = `translateX(${-resetIndex * (cardWidth + cardMargin)}px)`;
      }
    } else if (currentIndex < visibleCount) {
      const resetIndex = projects.length + visibleCount - 1;
      setCurrentIndex(resetIndex);
      if (containerRef.current) {
        containerRef.current.style.transition = 'none';
        containerRef.current.style.transform = `translateX(${-resetIndex * (cardWidth + cardMargin)}px)`;
      }
    }
  };

  const slideTo = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    if (containerRef.current) {
      containerRef.current.style.transition = 'transform 0.5s ease-in-out';
      containerRef.current.style.transform = `translateX(${-index * (cardWidth + cardMargin)}px)`;
    }
  };

  const prev = () => slideTo(currentIndex - 1);
  const next = () => slideTo(currentIndex + 1);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transition = 'none';
      containerRef.current.style.transform = `translateX(${-currentIndex * (cardWidth + cardMargin)}px)`;
    }
  }, []);

  return (
    <div
      className="relative flex justify-center items-center"
      style={{ overflowX: 'visible', padding: '0 120px', height: `${panelHeight}px` }}
    >
      {/* Left arrow button */}
      <button
        onClick={prev}
        aria-label="Previous"
        style={{ left: `245px`, height: `${panelHeight}px`, width: `${arrowWidth}px`, backgroundColor: '#360b30' }}
        className="absolute top-0 text-white flex items-center justify-center z-50 rounded-l-lg"
      >
        <span style={{ fontSize: '4rem', lineHeight: 1 }}>
        &#8592;
        </span>
      </button>

      {/* Carousel container */}
      <div
        className="bg-black rounded-lg flex items-center overflow-hidden"
        style={{ width: `${carouselWidth}px`, height: `${panelHeight}px` }}
      >
        <div className="overflow-hidden w-full h-full">
          <div
            ref={containerRef}
            className="flex h-full"
            onTransitionEnd={handleTransitionEnd}
            style={{
              width: `${totalSlides * (cardWidth + cardMargin)}px`,
              willChange: 'transform',
            }}
          >
            {slides.map(({ id, title, description, image }, idx) => (
              <div
                key={`${id}-${idx}`}
                className="flex-shrink-0 bg-gray-800 rounded text-white p-6"
                style={{
                  width: `${cardWidth}px`,
                  marginRight: `${cardMargin}px`,
                  height: '100%',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <img
                  src={image}
                  alt={title}
                  className="rounded object-cover"
                  style={{ height: '70%', width: '100%' }}
                />
                <h3 className="mt-4 font-semibold text-xl">{title}</h3>
                <p className="mt-2 text-base flex-grow">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right arrow button */}
      <button
        onClick={next}
        aria-label="Next"
        style={{ right: '260px', height: `${panelHeight}px`, width: `${arrowWidth}px`, backgroundColor: '#360b30' }}
        className="absolute top-0 text-white flex items-center justify-center z-50 rounded-r-lg"
      >
        <span style={{ fontSize: '4rem', lineHeight: 1 }}>
        &#8594;
        </span>
      </button>
    </div>
  );
}

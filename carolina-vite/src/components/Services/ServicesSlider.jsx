import { useEffect, useRef, useState } from "react";
import "./Services.css";

const DURATION = 3000;

export default function ImageCycle({ items }) {
  const containerRef = useRef(null);
  const intervalId = useRef(null);
  const currentIndex = useRef(0);
  const [, setTick] = useState(0);
  console.log(items)

  useEffect(() => {
    const cycleElement = containerRef.current;
    if (!cycleElement) return;

    const elements = cycleElement.querySelectorAll("[data-image-cycle-item]");
    if (elements.length < 2) return;

    const isTwoItems = elements.length === 2;

    // Init state
    elements.forEach((item, i) =>
      item.setAttribute("data-image-cycle-item", i === 0 ? "active" : "not-active")
    );

    function cycleImages() {
      const prevIndex = currentIndex.current;
      currentIndex.current = (currentIndex.current + 1) % elements.length;
      setTick(tick => tick + 1);

      elements[prevIndex].setAttribute("data-image-cycle-item", isTwoItems ? "previous" : "previous");
      if (!isTwoItems) {
        setTimeout(() => {
          elements[prevIndex].setAttribute("data-image-cycle-item", "not-active");
        }, DURATION);
      }

      elements[currentIndex.current].setAttribute("data-image-cycle-item", "active");
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !intervalId.current) {
          intervalId.current = setInterval(cycleImages, DURATION);
        } else if (!entry.isIntersecting && intervalId.current) {
          clearInterval(intervalId.current);
          intervalId.current = null;
        }
      },
      { threshold: 0 }
    );

    observer.observe(cycleElement);

    if (!items || items.length === 0) {
      return <h2 className="text-center text-gray-500">Loading...</h2>;
    }

    return () => {
      observer.disconnect();
      clearInterval(intervalId.current);
    };
  }, []);
  
  if (!items || items.length === 0) {
    return null;
  }
  

  return (
    <div className="grid items-center gap-6 w-full h-100
    ">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-2">{items[currentIndex.current]?.title}</h2>
        <p className="text-base text-gray-600">{items[currentIndex.current]?.description}</p>
      </div>

      <div className="image-cycle-collection w-full md:w-2/3 h-full">
        <div className="image-cycle-collection__before" />
        <div
          className="image-cycle-collection__list w-full h-full"
          ref={containerRef}
          data-image-cycle
        >
          {items.map((item, i) => (
            
            <div
              key={i}
              data-image-cycle-item
              className="image-cycle-collection__img image-cycle-collection__item absolute inset-0 transition-opacity duration-1000 opacity-0"
            >
              <img src={item.src} loading="lazy" alt={`Image ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
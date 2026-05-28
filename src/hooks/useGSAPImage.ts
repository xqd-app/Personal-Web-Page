import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export function useGSAPImage() {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    gsap.fromTo(image,
      { scale: 1.05, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: 'power2.out' }
    );

    const handleMouseEnter = () => {
      gsap.to(image, { scale: 1.15, duration: 0.6, ease: 'power2.out' });
    };

    const handleMouseLeave = () => {
      gsap.to(image, { scale: 1, duration: 0.6, ease: 'power2.out' });
    };

    image.addEventListener('mouseenter', handleMouseEnter);
    image.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      image.removeEventListener('mouseenter', handleMouseEnter);
      image.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return imageRef;
}
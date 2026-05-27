import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const portraitImages = [
  { id: 1, src: '/data/living1/Personal 1/微信图片_20260526100449_118_244.jpg', alt: 'Portrait 1' },
  { id: 2, src: '/data/living1/Personal 1/微信图片_20260526093844_114_244.jpg', alt: 'Portrait 2' },
  { id: 3, src: '/data/living1/Personal 1/微信图片_20260526093844_113_244.jpg', alt: 'Portrait 3' },
  { id: 4, src: '/data/living1/Personal 1/微信图片_20260526102134_13_739.jpg', alt: 'Portrait 4' },
  { id: 5, src: '/data/living1/Personal 1/微信图片_20260526102147_14_739.jpg', alt: 'Portrait 5' },
];

export function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % portraitImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const goToPrevious = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + portraitImages.length) % portraitImages.length);
  };

  const goToNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % portraitImages.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlay(false);
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen pt-24">
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs uppercase tracking-widest text-gray-400 mb-4 block">About</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">天蝎座 / Scorpio</h1>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  我是天蝎座，骨子里带着独有的神秘感，对世间万物都抱有强烈的好奇心。生活里偏向宅家，是典型的社交牛杂症：独处时享受安静自在，沉浸在自己的小世界；面对熟人也能侃侃而谈，相处轻松自然。
                  <br />
                  <span className="text-gray-400 text-sm italic">As a Scorpio, I carry a unique sense of mystery deep within. I possess an intense curiosity about everything in the world. I'm somewhat of a homebody, a classic "social ambivert": I enjoy the quiet freedom of solitude, immersing myself in my own little world; yet I can also chat animatedly with close friends, making interactions relaxed and natural.</span>
                </p>
                <p>
                  我始终保持着学习的热情，尤其痴迷各类网络前沿技术，愿意花时间钻研摸索，不断给自己补充新知识、新技能。闲暇之余，摄影和视频剪辑是我最大的乐趣，我喜欢拿起镜头捕捉生活里的美好瞬间，再通过剪辑创作，把想法与画面融合在一起。
                  <br />
                  <span className="text-gray-400 text-sm italic">I maintain a relentless passion for learning, particularly fascinated by cutting-edge internet technologies. I'm willing to dedicate time to research and exploration, continuously equipping myself with new knowledge and skills. In my spare time, photography and video editing are my greatest pleasures. I love picking up the camera to capture beautiful moments in life, then blending ideas with visuals through editing.</span>
                </p>
                <p>
                  我有着清晰的自我认知和独立的思考能力，做事遵从内心的选择，从不盲目跟风、追逐潮流。比起迎合大众的喜好，我更愿意坚守自己的节奏，深耕热爱之事，按照自己的步调慢慢成长。
                  <br />
                  <span className="text-gray-400 text-sm italic">I have clear self-awareness and independent thinking. I follow my heart in making decisions and never blindly follow trends or chase popularity. Rather than catering to public tastes, I prefer staying true to my own rhythm, dedicating myself to what I love, and growing steadily at my own pace.</span>
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden shadow-xl">
                {portraitImages.map((image, index) => (
                  <img
                    key={image.id}
                    src={image.src}
                    alt={image.alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={goToPrevious}
                className="absolute top-1/2 -left-4 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} className="text-gray-800" />
              </button>
              <button
                onClick={goToNext}
                className="absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Next slide"
              >
                <ChevronRight size={20} className="text-gray-800" />
              </button>
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {portraitImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-purple-600 w-6'
                        : 'bg-white/50 hover:bg-white'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              <svg
                className="absolute -bottom-6 -left-6 w-16 h-16 text-purple-400 opacity-50"
                viewBox="0 0 100 100"
                fill="currentColor"
              >
                <path d="M50 10 C30 25, 15 45, 15 65 C15 80, 25 90, 50 90 C75 90, 85 80, 85 65 C85 45, 70 25, 50 10 Z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-gray-400 mb-4 block">What I Value</span>
            <h2 className="text-3xl md:text-4xl font-bold">Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg">
              <span className="text-4xl font-bold text-purple-600 mb-4 block">01</span>
              <h3 className="text-lg font-semibold mb-3">Craft</h3>
              <p className="text-gray-600 text-sm">
                Attention to detail and a commitment to quality in every pixel and line of code.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg">
              <span className="text-4xl font-bold text-purple-600 mb-4 block">02</span>
              <h3 className="text-lg font-semibold mb-3">Collaboration</h3>
              <p className="text-gray-600 text-sm">
                Building strong relationships with clients and teams to create meaningful work.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg">
              <span className="text-4xl font-bold text-purple-600 mb-4 block">03</span>
              <h3 className="text-lg font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600 text-sm">
                Pushing boundaries and exploring new ways to tell stories through design.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Plane, Book, Film, Code, Home, Star, Upload as UploadIcon } from 'lucide-react';

const lifeCategories = [
  { id: 'photos', name: '生活照片 / Photos', icon: Camera },
  { id: 'hobbies', name: '兴趣爱好 / Hobbies', icon: Star },
  { id: 'travel', name: '旅行足迹 / Travel', icon: Plane },
];

const photos = [
  { id: 1, src: '/data/living1/Scenery 1/Natural Scenery/微信图片_20260526100911_126_244.jpg', title: '自然风光 / Natural Scenery', description: '大自然的美丽风景 / The beautiful scenery of nature' },
  { id: 2, src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400', title: '城市夜景 / City Nightscape', description: '繁华都市的夜晚 / The nights of a bustling city' },
  { id: 3, src: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400', title: '美食时光 / Food Moments', description: '美味的食物 / Delicious food' },
  { id: 4, src: '/data/living1/Scenery 1/Daily Life/微信图片_20260526100935_132_244.jpg', title: '日常记录 / Daily Life', description: '记录生活的点滴 / Recording moments of life' },
  { id: 5, src: '/data/living1/animals/微信图片_20260526100927_129_244.jpg', title: '动物世界 / Animals', description: '可爱的动物朋友们 / Cute animal friends' },
  { id: 6, src: '/data/living1/Personal 1/微信图片_20260526102134_13_739.jpg', title: '个人照片 / Personal', description: '个人生活照片 / Personal life photos' },
];

const hobbies = [
  { name: '摄影 / Photography', icon: Camera, description: '用镜头捕捉生活里的美好瞬间，记录每一个值得珍藏的时刻 / Capturing beautiful moments in life with the lens, recording every precious moment worth cherishing' },
  { name: '视频剪辑 / Video Editing', icon: Film, description: '将想法与画面融合，创作独特的视觉作品 / Blending ideas with visuals, creating unique visual works' },
  { name: '技术探索 / Tech Exploration', icon: Code, description: '痴迷各类网络前沿技术，不断钻研摸索新知识 / Passionate about cutting-edge internet technologies, constantly exploring and learning new knowledge' },
  { name: '阅读 / Reading', icon: Book, description: '沉浸在书的世界里，探索知识的海洋 / Immersed in the world of books, exploring the ocean of knowledge' },
  { name: '宅家 / Homebody', icon: Home, description: '享受独处的时光，沉浸在自己的小世界 / Enjoying moments of solitude, immersed in my own little world' },
];

const travels = [
  { id: 1, place: '大理 / Dali', date: '2024年10月 / Oct 2024', description: '洱海风光，古城漫步 / Erhai Lake scenery, ancient town stroll' },
  { id: 2, place: '丽江 / Lijiang', date: '2024年8月 / Aug 2024', description: '玉龙雪山，束河古镇 / Jade Dragon Snow Mountain, Shuhe Ancient Town' },
  { id: 3, place: '香格里拉 / Shangri-La', date: '2023年7月 / Jul 2023', description: '高原美景，藏族文化 / Plateau scenery, Tibetan culture' },
  { id: 4, place: '西双版纳 / Xishuangbanna', date: '2023年4月 / Apr 2023', description: '热带雨林，民族风情 / Tropical rainforest, ethnic customs' },
];

export default function Life() {
  const [activeCategory, setActiveCategory] = useState('photos');

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-gray-400 mb-4 block">Life</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">我的生活 / My Life</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            天蝎座的我，骨子里带着独有的神秘感，对世间万物都抱有强烈的好奇心。喜欢宅家，享受独处的安静自在，也能在熟人面前侃侃而谈。痴迷各类网络前沿技术，热爱摄影和视频剪辑，遵从内心，坚守自己的节奏。 / As a Scorpio, I carry a unique sense of mystery in my bones and have a strong curiosity about everything in the world. I enjoy staying home, savoring the tranquility of solitude, and can chat freely with familiar people. Passionate about cutting-edge internet technologies, love photography and video editing, following my heart and maintaining my own pace.
          </p>
        </div>

        <div className="flex justify-center mb-12 space-x-4">
          {lifeCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Icon size={18} />
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            );
          })}
          <Link
            to="/upload"
            className="flex items-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full transition-all duration-300 shadow-lg shadow-green-200"
          >
            <UploadIcon size={18} />
            <span className="text-sm font-medium">上传图片</span>
          </Link>
        </div>

        {activeCategory === 'photos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <Link
                key={photo.id}
                to={`/photo/${photo.id}`}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold">{photo.title}</h3>
                    <p className="text-gray-300 text-sm">{photo.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {activeCategory === 'hobbies' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => {
              const Icon = hobby.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                    <Icon className="text-purple-600" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{hobby.name}</h3>
                  <p className="text-gray-600 text-sm">{hobby.description}</p>
                </div>
              );
            })}
          </div>
        )}

        {activeCategory === 'travel' && (
          <div className="space-y-6">
            {travels.map((travel) => (
              <div
                key={travel.id}
                className="flex items-start space-x-6 p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  {travel.place.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{travel.place}</h3>
                    <span className="text-sm text-gray-500">{travel.date}</span>
                  </div>
                  <p className="text-gray-600">{travel.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

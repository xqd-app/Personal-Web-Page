import { useState } from 'react';
import { Upload as UploadIcon, Lock, Eye, EyeOff, CheckCircle, XCircle, ImagePlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const UPLOAD_PASSWORD = '112200xqd';

const photoCategories = [
  { id: 'natural', name: '自然风光', description: 'Natural Scenery' },
  { id: 'daily', name: '日常记录', description: 'Daily Life' },
  { id: 'animals', name: '动物世界', description: 'Animals' },
  { id: 'personal', name: '个人照片', description: 'Personal' },
];

export default function Upload() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [uploadMessage, setUploadMessage] = useState('');

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === UPLOAD_PASSWORD) {
      setIsAuthenticated(true);
      setUploadStatus('idle');
      setUploadMessage('');
    } else {
      setUploadStatus('error');
      setUploadMessage('密码错误，请重试！');
    }
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedFiles([]);
    setUploadStatus('idle');
    setUploadMessage('');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const imageFiles = Array.from(files).filter(file => 
        file.type.startsWith('image/')
      );
      setSelectedFiles(imageFiles);
      setUploadStatus('idle');
      setUploadMessage('');
    }
  };

  const handleUpload = async () => {
    if (!selectedCategory || selectedFiles.length === 0) {
      setUploadStatus('error');
      setUploadMessage('请选择分类并添加图片！');
      return;
    }

    setUploadStatus('uploading');
    setUploadMessage('正在上传中...');

    await new Promise(resolve => setTimeout(resolve, 2000));

    setUploadStatus('success');
    setUploadMessage(`成功上传 ${selectedFiles.length} 张图片到「${photoCategories.find(c => c.id === selectedCategory)?.name}」！`);
    
    setSelectedFiles([]);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <Lock className="text-purple-600" size={32} />
              </div>
              <h1 className="text-2xl font-bold mb-2">图片上传</h1>
              <p className="text-gray-500">请输入密码以进行上传</p>
            </div>

            <form onSubmit={handlePasswordSubmit}>
              <div className="relative mb-6">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="请输入密码"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg"
              >
                验证密码
              </button>
            </form>

            {uploadStatus === 'error' && (
              <div className="mt-4 flex items-center space-x-2 text-red-500">
                <XCircle size={20} />
                <span>{uploadMessage}</span>
              </div>
            )}

            <div className="mt-8 text-center">
              <Link to="/life" className="text-gray-500 hover:text-purple-600 text-sm">
                返回生活页面
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-100">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <UploadIcon className="text-purple-600" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold">图片上传</h1>
                <p className="text-gray-500">选择分类并上传图片</p>
              </div>
            </div>
            <Link
              to="/life"
              className="px-4 py-2 text-gray-600 hover:text-purple-600 hover:bg-gray-100 rounded-lg transition-colors duration-300"
            >
              返回
            </Link>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">选择分类 / Select Category</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {photoCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                    selectedCategory === category.id
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="w-12 h-12 mx-auto mb-2 bg-gray-100 rounded-lg flex items-center justify-center">
                    <ImagePlus className="text-gray-500" size={24} />
                  </div>
                  <div className="font-medium">{category.name}</div>
                  <div className="text-xs text-gray-500">{category.description}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">选择图片 / Select Images</h3>
            <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-purple-500 hover:bg-purple-50 transition-all duration-300">
              <div className="flex flex-col items-center justify-center py-4">
                <UploadIcon className="w-10 h-10 text-gray-400 mb-2" />
                <p className="text-sm text-gray-600">点击或拖拽图片到此处上传</p>
                <p className="text-xs text-gray-400 mt-1">支持 JPG, PNG, GIF 格式</p>
              </div>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>

            {selectedFiles.length > 0 && (
              <div className="mt-4">
                <div className="flex flex-wrap gap-3">
                  {selectedFiles.map((file, index) => (
                    <div key={index} className="relative w-20 h-20 rounded-lg overflow-hidden">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => setSelectedFiles(selectedFiles.filter((_, i) => i !== index))}
                        className="absolute top-1 right-1 w-6 h-6 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white"
                      >
                        <XCircle size={14} />
                      </button>
                    </div>
                  ))}
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  已选择 {selectedFiles.length} 张图片
                </p>
              </div>
            )}
          </div>

          <button
            onClick={handleUpload}
            disabled={uploadStatus === 'uploading'}
            className={`w-full py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
              uploadStatus === 'uploading'
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-purple-600 hover:bg-purple-700 text-white hover:shadow-lg'
            }`}
          >
            {uploadStatus === 'uploading' ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>上传中...</span>
              </>
            ) : (
              <>
                <UploadIcon size={20} />
                <span>上传图片</span>
              </>
            )}
          </button>

          {uploadStatus === 'success' && (
            <div className="mt-4 flex items-center space-x-2 text-green-500">
              <CheckCircle size={20} />
              <span>{uploadMessage}</span>
            </div>
          )}

          {uploadStatus === 'error' && (
            <div className="mt-4 flex items-center space-x-2 text-red-500">
              <XCircle size={20} />
              <span>{uploadMessage}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import { FlaskConical, Sparkles, Rocket } from 'lucide-react';

function App() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center px-6 transition-colors duration-500">
        <section className="max-w-4xl text-center py-20">
          <div className="flex justify-center mb-6">
            <Rocket className="w-12 h-12 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
            ยินดีต้อนรับสู่เว็บไซต์ของเรา
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
            เราช่วยให้คุณเติบโตบนโลกออนไลน์ ด้วยเทคโนโลยีและการออกแบบที่ล้ำสมัย
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://github.com/dekthaiinchina">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition">
                <span className="inline-flex items-center gap-2">
                  <FlaskConical className="w-5 h-5" /> กิตฮับ
                </span>
              </button>
            </a>
            <a href="mailto:contactme@dekthaiinchina.com">
              <button className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-6 py-3 rounded-xl text-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                <span className="inline-flex items-center gap-2">
                  <Sparkles className="w-5 h-5" /> ติดต่อเรา
                </span>
              </button>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
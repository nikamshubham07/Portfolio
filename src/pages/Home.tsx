import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Hi, I'm <span className="text-blue-600">Shubham Nikam</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A passionate full-stack developer crafting beautiful and functional web experiences.
          Let's build something amazing together.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What I Do</h2>
          <ul className="space-y-3 text-gray-600">
            <li>✨ Frontend Development</li>
            <li>🛠️ Backend Development</li>
            <li>📱 Responsive Design</li>
            <li>🚀 Performance Optimization</li>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {['React', 'JavaScript', 'Node.js', 'DSA', 'SQL', 'HTML', 'CSS', 'Git'].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link
          to="/projects"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          View My Work
          <ArrowRight className="ml-2" size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Home;
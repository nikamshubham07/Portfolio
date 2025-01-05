import React from 'react';
import { Download } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
            alt="Profile"
            className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
          />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-xl text-gray-600">
           Hi, I'm Shubham, a B.Tech CSE student passionate about software development. Skilled in C++, JavaScript, and MERN stack, I build impactful projects like HealthConnect, a doctor booking app.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h2>
          <p className="text-gray-600 mb-6">
            From exploring the fundamentals of programming to building full-stack applications, my journey in Computer Science has been driven by curiosity and passion. Starting with C++ and JavaScript, I’ve progressed to mastering frameworks like React and working on real-world projects like HealthConnect, a healthcare app that simplifies doctor-patient interactions. Each step has strengthened my problem-solving skills and commitment to creating innovative solutions.
          </p>
          <p className="text-gray-600">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source
            projects, or sharing my knowledge through technical blog posts.
          </p>
        </div>

       

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Download Resume
            <Download size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
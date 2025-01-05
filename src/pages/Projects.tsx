import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Doctor Appointment Booking',
    description: 'HealthConnect is a user-friendly doctor booking app built with the MERN stack. It helps patients search for doctors, book appointments, and manage healthcare needs effortlessly. With features like reminders and secure messaging, it simplifies connecting with healthcare providers, putting control at your fingertips.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    tags: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://docscheduler.vercel.app/',
    githubUrl: 'https://github.com/nikamshubham07/MERN-STACK-PROJECT',
  },
  {
    title: 'E-Commerce Website   ',
    description: 'This is a web application for an e-commerce platform where users can browse products, add them to their cart, and complete purchases. The website is built with React and includes features for user registration, product management, and payment processing.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    tags: ['React', 'Tailwind', 'JavaScrpit'],
    liveUrl: 'https://shoes-store-ecomm.netlify.app/',
    githubUrl: 'https://github.com/nikamshubham07/e-commerce-website',
  },
  {
    title: 'Gemini Clone',
    description: 'Gemini Clone is an AI chatbot interface built using React and Tailwind CSS. It combines modern UI design with dynamic functionality to deliver an engaging user experience. This project showcases seamless integration of responsive layouts and interactive components for intelligent and conversational interactions.',
    image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1',
    tags: ['JavaScrpit', 'React', 'Express'],
    liveUrl: 'https://gemini-sn.netlify.app/',
    githubUrl: 'https://github.com/nikamshubham07/React-app-gemini',
  },
];

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">My Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.liveUrl}
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  <ExternalLink size={20} className="mr-1" />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  className="flex items-center text-gray-600 hover:text-gray-800"
                >
                  <Github size={20} className="mr-1" />
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
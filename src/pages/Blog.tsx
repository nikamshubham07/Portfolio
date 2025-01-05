import React from 'react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'Getting Started with React and TypeScript',
    excerpt: 'Learn how to set up a new React project with TypeScript and best practices for type safety.',
    date: '2024-03-15',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    category: 'React',
  },
  {
    title: 'Building Scalable APIs with Node.js',
    excerpt: 'Explore advanced techniques for creating robust and scalable backend services.',
    date: '2024-03-10',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',
    category: 'Backend',
  },
  {
    title: 'Modern CSS Techniques',
    excerpt: 'Discover the latest CSS features and how to use them effectively in your projects.',
    date: '2024-03-05',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2',
    category: 'CSS',
  },
];

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Blog</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm mb-4">
                {post.category}
              </span>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <div className="flex items-center mr-4">
                  <Calendar size={16} className="mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  {post.readTime}
                </div>
              </div>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                Read More
                <ChevronRight size={20} className="ml-1" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
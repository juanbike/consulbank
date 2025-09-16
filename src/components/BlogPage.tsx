import React from 'react';
import Blog from './blog';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center py-4">
        <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Volver al Inicio
        </Link>
      </div>
      <Blog />
    </div>
  );
};

export default BlogPage;

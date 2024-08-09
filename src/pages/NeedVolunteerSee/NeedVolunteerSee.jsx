import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NeedVolunteer = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/volunteerAll')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, []);

  return (
    <section className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map(post => (
          <div key={post._id} className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
            <img src={post.thumbnail} alt={post.title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Title: {post.title}</h3>
            <p className="text-gray-600 mb-2">:Category: {post.category}</p>
            <p className="text-gray-500 mb-4">Deadline: {new Date(post.deadline).toLocaleDateString()}</p>
            <Link to={`/volunteer-need-details/${post._id}`} className="text-blue-500 hover:underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NeedVolunteer;

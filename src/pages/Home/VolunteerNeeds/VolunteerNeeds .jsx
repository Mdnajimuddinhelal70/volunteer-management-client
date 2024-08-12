import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VolunteerNeeds = () => {
  const [posts, setPosts] = useState([]);

  //
  useEffect(() => {
    fetch("http://localhost:5000/volunteer")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <section className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post._id}
            className="bg-white border border-gray-200 rounded-lg shadow-md p-4"
          >
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-2">{post.category}</p>
            <p className="text-gray-500 mb-4">
              {new Date(post.deadline).toLocaleDateString()}
            </p>
            <button className="btn btn-ghost">
              <Link to={`/volunteer-need-details/${post._id}`}>
                View Details
              </Link>
            </button>
          </div>
        ))}
      </div>
      <button className="flex items-center justify-center btn btn-secondary mt-4 mx-auto">
        <Link to="/need-volunteer" className="block text-center">
          See All
        </Link>
      </button>
    </section>
  );
};

export default VolunteerNeeds;

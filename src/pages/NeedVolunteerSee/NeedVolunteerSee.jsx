import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NeedVolunteer = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Fetch all posts
    fetch(`http://localhost:5000/volunteerAll?search=${search}`)
      .then(res => res.json())
      .then(data => {
        setPosts(data);
      });
  }, [search]);

  const handleSearch = e => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearch(searchText)
  }

  return (
    <section className="p-8">
      <div className="mb-4 flex gap-4">
        {/* Search Box */}
        <form onSubmit={handleSearch}>
          <input type="text" name='search' id='search' className='p-1 mr-2 rounded-md bg-stone-200' />
          <input type="submit" value="Search" className='btn btn-sm'/>
        </form>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map(post => (
          <div key={post._id} className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
            <img src={post.thumbnail} alt={post.postTitle} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Title: {post.postTitle}</h3>
            <p className="text-gray-600 mb-2">Category: {post.category}</p>
            <p className="text-gray-500 mb-4">Deadline: {new Date(post.deadline).toLocaleDateString()}</p>
            <button className='btn btn-outline'>
              <Link to={`/volunteer-need-details/${post._id}`} className="">
                View Details
              </Link>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NeedVolunteer;

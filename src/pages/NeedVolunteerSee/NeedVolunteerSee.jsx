import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NeedVolunteer = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch all posts
    fetch('http://localhost:5000/volunteerAll')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setFilteredPosts(data);
        
        // Extract unique categories for the dropdown
        const uniqueCategories = [...new Set(data.map(post => post.category))];
        setCategories(uniqueCategories);
      });
  }, []);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    filterPosts(category, searchQuery);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterPosts(selectedCategory, query);
  };

  const filterPosts = (category, query) => {
    let filtered = posts;

    if (category) {
      filtered = filtered.filter(post => post.category === category);
    }

    if (query) {
      filtered = filtered.filter(post =>
        post.postTitle.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  };

  return (
    <section className="p-8">
      <div className="mb-4 flex gap-4">
        {/* Search Box */}
        <div className="w-full">
          <label htmlFor="search" className="block text-gray-700">Search:</label>
          <input
            type="text"
            id="search"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search by title"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        {/* Category Dropdown */}
        <div className="w-full">
          <label htmlFor="category" className="block text-gray-700">Filter by Category:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredPosts.map(post => (
          <div key={post._id} className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
            <img src={post.thumbnail} alt={post.postTitle} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">Title: {post.postTitle}</h3>
            <p className="text-gray-600 mb-2">Category: {post.category}</p>
            <p className="text-gray-500 mb-4">Deadline: {new Date(post.deadline).toLocaleDateString()}</p>
            <button className='btn btn-outline'>
              <Link to={`/volunteer-need-details/${post._id}`} className="text-blue-500 hover:underline">
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

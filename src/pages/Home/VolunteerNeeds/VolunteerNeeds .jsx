import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VolunteerNeeds = () => {
  const [needs, setNeeds] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/volunteer")
      .then((response) => response.json())
      .then((data) => setNeeds(data));
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Volunteer Needs Now</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {needs.map((need) => (
          <div
            key={need._id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={need.thumbnail}
              alt={need.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{need.title}</h3>
              <p className="text-sm text-gray-600">{need.category}</p>
              <p className="text-sm text-gray-600">Deadline: {need.deadline}</p>
              <a href={need.detailsUrl}></a>
              <Link
                to={`/volunteerDetails/${need._id}`}
                className="mt-2 inline-block bg-blue-500 text-white py-2 px-4 rounded"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteerNeeds;

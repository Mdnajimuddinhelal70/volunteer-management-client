import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VolunteerNeedDetails = () => {
  const { id } = useParams();
  const [volunteer, setVolunteer] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/voluntrDetails/${id}`)
      .then((res) => res.json())
      .then((data) => setVolunteer(data));
  }, [id]);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">{volunteer.title}</h2>
      <img
        src={volunteer.thumbnail}
        alt={volunteer.title}
        className="w-full h-48 object-cover mb-4"
      />
      <p className="text-sm text-gray-600 mb-2">
        Category: {volunteer.category}
      </p>
      <p className="text-sm text-gray-600 mb-2">
        Deadline: {volunteer.deadline}
      </p>
      <p className="text-sm text-gray-600 mb-2">Details: {volunteer.details}</p>
    </div>
  );
};

export default VolunteerNeedDetails;

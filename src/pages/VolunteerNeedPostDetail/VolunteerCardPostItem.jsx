const VolunteerCardPostItem = ({ post }) => {
  const {
    thumbnail,
    title,
    description,
    category,
    location,
    volunteersNeeded,
    deadline,
    organizerName,
    email,
  } = post;

  return (
    <div className="card bg-white w-72 shadow-xl rounded-lg overflow-hidden transition-transform hover:scale-105 mx-auto mt-10">
      <figure className="relative">
        <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full p-4">
          <h2 className="text-white text-lg font-bold">{title}</h2>
        </div>
      </figure>
      <div className="p-3">
        <p className="text-gray-700 mb-2">
          <strong>Description:</strong> {description}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Category:</strong> {category}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Location:</strong> {location}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Volunteers Needed:</strong> {volunteersNeeded}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Deadline:</strong> {new Date(deadline).toLocaleDateString()}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Organizer Name:</strong> {organizerName}
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Organizer Email:</strong> {email}
        </p>
        <div className="mt-4 text-right">
          <button className="btn btn-block bg-zinc-400 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded transition-transform hover:scale-105">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default VolunteerCardPostItem;

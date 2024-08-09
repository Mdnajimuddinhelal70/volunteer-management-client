const NeedPostItem = ({ item }) => {
    const {
      thumbnail,
      title,
      category,
      description,
      location,
      volunteersNeeded,
      deadline,
      organizerName,
      email
    } = item;
  
    return (
      <div className="card bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden w-80">
        <figure className="relative">
          <img
            src={thumbnail || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
            alt={title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
            <h2 className="text-white text-xl font-bold">{title}</h2>
          </div>
        </figure>
        <div className="p-4">
          <p className="text-sm text-gray-600 mb-2"><strong>Category:</strong> {category}</p>
          <p className="text-sm text-gray-600 mb-2"><strong>Location:</strong> {location}</p>
          <p className="text-sm text-gray-600 mb-2"><strong>Volunteers Needed:</strong> {volunteersNeeded}</p>
          <p className="text-sm text-gray-600 mb-2"><strong>Deadline:</strong> {deadline}</p>
          <p className="text-sm text-gray-600 mb-2"><strong>Organizer:</strong> {organizerName} ({email})</p>
          <p className="text-sm text-gray-700">{description}</p>
        </div>
      </div>
    );
  };
  
  export default NeedPostItem;
  
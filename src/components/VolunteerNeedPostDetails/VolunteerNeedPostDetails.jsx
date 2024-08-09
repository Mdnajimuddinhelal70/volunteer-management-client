import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";

const VolunteerNeedPostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]); // Use null for initial state
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/volunteer-need-details/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error("Error fetching post details:", error));
  }, [id]);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  if (!post) return <p>Loading...</p>;

  return (
    <section className="p-8">
      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
        <img
          src={post.thumbnail}
          alt={post.title}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-2">Category: {post.category}</p>
        <p className="text-gray-500 mb-4">Location: {post.location}</p>
        <p className="text-gray-500 mb-4">
          Deadline: {new Date(post.deadline).toLocaleDateString()}
        </p>
        <p className="text-gray-800 mb-4">{post.description}</p>
        <button
          onClick={openModal}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Be a Volunteer
        </button>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Volunteer Form"
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-50"
      >
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full h-[500px] overflow-auto">
          <h2 className="text-2xl font-bold mb-4">Volunteer Form</h2>
          <form className="grid grid-cols-2 gap-4 h-full overflow-auto">
            <div className="mb-4">
              <label className="block text-gray-700">Thumbnail</label>
              <input
                type="text"
                value={post.thumbnail}
                readOnly
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Post Title</label>
              <input
                type="text"
                value={post.title}
                readOnly
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div className="mb-4 col-span-2">
              <label className="block text-gray-700">Description</label>
              <textarea
                value={post.description}
                readOnly
                className="border border-gray-300 rounded-md p-2 w-full h-24"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Category</label>
              <input
                type="text"
                value={post.category}
                readOnly
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Location</label>
              <input
                type="text"
                value={post.location}
                readOnly
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                Number of Volunteers Needed
              </label>
              <input
                type="number"
                value={post.numberOfVolunteersNeeded}
                readOnly
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Deadline</label>
              <input
                type="text"
                value={new Date(post.deadline).toLocaleDateString()}
                readOnly
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Organizer Name</label>
              <input
                type="text"
                value={post.organizerName}
                readOnly
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Organizer Email</label>
              <input
                type="email"
                value={post.organizerEmail}
                readOnly
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Volunteer Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Volunteer Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div className="mb-4 col-span-2">
              <label className="block text-gray-700">Suggestion</label>
              <textarea
                placeholder="Your Suggestion"
                className="border border-gray-300 rounded-md p-2 w-full h-24"
              />
            </div>
            <div className="flex justify-end gap-4 col-span-2">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Request
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </section>
  );
};

export default VolunteerNeedPostDetails;

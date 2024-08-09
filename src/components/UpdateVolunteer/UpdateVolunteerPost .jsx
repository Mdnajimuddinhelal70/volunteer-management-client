import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams } from 'react-router-dom';

const UpdateVolunteerPost = () => {
  const { id } = useParams();
  const [thumbnail, setThumbnail] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [volunteersNeeded, setVolunteersNeeded] = useState('');
  const [deadline, setDeadline] = useState(new Date());

  useEffect(() => {
    fetch(`http://localhost:5000/volunteerPostData/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setThumbnail(data.thumbnail || '');
        setTitle(data.title || '');
        setDescription(data.description || '');
        setCategory(data.category || '');
        setLocation(data.location || '');
        setVolunteersNeeded(data.volunteersNeeded || '');
        setDeadline(new Date(data.deadline) || new Date());
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = {
      thumbnail,
      title,
      description,
      category,
      location,
      volunteersNeeded,
      deadline,
    };

    // Send update request to the server
    fetch(`http://localhost:5000/updateVolunteerPost/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPost),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: 'Success!',
            text: 'Volunteer post updated successfully',
            icon: 'success',
            confirmButtonText: 'Ok',
          });
        }
      });
  };

  return (
    <div className="mt-20 mx-auto max-w-3xl">
      <h1 className="text-3xl font-semibold text-center mb-10">Update Volunteer Post</h1>
      <hr />
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Thumbnail URL:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="thumbnail"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
              required
              placeholder="Thumbnail URL"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Title"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              placeholder="Description"
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Category:</label>
            <select
              id="category"
              name="category"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select a category</option>
              <option value="healthcare">Healthcare</option>
              <option value="education">Education</option>
              <option value="social-service">Social Service</option>
              <option value="animal-welfare">Animal Welfare</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Location:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              placeholder="Location"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Volunteers Needed:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="volunteersNeeded"
              value={volunteersNeeded}
              onChange={(e) => setVolunteersNeeded(e.target.value)}
              required
              placeholder="Number of Volunteers Needed"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Deadline:</label>
            <DatePicker
              selected={deadline}
              onChange={(date) => setDeadline(date)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="deadline"
              required
            />
          </div>
          <div className="md:col-span-2 text-center">
            <button
              className="bg-pink-500 hover:bg-fuchsia-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Update Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateVolunteerPost;

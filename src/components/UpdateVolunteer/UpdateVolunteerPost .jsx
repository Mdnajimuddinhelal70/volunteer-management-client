import { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../authentication/AuthProvider/AuthProvider";

const UpdateVolunteerPost = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [update, setUpdate] = useState({});
  const [deadline, setDeadline] = useState(new Date());

  useEffect(() => {
    fetch(`http://localhost:5000/volunteerPostUpdate/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data); // Log data to check the date value

        setUpdate(data);
        
        // Validate the date
        const fetchedDeadline = new Date(data.deadline);
        if (isNaN(fetchedDeadline.getTime())) {
          console.error("Invalid date:", data.deadline); // Log the invalid date
          setDeadline(new Date()); // Default to current date
        } else {
          setDeadline(fetchedDeadline);
        }
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPost = {
      thumbnail: e.target.thumbnail.value,
      postTitle: e.target.postTitle.value,
      description: e.target.description.value,
      category: e.target.category.value,
      location: e.target.location.value,
      noOfVolunteersNeeded: e.target.noOfVolunteersNeeded.value,
      deadline: deadline.toISOString(),
    };

    // Send update request to the server
    fetch(`http://localhost:5000/updateVolunteerPost/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Volunteer post updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="mt-20 mx-auto max-w-3xl">
      <h1 className="text-3xl font-semibold text-center mb-10">
        Update Volunteer Post
      </h1>
      <hr />
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Thumbnail URL:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="thumbnail"
              defaultValue={update.thumbnail}
              required
              placeholder="Thumbnail URL"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Title:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="postTitle"
              defaultValue={update.postTitle}
              required
              placeholder="Title"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="description"
              defaultValue={update.description}
              required
              placeholder="Description"
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Category:
            </label>
            <select
              id="category"
              name="category"
              defaultValue={update.category}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Location:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="location"
              defaultValue={update.location}
              required
              placeholder="Location"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Volunteers Needed:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="noOfVolunteersNeeded"
              defaultValue={update.noOfVolunteersNeeded}
              required
              placeholder="Number of Volunteers Needed"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Deadline:
            </label>
            <DatePicker
              selected={deadline}
              onChange={(date) => setDeadline(date)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Organizer Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="organizerName"
              value={user?.displayName}
              readOnly
              required
              placeholder="Organizer Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Organizer Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="organizerEmail"
              value={user?.email}
              readOnly
              required
              placeholder="Organizer Email"
            />
          </div>
          <div className="md:col-span-2 text-center">
            <button
              className="bg-pink-500 hover:bg-fuchsia-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateVolunteerPost;

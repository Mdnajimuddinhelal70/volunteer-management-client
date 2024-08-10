import { useContext, useState } from "react";
import Swal from "sweetalert2";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "./../../authentication/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";

const AddVolunteerPost = () => {
  const { user } = useContext(AuthContext) || {};
  const [deadline, setDeadline] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    const thumbnail = e.target.thumbnail.value;
    const postTitle = e.target.postTitle.value;
    const description = e.target.description.value;
    const category = e.target.category.value;
    const location = e.target.location.value;
    const noOfVolunteersNeeded = e.target.noOfVolunteersNeeded.value;
    const organizerName = user.displayName;
    const email = user.email;

    const newPost = {
      thumbnail,
      postTitle,
      description,
      category,
      location,
      noOfVolunteersNeeded,
      deadline,
      organizerName,
      email,
    };
    console.log(newPost);

    // Send data to server
    fetch("http://localhost:5000/formVolunteer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Volunteer post added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="mt-20 mx-auto max-w-3xl">
      <h1 className="text-3xl font-semibold text-center mb-10">
        Add Volunteer Post
      </h1>
      <hr />
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <Helmet>
          <title>Volunteer || Add Vulunteer</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Thumbnail URL:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="thumbnail"
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
              name="deadline"
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
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddVolunteerPost;

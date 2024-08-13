import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../authentication/AuthProvider/AuthProvider";
import { FaTrash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const VolunteerNeedPostDetail = () => {
  const [needPostDetail, setNeedPostDetail] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://volunteer-management-vert.vercel.app/myNeedPost/${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('access-token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setNeedPostDetail(data);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://volunteer-management-vert.vercel.app/deleteVolunteer/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              setNeedPostDetail((prevPosts) =>
                prevPosts.filter((post) => post._id !== id)
              );
              Swal.fire("Deleted!", "Your item has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="mb-10">
      <Helmet>
        <title>Volunteer || Mange Post</title>
      </Helmet>
      {needPostDetail.length === 0 ? (
        <p className="text-center mt-28 mb-28 text-gray-500">There is no data available here!</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {needPostDetail.map((post) => {
                const { _id, thumbnail, postTitle, category } = post;
                return (
                  <tr key={_id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img
                        src={thumbnail}
                        alt={postTitle}
                        className="w-12 h-12 object-cover"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {postTitle}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Link
                        to={`/updateVolunteer/${_id}`}
                        className="text-blue-600 hover:text-blue-900 mr-4"
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => handleDelete(_id)}
                        className="text-red-600 hover:text-red-900"
                      >
                       <FaTrash className="text-slate-700 mt-2" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default VolunteerNeedPostDetail;

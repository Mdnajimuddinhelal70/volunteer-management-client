import { useContext, useEffect, useState } from "react";
import NeedPostItem from "./NeedPostItem";
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2';
import { AuthContext } from './../../authentication/AuthProvider/AuthProvider';

const NeedPostDetails = () => {
  const [needPost, setNeedPost] = useState([]);
  const { user } = useContext(AuthContext);
  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch(`https://volunteer-management-vert.vercel.app/needPost/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setNeedPost(data);
      });
  }, [user?.email, control]);

  const handleRemoveItem = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        container: 'swal-container',
        popup: 'swal-popup',
        title: 'swal-title',
        content: 'swal-content',
        confirmButton: 'swal-confirm',
        cancelButton: 'swal-cancel'
      },
      width: '300px',
    });

    if (result.isConfirmed) {
      const response = await fetch(`https://volunteer-management-vert.vercel.app/deleteNeedPost/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      // console.log(data);
      if (data.deletedCount > 0) {
        setControl(!control);
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Volunteer || Request Post</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="container mx-auto grid gap-4 grid-cols-1 my-8">
        {needPost.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-2 text-left">Image</th>
                <th className="p-2 text-left">Title</th>
                <th className="p-2 text-left">Category</th>
                <th className="p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {needPost.map(item => (
                <NeedPostItem
                  key={item._id}
                  item={item}
                  handleDelete={() => handleRemoveItem(item._id)}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-500 my-20">No posts available. Please check back later.</p>
        )}
      </div>
    </>
  );
};

export default NeedPostDetails;

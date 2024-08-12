import { useEffect, useState } from "react";
import NeedPostItem from "./NeedPostItem";
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2';

const NeedPostDetails = () => {
  const [needPost, setNeedPost] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/needPost')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setNeedPost(data);
      });
  }, []);

  const handleRemoveItem = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#75552',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, cancel it!',
      customClass: {
        container: 'swal-container',
        popup: 'swal-popup',
        title: 'swal-title',
        content: 'swal-content',
        confirmButton: 'swal-confirm',
        cancelButton: 'swal-cancel'
      },
      width: '300px',  
    }).then((result) => {
      if (result.isConfirmed) {
        setNeedPost(prevPosts => prevPosts.filter(item => item._id !== id));
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Volunteer || Request Post</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="container mx-auto grid gap-4 grid-cols-1 my-8">
        {needPost.map(item => (
          <NeedPostItem
            key={item._id}
            item={item}
            onRemove={() => handleRemoveItem(item._id)}
          />
        ))}
      </div>
    </>
  );
};

export default NeedPostDetails;

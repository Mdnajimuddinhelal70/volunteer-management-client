import { useEffect, useState } from "react";
import NeedPostItem from "./NeedPostItem";
import { Helmet } from "react-helmet-async";




const NeedPostDetails = () => {
    const [needPost, setNeedPost] = useState([]);
  

    useEffect(() => {
        fetch('http://localhost:5000/needPost')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setNeedPost(data)
        })
    }, [])
    return (
       <>
         <Helmet>
            <title>Volunteer || Need Post</title>
            <link rel="canonical" href="https://www.tacobell.com/" />
          </Helmet>
        <div className="container mx-auto md:grid grid-cols-2 my-8">
            {
                needPost.map(item => <NeedPostItem
                key={item._id}
                item={item}              
                ></NeedPostItem>)
            }
        </div>
       </>
    );
};

export default NeedPostDetails;
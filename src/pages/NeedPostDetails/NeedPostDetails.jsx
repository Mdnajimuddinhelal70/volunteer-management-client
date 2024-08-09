import { useEffect, useState } from "react";
import NeedPostItem from "./NeedPostItem";




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
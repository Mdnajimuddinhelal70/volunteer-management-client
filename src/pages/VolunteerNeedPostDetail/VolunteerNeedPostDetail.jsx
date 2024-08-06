import { useEffect, useState } from "react";
import VolunteerCardPostItem from "./VolunteerCardPostItem";


    const VolunteerNeedPostDetail = () => {
        const [needPostDetail, setNeedPostDetail] = useState([]);

        useEffect(() => {
            fetch("http://localhost:5000/needPostDetail")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setNeedPostDetail(data)
            })
        }, [])
        return (
            <div className="md:grid grid-cols-3 gap-0 justify-between mb-10">
               {
                needPostDetail.map(post => <VolunteerCardPostItem
                key={post._id}
                post={post}
                ></VolunteerCardPostItem>)
               }
            </div>
        );
    };

    export default VolunteerNeedPostDetail;
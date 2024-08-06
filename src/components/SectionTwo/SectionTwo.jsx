import { useEffect, useState } from "react";
import AboutItem from "./AboutItem";


const SectionTwo = () => {
    const [aboute, setAbout] = useState([]);


    useEffect(() => {
        fetch('/about.json')
        .then(res => res.json())
        .then(data =>{
            setAbout(data)
        })
    }, [])
    return (
       <>
       <div className="text-center font-bold text-2xl">About Us!</div>
        <div className="container md:grid grid-cols-3 gap-6 mx-auto mb-8">
            {
                aboute.map(item => <AboutItem key={Math.random}
                 item={item}
                ></AboutItem>)
            }
        </div>
       </>
    );
};

export default SectionTwo;
import SectionOne from "../../../components/SectionOne/SectionOne";
import Banner from "../Banner/Banner";
import VolunteerNeeds from "../VolunteerNeeds/VolunteerNeeds ";


const Home = () => {
    return (
        <div>
        <div className="mt-7">
        <Banner></Banner>
        <VolunteerNeeds />
        <SectionOne />
        </div>
        </div>
    );
};

export default Home;
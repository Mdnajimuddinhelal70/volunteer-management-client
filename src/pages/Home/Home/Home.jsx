import { Helmet } from "react-helmet-async";
import SectionOne from "../../../components/SectionOne/SectionOne";
import SectionTwo from "../../../components/SectionTwo/SectionTwo";
import Banner from "../Banner/Banner";
import VolunteerNeeds from "../VolunteerNeeds/VolunteerNeeds ";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Volunteer || Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="mt-7">
        <Banner></Banner>
        <VolunteerNeeds />
        <SectionOne />
        <SectionTwo />
      </div>
    </div>
  );
};

export default Home;

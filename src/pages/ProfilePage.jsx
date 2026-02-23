import FirstSection from "../components/FirstSection";
import AnalisiProfile from "../components/AnalisiProfile";
import ServicesProfile from "../components/ServicesProfile";
import ActivityProfile from "../components/ActivityProfile";
import ExperiencesProfile from "../components/ExperiencesProfile";
import EducationProfile from "../components/EducationProfile";
import LicencesProfile from "../components/LicencesProfile";
import NavBar from "../components/NavBar";
import InfoProfile from "../components/InfoProfile";
import Skills from "../components/Skills";
import Organization from "../components/Organizations";
import Interest from "../components/Interest";
import MyFooter from "../components/MyFooter";
import RightSideBar from "../components/RightSideBar";
import { Row, Col } from "react-bootstrap";

const ProfilePage = () => {
  return (
    <>
      <header>
        <NavBar />
        {/* navbar giulia */}
      </header>
      <main className="container sfondo">
        <Row>
          <Col xs={12} md={9}>
            <FirstSection />
            <AnalisiProfile />
            <InfoProfile />
            <ServicesProfile />
            <ActivityProfile />
            {/* francesco */}
            <ExperiencesProfile />
            <EducationProfile />
            <LicencesProfile />
            <Skills />
            <Organization />
            <Interest />
            <MyFooter />
          </Col>
          <Col xs={12} md={3}>
            <RightSideBar /> {/*raffy */}
          </Col>
        </Row>
      </main>
    </>
  );
};
export default ProfilePage;

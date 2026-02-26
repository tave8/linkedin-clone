import FirstSection from "../components/FirstSection";
import AnalisiProfile from "../components/AnalisiProfile";
import ServicesProfile from "../components/ServicesProfile";
import ActivityProfile from "../components/ActivityProfile";
import ExperiencesProfile from "../components/ExperiencesProfile";
import EducationProfile from "../components/EducationProfile";
import LicencesProfile from "../components/LicencesProfile";
import InfoProfile from "../components/InfoProfile";
import Skills from "../components/Skills";
import Organization from "../components/Organizations";
import Interest from "../components/Interest";
import MyFooter from "../components/MyFooter";
import RightSideBar from "../components/RightSideBar";
import { Container, Row, Col } from "react-bootstrap";

import { useSelector } from "react-redux";

const ProfilePage = () => {
  const myProfile = useSelector((state) => state.myProfile);
  return (
    <>
      <main className="sfondo">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={9}>
              <FirstSection profile={myProfile} />
              <AnalisiProfile />
              <InfoProfile profile={myProfile} />
              <ServicesProfile />
              <ActivityProfile profile={myProfile} />
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
              <RightSideBar />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};
export default ProfilePage;

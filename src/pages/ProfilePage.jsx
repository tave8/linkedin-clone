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
import { Container, Row, Col, Button } from "react-bootstrap";
//import { useRef } from "react";
//import { useSelector } from "react-redux";
import { IoIosSend } from "react-icons/io";
import Accordion from "react-bootstrap/Accordion";
//import gsap from "gsap";
//import { useGSAP } from "@gsap/react";
//import { Draggable } from "gsap/Draggable";

const ProfilePage = () => {
  // const myProfile = useSelector((state) => state.myProfile);
  /* const accordionRef = useRef(null);
  const containerRef = useRef(null);
  const arrayMessage = ["come va?", "bene tu?", "ciao ragazzi!"];
  useGSAP(() => {
    const [draggable] = Draggable.create(accordionRef.current, {
      type: "x,y",
      bounds: containerRef.current,
    });
    return () => {
      draggable.kill();
    };
  });*/
  return (
    <>
      <main className="sfondo">
        <Container className="position-relative">
          <Row className="justify-content-center">
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
              <RightSideBar />
            </Col>
          </Row>
          {/*<div ref={containerRef} className="bg-transparent vh-100 w-100 position-fixed top-custom-accrodion"></div>
          <Accordion ref={accordionRef} className="position-fixed bottom-0 end-0 w-25 ">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Messaggi</Accordion.Header>
              <Accordion.Body>
                <div>
                  <p>Team 3 ChatGroup</p>
                  <hr />
                  {arrayMessage.map((e, i) => {
                    return <p key={i}>{e}</p>;
                  })}
                  <hr />
                  <div className="d-flex align-items-center gap-1">
                    <input type="text" placeholder="start messagging" />
                    <Button onClick={() => {}} className="px-2 py-1 d-flex align-items-center">
                      <IoIosSend />
                    </Button>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>*/}
        </Container>
      </main>
    </>
  );
};
export default ProfilePage;

import Offcanvas from "react-bootstrap/Offcanvas";
import MicroProfileNavbar from "./MicroProfileNavbar";
import { GearFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import ProfileAPI from "../assets/js/profile-api/ProfileAPI";
import { useDispatch, useSelector } from "react-redux";
import { setMyProfileApiUserAndLoadProfileGlobally } from "../redux/actions";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";

function ProfileOffcanvas({ show, handleClose }) {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);

  const handleConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentApiUser = useSelector((state) => state.myProfile.apiUser);
  const myProfilesData = useSelector((state) => state.myProfiles);
  const myProfilesExceptCurrent = myProfilesData.list.filter((myProfile) => myProfile._apiUser != currentApiUser);

  return (
    <>
      {showConfetti && <Confetti width={width} height={height} tweenDuration={3000} />}
      <Offcanvas show={show} onHide={handleClose} className="w-80" style={{ overflowY: "auto" }}>
        <div className="d-flex flex-row flex-nowrap justify-content-between align-items-start">
          <Link
            to="/Profile"
            onClick={() => {
              handleClose();
            }}
            style={{ textDecoration: "none", color: "black" }}
          >
            <MicroProfileNavbar />
          </Link>
          <Offcanvas.Header closeButton></Offcanvas.Header>
        </div>
        <div className="p-4 border-top border-bottom d-flex flex-column justify-content-start">
          <p>
            <span className="text-primary fw-bold">16</span> visitatori del profilo
          </p>
          <p>
            <span className="text-primary fw-bold">15</span> impression del post
          </p>
        </div>
        <Offcanvas.Body className="p-4">
          <div className="fs-5 fw-bold mb-3">
            <span className="me-2">
              <GearFill />
            </span>
            Impostazioni
          </div>

          <Card className="ps-3 mt-4 shadow-sm border-0">
            <Card.Body>
              <Card.Title className="fw-bold">I tuoi Account</Card.Title>

              {/* profiles except current profile */}
              {!myProfilesData.isLoading &&
                !myProfilesData.isError &&
                myProfilesExceptCurrent.map((profile) => {
                  return (
                    <div key={profile._id} className="d-flex align-items-center mb-3">
                      <img
                        src={profile.image || "https://i.pinimg.com/236x/59/32/68/59326808847921f7118ea8fd2d32fa0f.jpg"}
                        alt="profile"
                        className="rounded-circle me-2"
                        style={{ width: "50px", height: "50px", objectFit: "cover" }}
                      />
                      <div className="flex-grow-1">
                        <div className="fw-bold">
                          {profile.name} {profile.surname}
                        </div>
                        <div className="text-muted small">{profile.title}</div>
                        <Button
                          size="sm"
                          variant="link"
                          className="mt-1 border border-secondary text-muted text-decoration-none"
                          onClick={() => {
                            localStorage.setItem("activeUserId", profile._apiUser);
                            dispatch(setMyProfileApiUserAndLoadProfileGlobally(profile._apiUser));
                            handleConfetti();
                            handleClose();
                            navigate("/Profile");
                          }}
                        >
                          Collegati
                        </Button>
                      </div>
                    </div>
                  );
                })}

              {/* is loading */}
              {myProfilesData.isLoading && (
                <div>
                  <p>loading...</p>
                </div>
              )}

              {/* is error */}
              {myProfilesData.isError && (
                <div>
                  <p>error during my profiles fetch!</p>
                </div>
              )}
            </Card.Body>
          </Card>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ProfileOffcanvas;

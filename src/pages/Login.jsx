import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
//import { useState } from "react";
import ProfileAPI from "../assets/js/profile-api/ProfileAPI";
import { useDispatch, useSelector } from "react-redux";
import { setMyProfileApiUserAndLoadProfileGlobally } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentApiUser = useSelector((state) => state.myProfile.apiUser);
  const myProfilesData = useSelector((state) => state.myProfiles);
  const myProfilesExceptCurrent = myProfilesData.list.filter((myProfile) => myProfile._apiUser != currentApiUser);

  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <Col md={6} lg={5}>
        <div className="text-center mb-4">
          <img src="/LinkedIn_2021.svg.png" alt="Logo" height="40" className="mb-3" />
          <h1 className="fs-3 fw-bold">Accedi subito!</h1>
          <p className="text-muted">Seleziona uno dei tuoi account per iniziare</p>
        </div>

        <Card className="shadow-lg border-0 rounded-4">
          <Card.Body className="p-4" style={{ zIndex: "99999" }}>
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
                          console.log("bottone cliccato");
                          navigate("/");
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
      </Col>
    </Container>
  );
};

export default Login;

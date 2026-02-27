import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import { setMyProfileApiUserAndLoadProfileGlobally } from "./redux/actions"; // adjust the path to your actions file
//import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//import { Container, Row, Col, CardGroup, Card, Spinner, Alert, Button, Image, Form, ListGroup, Navbar, NavDropdown, Nav } from "react-bootstrap";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import MyNavbar from "./components/MyNavbar";
import JobsPage from "./pages/JobsPage";

// redux
import { useDispatch } from "react-redux";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "./pages/Login";
import LoadMyDefaultProfileComponent from "./components/helpers/LoadMyDefaultProfile";
import LoadMyProfilesComponent from "./components/helpers/LoadMyProfiles";

import ProfileAPIDemoComponent from "./components/demo/profile-api/ProfileAPI";
import PostAPIDemoComponent from "./components/demo/post-api/PostAPI";
import CommentAPIDemoComponent from "./components/demo/comment-api/CommentAPI";
import ImageAPIDemoComponent from "./components/demo/image-api/ImageAPI";

import ChangeProfileDemoComponent from "./components/demo/change-profile/ChangeProfile";

function AppContent() {
  const [isDemoMode, setIsDemoMode] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedUserId = localStorage.getItem("activeUserId");
    if (savedUserId) {
      dispatch(setMyProfileApiUserAndLoadProfileGlobally(savedUserId));
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      {/***** START: LOAD DEFAULT DATA ******/}
      {<LoadMyDefaultProfileComponent />}
      {<LoadMyProfilesComponent />}
      {/***** END: LOAD DEFAULT DATA ********/}

      {!isDemoMode && (
        <>
          <MyNavbar />

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/Profile" element={<ProfilePage />} />
            <Route path="/job" element={<JobsPage />} />
          </Routes>
        </>
      )}

      {isDemoMode && (
        <>
          {/****** START: DEMO components ******/}
          {/* <ProfileAPIDemoComponent /> */}
          <PostAPIDemoComponent />
          {/* <ChangeProfileDemoComponent /> */}
          {/* <CommentAPIDemoComponent /> */}
          {/* <ImageAPIDemoComponent /> */}
          {/****** END: DEMO components ********/}
        </>
      )}
    </BrowserRouter>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;

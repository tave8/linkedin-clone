import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//import { Container, Row, Col, CardGroup, Card, Spinner, Alert, Button, Image, Form, ListGroup, Navbar, NavDropdown, Nav } from "react-bootstrap";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import MyNavbar from "./components/DesktopNavbar";
// redux
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

//import ProfileAPIComponent from "./components/demo/profile-api/ProfileAPI";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Profile" element={<ProfilePage />} />
          {/* <ProfileAPIComponent /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

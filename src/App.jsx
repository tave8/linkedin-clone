import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { Container, Row, Col, CardGroup, Card, Spinner, Alert, Button, Image, Form, ListGroup, Navbar, NavDropdown, Nav } from "react-bootstrap"

// linkedin api demo components
import LinkedinAPIDemoGetMyProfile from "./components/linkedin-demo/GetMyProfile"
import LinkedinAPIDemoGetOneProfile from "./components/linkedin-demo/GetOneProfile"
import LinkedinAPIDemoGetProfiles from "./components/linkedin-demo/GetProfiles"
import LinkedinAPIDemoUpdateMyProfile from "./components/linkedin-demo/UpdateMyProfile"

// redux
import { store } from "./redux/store"
import { Provider } from "react-redux"

function App() {
  return (
    <Provider store={store}>
      <LinkedinAPIDemoGetMyProfile />
      {<LinkedinAPIDemoGetOneProfile /> }
      <LinkedinAPIDemoUpdateMyProfile />
      <LinkedinAPIDemoGetProfiles />
    </Provider>
  )
}

export default App

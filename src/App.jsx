import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { useState } from "react"

//import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//import { Container, Row, Col, CardGroup, Card, Spinner, Alert, Button, Image, Form, ListGroup, Navbar, NavDropdown, Nav } from "react-bootstrap";
import HomePage from "./pages/HomePage"
import ProfilePage from "./pages/ProfilePage"
import MyNavbar from "./components/MyNavbar"

// redux
import { store } from "./redux/store"
import { Provider } from "react-redux"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"

import LoadMyDefaultProfileComponent from "./components/helpers/LoadMyDefaultProfile"
//import CreatePostDesktop from "./components/CreatePostDesktop";
import ProfileAPIDemoComponent from "./components/demo/profile-api/ProfileAPI"
import PostAPIDemoComponent from "./components/demo/post-api/PostAPI"
import CommentAPIDemoComponent from "./components/demo/comment-api/CommentAPI"

import ChangeProfileDemoComponent from "./components/demo/change-profile/ChangeProfile"

function App() {
  const [isDemoMode, setIsDemoMode] = useState(false)

  return (
    <Provider store={store}>
      <BrowserRouter>
        {/***** START: LOAD DEFAULT DATA ******/}
        {<LoadMyDefaultProfileComponent />}
        {/***** END: LOAD DEFAULT DATA ********/}

        {!isDemoMode && (
          <>
            <MyNavbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Profile" element={<ProfilePage />} />
            </Routes>
          </>
        )}
      </BrowserRouter>

      {isDemoMode && (
        <>
          {/****** START: DEMO components ******/}
          {/* <ProfileAPIDemoComponent /> */}
          {/* <PostAPIDemoComponent /> */}
          {/* <ChangeProfileDemoComponent /> */}
          {/* <CommentAPIDemoComponent /> */}
          {/****** END: DEMO components ********/}
        </>
      )}
    </Provider>
  )
}

export default App

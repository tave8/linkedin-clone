import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { Container, Row, Col, CardGroup, Card, Spinner, Alert, Button, Image, Form, ListGroup, Navbar, NavDropdown, Nav } from "react-bootstrap"

// redux
import { store } from "./redux/store"
import { Provider } from "react-redux"

import LinkedinAPIDemo from "./components/linkedin-api-demo/LinkedinAPIDemo"

function App() {
  return (
    <Provider store={store}>
      <LinkedinAPIDemo />
    </Provider>
  )
}

export default App

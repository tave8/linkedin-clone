import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { Container, Row, Col, CardGroup, Card, Spinner, Alert, Button, Image, Form, ListGroup, Navbar, NavDropdown, Nav } from "react-bootstrap"
import LinkedinAPIDemo from "./components/LinkedinAPIDemo"

// redux
import { store } from "./redux/store"
import { Provider } from "react-redux"

function App() {
  return (
    <Provider store={store}>
      <LinkedinAPIDemo />
    </Provider>
  )
}

export default App

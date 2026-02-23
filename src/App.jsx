import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { Container, Row, Col, CardGroup, Card, Spinner, Alert, Button, Image, Form, ListGroup, Navbar, NavDropdown, Nav } from "react-bootstrap"
import LinkedinAPIDemo from "./assets/components/LinkedinAPIDemo"

function App() {
  return (
    <>
      <LinkedinAPIDemo />
    </>
  )
}

export default App

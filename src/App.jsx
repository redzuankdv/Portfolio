import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Col, Container, Image, Nav, Navbar, Row } from "react-bootstrap";
import { HashRouter, Route, Routes } from "react-router-dom";

function Layout() {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="px-5">
        <Navbar.Brand href="#" className="fw-bold">Redzuan Khalid</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link href="#about" className="text-white">About</Nav.Link>
            <Nav.Link href="#skills" className="text-white">Skills</Nav.Link>
            <Nav.Link href="#projects" className="text-white">Projects</Nav.Link>
            <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div style={{ minHeight: "100vh", backgroundColor: "#081b29", color: "#ededed", paddingTop: "100px" }}>
        <div id="about">
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <h1 className="fw-bold">Hi, I'm Redzuan Khalid</h1>
                <h4 className="text-info">FullStack Developer</h4>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
                  I’m Redzuan Khalid, a developer with a civil engineering background. I enjoy building things that make life easier and more connected. Driven by curiosity and purpose, I’m always learning and creating.
                </p>
              </Col>
              <Col md={6} className="text-center">
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "400px",
                    margin: "auto",
                    overflow: "hidden",
                    borderRadius: "16px",
                  }}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <Image
                    src="Me.jpg"
                    alt="Redzuan"
                    fluid
                    style={{
                      width: "100%",
                      height: "auto",
                      transition: "0.5s",
                      filter: hovered ? "brightness(40%)" : "brightness(100%)",
                    }}
                  />
                  {hovered && (
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#081b29",
                        opacity: 0.7,
                        transition: "0.5s",
                      }}
                    />
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div id="skills" className="my-5 py-5 border-top border-secondary">
          <Container>
            <h2 className="fw-bold mb-4">Skills</h2>
            <p>FrontEnd: HTML, CSS, Javascript, Reactjs, Bootstrap</p>
            <p>BackEnd: Node.js, Express.js</p>
            <p>Database: PostgreSQL, Firebase</p>
          </Container>
        </div>

        <div id="projects" className="my-5 py-5 border-top border-secondary">
          <Container>
            <h2 className="fw-bold mb-4">Project</h2>
            <h4 className="text-info">Parking Slot Reservation App</h4>
            <p>
              A full-stack web application that allows users to book parking slots, view availability, and manage their bookings in real time.
              Built with React, Bootstrap, Express, PostgreSQL, and Firebase.
            </p>
            <a
              href="https://parking-app-front-end.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-info mt-2"
            >
              View Project
            </a>
          </Container>
        </div>

        <div id="contact" className="my-5 py-5 border-top border-secondary" style={{ paddingBottom: "100px" }}>
          <Container>
            <h2 className="fw-bold mb-4">Contact</h2>
            <p>Email: redzuankdv97@gmail.com | Phone: 018-2810366 | GitHub: redzuankdv</p>
          </Container>
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <HashRouter basename="/redzuan-portfolio/">
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </HashRouter>
  )
}
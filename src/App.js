import React from 'react';
import { Container, Navbar, Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import './App.css';
import Nav from 'react-bootstrap/Nav'

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#">Department</Nav.Link>
            <Nav.Link href="#">More ways to shop</Nav.Link>
            <Nav.Link href="#">Help</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      <div className="bg-image">
        <Container>
          <h1>Instacart Replica</h1>
          <Form className="location-form">
            <Form.Group controlId="formLocation">
              <FormControl type="text" placeholder="Enter your address" />
              <Button variant="primary" type="submit">Search</Button>
            </Form.Group>
          </Form>
        </Container>
      </div>
      
      <Container>
        <h2>Browse Stores</h2>

        <Row>
          <Col md={4}>
            <img src="" alt="Store 1" />
          </Col>
          <Col md={4}>
            <img src="" alt="Store 2" />
          </Col>
          <Col md={4}>
            <img src="" alt="Store 3" />
          </Col>
          <Col md={4}>
            <img src="" alt="Store 4" />
          </Col>
          <Col md={4}>
            <img src="" alt="Store 5" />
          </Col>
          <Col md={4}>
            <img src="" alt="Store 6" />
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default App;








// import './App.css';

// import Container from 'react-bootstrap/Container'


// function App() {
//   return (
//     <div className="App">
//       <Navbar>
//         <img src="./instacart_logo.png" alt="logo" />
//         <button>Log in</button>
//         <button>Sign up</button>
//       </Navbar>
//       <Container>
//         Searchbar here
//       </Container>
//       <div></div>
//     </div>
//   );
// }

// export default App;







/*className="container"*/
/*className="content"*/



/*
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Button 1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Button 2
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Button 3
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="background-image">
        <div className="location-form">
          <h2>Enter Location</h2>
          <form>
            <input type="text" placeholder="Location" />
            <button type="submit">Search</button>
          </form>
        </div>
      </div> 
*/
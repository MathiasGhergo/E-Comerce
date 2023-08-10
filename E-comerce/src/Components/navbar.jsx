import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { CartWidget } from ".cartwidget";

function NavBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(`Buscando: ${searchTerm}`);
    setSearchTerm('');
  };

  return (
    <Navbar bg="light" expand="lg" className="px-5 py-3">
    <Navbar.Brand href="#home">Arnolds</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#link">Productos</Nav.Link>
        <Nav.Link href="#about">Acerca de</Nav.Link>
      </Nav>
      <CartWidget />
      <Form inline onSubmit={handleSearch}>
        <FormControl
          type="text"
          placeholder="Buscar productos"
          className="mr-sm-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="outline-success" type="submit">Buscar</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
  )
  }
export default NavBar;
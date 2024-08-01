import React from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Concesionaria Pepito</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                Ingreso
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to="/ingreso/vehiculo">Vehículo</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/ingreso/clientes">Clientes</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/ingreso/revisiones">Revisiones</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/">Regresar</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                Informes
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to="/informe/clientes">Clientes</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/informe/revisiones">Revisiones</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/">Regresar</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Link as={Link} to="/eliminar">Eliminación</Nav.Link>
                        <Nav.Link as={Link} to="/">Salir</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;

import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaCar, FaUserAlt, FaHome } from 'react-icons/fa';

const NavigationBar = () => {
    const [expanded, setExpanded] = useState(false); // Controla el colapso del menú

    return (
        <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded} className="p-3 shadow-sm">
            <Container>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <FaHome className="me-2" /> {/* Icono de casa */}
                    Titulo de Ejemplo
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={() => setExpanded(expanded ? false : true)} // Alternar el estado de colapso
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
                            <FaHome className="me-1" /> Inicio
                        </Nav.Link>
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/vehiculo" onClick={() => setExpanded(false)}>
                                <FaCar className="me-1" /> Vehículos
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/usuario" onClick={() => setExpanded(false)}>
                                <FaUserAlt className="me-1" /> Usuarios
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>
                            Sobre Nosotros
                        </Nav.Link>
                    </Nav>
                    {/* Sección de usuario o login */}
                    <Nav>
                        <Nav.Link as={Link} to="/perfil" className="text-light" onClick={() => setExpanded(false)}>
                            <FaUserAlt className="me-2" /> Mi Perfil
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;

import { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    // Estado para mostrar u ocultar la contraseña
    const [showPassword, setShowPassword] = useState(false);

    // Función para alternar el estado de la contraseña
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Container
            className="d-flex justify-content-center align-items-center min-vh-100"
            style={{ backgroundColor: '#edf2f7' }} // Fondo suave
        >
            <Row className="w-100">
                <Col md={6} lg={4} className="mx-auto">
                    <Card className="shadow-lg p-4 mb-5 bg-white rounded" style={{ borderRadius: '15px' }}>
                        <Card.Body>
                            {/* Título */}
                            <h2 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#2d3748' }}>
                                Nombre Sistema
                            </h2>
                            <p className="text-center text-muted mb-4">
                                Inicie sesión para acceder
                            </p>

                            {/* Formulario */}
                            <Form>
                                {/* Grupo Usuario */}
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Usuario</Form.Label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" style={{ backgroundColor: '#edf2f7', border: 'none' }}>
                                                <FaUser color="#a0aec0" />
                                            </span>
                                        </div>
                                        <Form.Control
                                            type="text"
                                            placeholder="Ingrese su usuario"
                                            style={{ borderLeft: 'none', borderRadius: '0 5px 5px 0' }}
                                        />
                                    </div>
                                </Form.Group>

                                {/* Grupo Contraseña */}
                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" style={{ backgroundColor: '#edf2f7', border: 'none' }}>
                                                <FaLock color="#a0aec0" />
                                            </span>
                                        </div>
                                        <Form.Control
                                            type={showPassword ? 'text' : 'password'}  // Cambia entre 'text' y 'password'
                                            placeholder="Ingrese su contraseña"
                                            style={{ borderLeft: 'none', borderRadius: '0 5px 5px 0' }}
                                        />
                                        <div className="input-group-append">
                                            <Button
                                                variant="outline-secondary"
                                                onClick={togglePasswordVisibility}
                                                style={{
                                                    borderRadius: '0 5px 5px 0',
                                                    backgroundColor: '#edf2f7',
                                                    border: 'none',
                                                    color: '#2d3748', // Mismo color del texto
                                                }}
                                            >
                                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                                            </Button>
                                        </div>
                                    </div>
                                </Form.Group>

                                {/* Botón de iniciar sesión */}
                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="w-100 py-2"
                                    style={{
                                        backgroundColor: '#2b6cb0',
                                        border: 'none',
                                        borderRadius: '5px',
                                        fontWeight: 'bold',
                                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                    }}
                                >
                                    Iniciar sesión
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;

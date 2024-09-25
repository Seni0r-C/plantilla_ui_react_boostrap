import { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Container
            className="d-flex justify-content-center align-items-center min-vh-100"
            style={{ backgroundColor: '#f7fafc' }} // Fondo más suave y claro
        >
            <Row className="w-100">
                <Col md={6} lg={4} className="mx-auto">
                    <Card className="shadow-lg p-4 mb-5 bg-white rounded" style={{ borderRadius: '15px' }}>
                        <Card.Body>
                            <h2 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#1a202c' }}>
                                Nombre Sistema
                            </h2>
                            <p className="text-center text-muted mb-4">
                                Inicie sesión para acceder
                            </p>

                            <Form>
                                {/* Grupo Usuario */}
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label style={{ color: '#4a5568' }}>Usuario</Form.Label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" style={{ backgroundColor: '#e2e8f0', border: 'none' }}>
                                                <FaUser color="#718096" />
                                            </span>
                                        </div>
                                        <Form.Control
                                            type="text"
                                            placeholder="Ingrese su usuario"
                                            style={{
                                                borderLeft: 'none',
                                                borderRadius: '0 5px 5px 0',
                                                backgroundColor: '#edf2f7',
                                                border: '1px solid #cbd5e0',
                                            }}
                                        />
                                    </div>
                                </Form.Group>

                                {/* Grupo Contraseña */}
                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Label style={{ color: '#4a5568' }}>Contraseña</Form.Label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" style={{ backgroundColor: '#e2e8f0', border: 'none' }}>
                                                <FaLock color="#718096" />
                                            </span>
                                        </div>
                                        <Form.Control
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="Ingrese su contraseña"
                                            style={{
                                                borderLeft: 'none',
                                                borderRadius: '0 5px 5px 0',
                                                backgroundColor: '#edf2f7',
                                                border: '1px solid #cbd5e0',
                                            }}
                                        />
                                        <div className="input-group-append">
                                            <Button
                                                variant="outline-secondary"
                                                onClick={togglePasswordVisibility}
                                                style={{
                                                    borderRadius: '0 5px 5px 0',
                                                    backgroundColor: '#edf2f7',
                                                    border: '1px solid #cbd5e0',
                                                    color: '#1a202c',
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
                                        backgroundColor: '#3182ce',
                                        border: 'none',
                                        borderRadius: '5px',
                                        fontWeight: 'bold',
                                        color: '#fff',
                                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                        transition: 'background-color 0.3s ease',
                                    }}
                                    onMouseOver={(e) => (e.target.style.backgroundColor = '#2c5282')}
                                    onMouseOut={(e) => (e.target.style.backgroundColor = '#3182ce')}
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

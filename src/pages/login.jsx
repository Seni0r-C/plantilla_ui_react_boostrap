import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const Login = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: '#f8f9fa' }}>
            <Row className="w-100">
                <Col md={6} lg={4} className="mx-auto">
                    <Card className="shadow-lg p-3 mb-5 bg-white rounded">
                        <Card.Body>
                            <h3 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#343a40' }}>Titulo del Sistema</h3>
                            <p className="text-center text-muted mb-4">Porfavor inicie sesion para continuar</p>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Usuario</Form.Label>
                                    <Form.Control type="Text" placeholder="Usuario" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="Password" placeholder="Contraseña" />
                                </Form.Group>

                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="w-100 py-2"
                                    style={{
                                        backgroundColor: '#007bff',
                                        border: 'none',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Iniciar sesion
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

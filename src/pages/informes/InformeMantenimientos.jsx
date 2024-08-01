import React, { useState } from 'react';
import axios from 'axios';
import { Container, Table, Alert, Spinner, Form, Button } from 'react-bootstrap';
import { API_URL } from '../../../Constantes';

const InformeMantenimientos = () => {
    const [matricula, setMatricula] = useState('');
    const [mantenimientos, setMantenimientos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [mensaje, setMensaje] = useState('');

    const handleInputChange = (e) => {
        setMatricula(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(API_URL + `/mantenimientos/${matricula}`);
            setMantenimientos(response.data);
            if (mantenimientos.length == 0)
                setMensaje('Datos no encontrados');

        } catch (error) {
            setError('Error fetching data');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <h1 className="mt-5">Historial de Mantenimientos</h1>
            <Form onSubmit={handleFormSubmit} className="mt-3">
                <Form.Group controlId="matricula">
                    <Form.Label>Matrícula del Vehículo</Form.Label>
                    <Form.Control
                        type="text"
                        value={matricula}
                        onChange={handleInputChange}
                        placeholder="Ingrese la matrícula del vehículo"
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                    Buscar Mantenimientos
                </Button>
            </Form>

            {loading && (
                <Container className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
                    <Spinner animation="border" />
                </Container>
            )}

            {error && (
                <Alert variant="danger" className="mt-3">
                    {error}
                </Alert>
            )}
            {(mantenimientos.length == 0) && <h4> {mensaje} </h4>}
            {mantenimientos.length > 0 && (
                <Table striped bordered hover className="mt-3">
                    <thead>
                        <tr>
                            <th>Código Revisión</th>
                            <th>Matrícula</th>
                            <th>Cambio de Filtro</th>
                            <th>Cambio de Aceite</th>
                            <th>Cambio de Frenos</th>
                            <th>Costo de Revisión</th>
                            <th>Fecha de Recepción</th>
                            <th>Fecha de Entrega</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mantenimientos.map((mantenimiento) => (
                            <tr key={mantenimiento.codigo_revision}>
                                <td>{mantenimiento.codigo_revision}</td>
                                <td>{mantenimiento.matricula}</td>
                                <td>{mantenimiento.cambio_filtro ? 'Sí' : 'No'}</td>
                                <td>{mantenimiento.cambio_aceite ? 'Sí' : 'No'}</td>
                                <td>{mantenimiento.cambio_frenos ? 'Sí' : 'No'}</td>
                                <td>{mantenimiento.costo_revision}</td>
                                <td>{new Date(mantenimiento.fecha_hora_recepcion).toLocaleString()}</td>
                                <td>{new Date(mantenimiento.fecha_hora_entrega).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </Container>
    );
};

export default InformeMantenimientos;

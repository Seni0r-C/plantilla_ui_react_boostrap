import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { API_URL } from '../../../Constantes';

const DeactivateMaintenanceForm = () => {
    const [matricula, setMatricula] = useState('');
    const [explicacion, setExplicacion] = useState('');
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`${API_URL}/revision/baja/${matricula}`, { explicacion });
            setMessage(response.data);
            setError(null);
        } catch (err) {
            setError(err.response?.data || 'Error en el servidor');
            setMessage(null);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="matricula">
                <Form.Label>Matrícula</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese la matrícula"
                    value={matricula}
                    onChange={(e) => setMatricula(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="explicacion">
                <Form.Label>Explicación de la Baja</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Ingrese la explicación de la baja"
                    value={explicacion}
                    onChange={(e) => setExplicacion(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Dar de Baja
            </Button>

            {message && <Alert variant="success" className="mt-3">{message}</Alert>}
            {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
        </Form>
    );
};

export default DeactivateMaintenanceForm;

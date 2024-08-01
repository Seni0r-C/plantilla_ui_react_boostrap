import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { API_URL } from '../../../../Constantes';


const RevisionForm = ({ selectedVehicles }) => {
    const [maintenance, setMaintenance] = useState({
        cambio_filtro: false,
        cambio_aceite: false,
        cambio_frenos: false,
        costo_revision: '',
        fecha_hora_recepcion: '',
        fecha_hora_entrega: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setMaintenance({
            ...maintenance,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async () => {
        try {
            for (const matricula of selectedVehicles) {
                await axios.post(API_URL + '/revisiones', { ...maintenance, matricula });
            }
            alert('Revisiones creadas con éxito');
        } catch (error) {
            alert('Error al crear revisiones');
        }
    };

    return (
        <Form>
            <Form.Check
                type="checkbox"
                label="Cambio de Filtro"
                name="cambio_filtro"
                onChange={handleChange}
            />
            <Form.Check
                type="checkbox"
                label="Cambio de Aceite"
                name="cambio_aceite"
                onChange={handleChange}
            />
            <Form.Check
                type="checkbox"
                label="Cambio de Frenos"
                name="cambio_frenos"
                onChange={handleChange}
            />
            <Form.Group controlId="costo_revision">
                <Form.Label>Costo de la Revisión</Form.Label>
                <Form.Control
                    type="text"
                    name="costo_revision"
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="fecha_hora_recepcion">
                <Form.Label>Fecha y Hora de Recepción</Form.Label>
                <Form.Control
                    type="datetime-local"
                    name="fecha_hora_recepcion"
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="fecha_hora_entrega">
                <Form.Label>Fecha y Hora de Entrega</Form.Label>
                <Form.Control
                    type="datetime-local"
                    name="fecha_hora_entrega"
                    onChange={handleChange}
                />
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit}>
                Crear Revisión
            </Button>
        </Form>
    );
};

export default RevisionForm;

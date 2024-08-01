import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { API_URL } from '../../../../Constantes';

const SearchForm = ({ setVehicles }) => {
    const [cedula, setCedula] = useState('');

    const handleSearch = async () => {
        try {
            const response = await axios.get(`${API_URL}/cochescomprados/${cedula}`);
            setVehicles(response.data);
        } catch (error) {
            alert('El Cliente no Tiene Vehículos');
        }
    };

    return (
        <Form>
            <Form.Group controlId="cedula">
                <Form.Label>Número de Cédula</Form.Label>
                <Form.Control
                    type="text"
                    value={cedula}
                    onChange={(e) => setCedula(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" onClick={handleSearch}>
                Buscar Vehículos
            </Button>
        </Form>
    );
};

export default SearchForm;

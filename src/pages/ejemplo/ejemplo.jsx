import { useState } from 'react';
import axios from 'axios';
import { Form, Button, Alert, Container, Row } from 'react-bootstrap';
import { API_URL } from '../../utils/Constantes';

const Carro = () => {
    const [matricula, setMatricula] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [color, setColor] = useState('');
    const [precioVenta, setPrecioVenta] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        if (!matricula || !marca || !modelo || !color || precioVenta === '') {
            setError('Todos los campos son obligatorios.');
            return;
        }

        if (precioVenta < 0) {
            setError('El precio no puede ser negativo.');
            return;
        }

        try {
            const response = await axios.post(API_URL + '/coches', {
                matricula,
                marca,
                modelo,
                color,
                precio_venta: precioVenta,
            });

            if (response.status === 200) {
                setMessage('Coche actualizado correctamente.');
            } else if (response.status === 201) {
                setMessage('Coche creado correctamente.');
            }
        } catch (err) {
            // setError(err.response?.data?.error || 'Error al guardar los datos.');
            setError(err);
        }
    };

    const handleCancel = () => {
        setMatricula('');
        setMarca('');
        setModelo('');
        setColor('');
        setPrecioVenta('');
    };

    return (
        <Container className="mt-5">
            <h2>Registrar/Actualizar Coche</h2>
            {message && <Alert variant="success">{message}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formMatricula">
                    <Form.Label>Matrícula</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese la matrícula"
                        value={matricula}
                        onChange={(e) => setMatricula(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formMarca" className="mt-3">
                    <Form.Label>Marca</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese la marca"
                        value={marca}
                        onChange={(e) => setMarca(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formModelo" className="mt-3">
                    <Form.Label>Modelo</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese el modelo"
                        value={modelo}
                        onChange={(e) => setModelo(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formColor" className="mt-3">
                    <Form.Label>Color</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingrese el color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formPrecioVenta" className="mt-3">
                    <Form.Label>Precio de Venta</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Ingrese el precio de venta"
                        value={precioVenta}
                        onChange={(e) => setPrecioVenta(e.target.value)}
                    />
                </Form.Group>
                <Row className="mt-4">
                    <Button variant="primary" type="submit" className="w-50">
                        Guardar
                    </Button>
                    <Button variant="secondary" onClick={handleCancel} className="w-50">
                        Cancelar
                    </Button>
                </Row>
            </Form>
        </Container>
    );
};

export default Carro;

import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { API_URL } from '../../../Constantes';

const Cliente = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [coches, setCoches] = useState([]);
    const [selectedCoches, setSelectedCoches] = useState([]);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const fetchCoches = async () => {
        try {
            const response = await axios.get(API_URL + '/coches');
            if (Array.isArray(response.data)) {
                setCoches(response.data);
            } else {
                setError('Error al cargar la lista de coches.');
            }
        } catch (err) {
            setError('Error al cargar la lista de coches.');
            console.error(err);
        }
    };
    useEffect(() => {
        fetchCoches();
    }, []);

    const onSubmit = async (data) => {
        setError('');
        setSuccess('');

        try {
            if (selectedCoches.length === 0) {
                setError('Debe seleccionar al menos un coche.');
                return;
            }

            // Mantén una variable para almacenar la última respuesta de cliente
            let clienteResponse;

            for (const cocheId of selectedCoches) {
                const fecha_compra = new Date().toISOString().split('T')[0];
                const coche = coches.find(c => c.modelo == cocheId);
                data = { ...data, fecha_compra, matricula: coche.matricula };
                if (coche) {
                    clienteResponse = await axios.post(API_URL + '/clientes', data);
                    // Maneja la respuesta aquí si es necesario
                    console.log(clienteResponse); // Debugging
                }
            }

            // Usa el último ID del cliente registrado
            if (clienteResponse) {
                setSuccess('Cliente y compras registrados exitosamente. ID: ' + clienteResponse.data.id2);
            } else {
                setError('No se recibió respuesta del servidor.');
            }
        } catch (err) {
            if (err.response && err.response.status === 400) {
                setError(err.response.data.error);
            } else {
                setError('Error al registrar el cliente y las compras.' + err);
            }
        }
        fetchCoches();
    };


    const handleCocheChange = (event) => {
        const options = event.target.options;
        const selected = [];
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                selected.push(options[i].value);
            }
        }
        setSelectedCoches(selected);
    };

    return (
        <Container>
            <h1>Registrar Cliente</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Número de Cédula</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese el número de cédula"
                                {...register('numero_cedula', { required: 'Este campo es requerido' })}
                            />
                            {errors.numero_cedula && <span>{errors.numero_cedula.message}</span>}
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Nombres</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese los nombres"
                                {...register('nombres', { required: 'Este campo es requerido' })}
                            />
                            {errors.nombres && <span>{errors.nombres.message}</span>}
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese los apellidos"
                                {...register('apellidos', { required: 'Este campo es requerido' })}
                            />
                            {errors.apellidos && <span>{errors.apellidos.message}</span>}
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese la dirección"
                                {...register('direccion', { required: 'Este campo es requerido' })}
                            />
                            {errors.direccion && <span>{errors.direccion.message}</span>}
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Ciudad</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese la ciudad"
                                {...register('ciudad', { required: 'Este campo es requerido' })}
                            />
                            {errors.ciudad && <span>{errors.ciudad.message}</span>}
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Número de Teléfono</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese el número de teléfono"
                                {...register('numero_telefono', { required: 'Este campo es requerido' })}
                            />
                            {errors.numero_telefono && <span>{errors.numero_telefono.message}</span>}
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Seleccionar Coches</Form.Label>
                            <Form.Control
                                as="select"
                                multiple
                                onChange={handleCocheChange}
                            >
                                {/* si esta vacio que se muestre un mensaje */}
                                {coches.length === 0 && <option value="">No hay coches disponibles</option>}
                                {coches.map(coche => (
                                    <option key={coche.id} value={coche.id}>
                                        {coche.modelo}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                {coches.length > 0 && <Button type="submit">Registrar Cliente</Button>}
            </Form>
        </Container>
    );
};

export default Cliente;

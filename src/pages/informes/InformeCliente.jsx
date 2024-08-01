// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Table } from 'react-bootstrap';
import { API_URL } from '../../../Constantes';

const InformeCliente = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const response = await axios.get(API_URL + '/clientes');
                if (Array.isArray(response.data)) {
                    setClientes(response.data);
                } else {
                    setError('Invalid response format');
                }
            } catch (error) {
                setError('Error fetching data');
            } finally {
                setLoading(false);
            }
        };
        fetchClientes();
    }, []);

    return (
        <Container>
            <h1 className="mt-5">Listado de Clientes</h1>
            <Table striped bordered hover className="mt-3">
                <thead>
                    <tr>
                        <th>Código Cliente</th>
                        <th>Número de Cédula</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Dirección</th>
                        <th>Ciudad</th>
                        <th>Número de Teléfono</th>
                        <th>Vehículos</th>
                        <th>Total de Vehículos</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.length === 0 ? (
                        <tr>
                            <td colSpan="9">
                                <h2 className="text-center">No hay CLientes en la base de datos</h2>
                            </td>
                        </tr>
                    ) : (
                        clientes.map((cliente) => (
                            <tr key={cliente.codigo_cliente}>
                                <td>{cliente.codigo_cliente}</td>
                                <td>{cliente.numero_cedula}</td>
                                <td>{cliente.nombres}</td>
                                <td>{cliente.apellidos}</td>
                                <td>{cliente.direccion}</td>
                                <td>{cliente.ciudad}</td>
                                <td>{cliente.numero_telefono}</td>
                                <td>{cliente.vehiculos}</td>
                                <td>{cliente.total_vehiculos}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        </Container>
    );
};

export default InformeCliente;

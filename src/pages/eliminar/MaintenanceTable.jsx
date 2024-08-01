import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { API_URL } from '../../../Constantes';

const MaintenanceTable = ({ matricula }) => {
    const [maintenances, setMaintenances] = useState([]);

    useEffect(() => {
        const fetchMaintenances = async () => {
            try {
                const response = await axios.get(API_URL + `/mantenimientos/${matricula}`);
                setMaintenances(response.data);
            } catch (error) {
                console.error('Error fetching maintenances:', error);
            }
        };

        fetchMaintenances();
    }, [matricula]);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Código Revisión</th>
                    <th>Matrícula</th>
                    <th>Cambio Filtro</th>
                    <th>Cambio Aceite</th>
                    <th>Cambio Frenos</th>
                    <th>Costo Revisión</th>
                    <th>Fecha Recepción</th>
                    <th>Fecha Entrega</th>
                </tr>
            </thead>
            <tbody>
                {maintenances.map((maintenance) => (
                    <tr key={maintenance.codigo_revision}>
                        <td>{maintenance.codigo_revision}</td>
                        <td>{maintenance.matricula}</td>
                        <td>{maintenance.cambio_filtro ? 'Sí' : 'No'}</td>
                        <td>{maintenance.cambio_aceite ? 'Sí' : 'No'}</td>
                        <td>{maintenance.cambio_frenos ? 'Sí' : 'No'}</td>
                        <td>{maintenance.costo_revision}</td>
                        <td>{maintenance.fecha_hora_recepcion}</td>
                        <td>{maintenance.fecha_hora_entrega}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default MaintenanceTable;

import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MaintenanceTable from './MaintenanceTable';
import DeactivateMaintenanceForm from './DeactivateMaintenanceForm';

const EliminarMantenimiento = () => {
    const [matricula, setMatricula] = useState('');

    return (
        <Container>
            <Row className="my-4">
                <Col>
                    <h1>Gestión de Mantenimientos</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <DeactivateMaintenanceForm />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h2>Mantenimientos</h2>
                    <input
                        type="text"
                        placeholder="Ingrese la matrícula"
                        value={matricula}
                        onChange={(e) => setMatricula(e.target.value)}
                    />
                    <MaintenanceTable matricula={matricula} />
                </Col>
            </Row>
        </Container>
    );
};

export default EliminarMantenimiento;

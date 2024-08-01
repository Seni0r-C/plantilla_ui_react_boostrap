import React, { useState } from 'react';
import { Form, ListGroup } from 'react-bootstrap';

const VehicleList = ({ vehicles, setSelectedVehicles }) => {
    const [selected, setSelected] = useState([]);

    const handleSelect = (matricula) => {
        const updatedSelected = selected.includes(matricula)
            ? selected.filter((item) => item !== matricula)
            : [...selected, matricula];
        setSelected(updatedSelected);
        setSelectedVehicles(updatedSelected);
    };

    return (
        <ListGroup>
            {vehicles.map((vehicle) => (
                <ListGroup.Item key={vehicle.matricula}>
                    <Form.Check
                        type="checkbox"
                        label={`${vehicle.marca} ${vehicle.modelo} (${vehicle.color})`}
                        onChange={() => handleSelect(vehicle.matricula)}
                        checked={selected.includes(vehicle.matricula)}
                    />
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default VehicleList;

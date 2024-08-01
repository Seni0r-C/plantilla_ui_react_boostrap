import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import SearchForm from './SearchForm';
import VehicleList from './VehicleList';
import MaintenanceForm from './MaintenanceForm';

const Revision = () => {
    const [vehicles, setVehicles] = useState([]);
    const [selectedVehicles, setSelectedVehicles] = useState([]);

    return (
        <Container>
            <h1>Revisión de Vehículos</h1>
            <SearchForm setVehicles={setVehicles} />
            {vehicles.length > 0 && (
                <>
                    <VehicleList vehicles={vehicles} setSelectedVehicles={setSelectedVehicles} />
                    {selectedVehicles.length > 0 && <MaintenanceForm selectedVehicles={selectedVehicles} />}
                </>
            )}
        </Container>
    );
};

export default Revision;

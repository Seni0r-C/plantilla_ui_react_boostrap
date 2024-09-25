import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './Navbar';

const Layout = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token'); // Asegúrate de que el nombre del token sea correcto
        if (!token) {
            // Si no hay token, redirige al usuario al login
            navigate('/login');
        }
    }, [navigate]);

    return (
        <>
            <NavigationBar />
            <main>{children}</main>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;

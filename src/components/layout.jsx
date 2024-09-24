import PropTypes from 'prop-types';
import NavigationBar from './Navbar';

const Layout = ({ children }) => {
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

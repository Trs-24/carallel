import styles from "./layout.module.css"
import Menu from "./menu/menu"
import Nav from "./nav/nav"

import PropTypes from 'prop-types';

const Layout = (props) => {
    const { children, title } = props

    return (
        <div className={styles.main}>
            <Nav title={title}/>
            <div className={styles.body}>
                {children}
            </div>
            <Menu/>
        </div>
    )
}

Layout.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default Layout
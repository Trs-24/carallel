import styles from "./nav.module.css"
import { IoSettingsOutline } from "react-icons/io5"
import { IoIosNotificationsOutline } from "react-icons/io"

import PropTypes from 'prop-types';

const Nav = (props) => {
    const { title } = props

    return (
        <div className={styles.main}>
            <IoSettingsOutline/>
            <h2>{title}</h2>
            <IoIosNotificationsOutline/>
        </div>
    )
}

Nav.propTypes = {
    title: PropTypes.string.isRequired
};

export default Nav
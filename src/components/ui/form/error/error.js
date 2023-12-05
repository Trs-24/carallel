import styles from "./error.module.css"

import PropTypes from 'prop-types';

const Error = (props) => {
    const { children } = props

    return (
        <span className={styles.main}>{children}</span>
    )
}

Error.propTypes = {
    children: PropTypes.node.isRequired
};

export default Error
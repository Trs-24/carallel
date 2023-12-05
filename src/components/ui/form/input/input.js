import Error from "../error/error"
import styles from "./input.module.css"
import PropTypes from 'prop-types';

const Input = (props) => {
    const {
        label,
        value,
        onChange,
        placeholder,
        type = "text",
        error,
    } = props

    return (
        <div className={styles.field}>
            <label>{label}</label>
            <input
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
            />
            {!!error && <Error>{error.message}</Error>}
        </div>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    error: PropTypes.object,
};

Input.defaultProps = {
    type: "text",
}

export default Input

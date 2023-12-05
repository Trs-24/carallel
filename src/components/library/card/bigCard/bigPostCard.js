import Link from "next/link"
import styles from "./bigPostCard.module.css"

import PropTypes from 'prop-types';

const BigPostCard = (props) => {
    const { item } = props

    const hrefLink = `/library/${item.id}`
    const bgImage = `url(${item.image})`

    return (
        <Link
            href={hrefLink}
            className={styles.main}
            style={{ backgroundImage: bgImage }}
        >
            <div className={styles.title}>
                <p>{item.title}</p>
            </div>
        </Link>
    )
}

BigPostCard.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    })
};

export default BigPostCard
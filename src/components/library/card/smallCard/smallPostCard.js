import Image from "next/image"
import Link from "next/link"
import styles from "./smallPostCard.module.css"

import PropTypes from 'prop-types';

const SmallPostCard = (props) => {
    const { item } = props

    const hrefLink = `/library/${item.id}`

    return (
        <Link
            href={hrefLink}
            className={styles.main}
        >
            <div className={styles.imageContainer}>
                <Image fill src={item.image} alt={item.title}/>
            </div>
            <p>{item.title}</p>
        </Link>
    )
}

SmallPostCard.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    })
};

export default SmallPostCard
import styles from "./postsScroller.module.css"
import PropTypes from 'prop-types';

const PostsScroller = (props) => {
    const { children } = props

    return (
        <div className={styles.main}>
            {children}
        </div>
    )
}

PostsScroller.propTypes = {
    children: PropTypes.node.isRequired
};

export default PostsScroller
"use client"

import { useState } from "react"
import BigPostCard from "./card/bigCard/bigPostCard"
import SmallPostCard from "./card/smallCard/smallPostCard"
import styles from "./library.module.css"
import PostsScroller from "./postsScroller/postsScroller"

import PropTypes from 'prop-types';

const filterPosts = (posts, postType, selectedFilter) => {
    const filterAll = "all"

    return posts.filter(el => el.type === postType && (selectedFilter !== filterAll ? el.tags.includes(selectedFilter) : true))
}

const Library = (props) => {
    const { posts } = props

    const filters = ["all", "shared", "bookmark", "read"]

    const [selectedFilter, setSelectedFilter] = useState(filters[0])

    return (
        <div className={styles.main}>
            <div className={styles.filters}>
                {filters.map(el => (
                    <button
                        key={el}
                        onClick={() => setSelectedFilter(el)}
                        className={`${styles.filter} ${selectedFilter === el ? styles.activeFilter : ""}`}
                    >
                        {el}
                    </button>
                ))}
            </div>
            <div className={styles.recomended}>
                <h2>Recomended</h2>
                <PostsScroller>
                    {filterPosts(posts, "high", selectedFilter).map(el => (
                        <BigPostCard item={el} key={el.id}/>
                    ))}
                </PostsScroller>
                <PostsScroller>
                    {filterPosts(posts, "low", selectedFilter).map(el => (
                        <SmallPostCard item={el} key={el.id}/>
                    ))}
                </PostsScroller>
            </div>
            <div className={styles.additional}>
                <h2>Additional Resources</h2>
                <div className={styles.divider}/>
            </div>
        </div>
    )
}

PostsScroller.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string,
        type: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
        shortDescription: PropTypes.string,
        videoYoutubeUrl: PropTypes.string,
        description: PropTypes.string
    }))
};

export default Library
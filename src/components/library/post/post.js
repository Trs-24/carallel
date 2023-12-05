import Image from "next/image"
import styles from "./post.module.css"
import { BiLike, BiDislike } from "react-icons/bi";
import BigPostCard from "../card/bigCard/bigPostCard";
import PostsScroller from "../postsScroller/postsScroller";
import AudioPlayer from "@/components/common/audioPlayer/audioPlayer";

import PropTypes from 'prop-types';

const Post = (props) => {
    const { post, related } = props

    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image fill src={post.image} alt={post.title}/>
                </div>
                <div className={styles.tags}>
                    {post.tags.map(el => (
                        <div key={el} className={styles.tag}>
                            <p key={el}>{el}</p>
                        </div>
                    ))}
                </div>
                <h1>{post.title}</h1>
                <p className={styles.text}>{post.shortDescription}</p>
                <iframe src={post.videoYoutubeUrl} frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <h3>You are a caregiver</h3>
                <AudioPlayer src={"/audio.mp3"}/>
                <p className={styles.text}>{post.description}</p>
                <div className={styles.unknownTags}>
                    <div className={styles.unknownTag}>New To Caregiving</div>
                    <div className={styles.unknownTag}>What To Expect</div>
                </div>
                <div className={styles.actions}>
                    <button>
                        <BiLike/>
                    </button>
                    <button>
                        <BiDislike/>
                    </button>
                </div>
            </div>
            <div className={styles.related}>
                <h4>Related Resources</h4>
                <PostsScroller>
                    {related.map(el => (
                        <BigPostCard item={el} key={el.id}/>
                    ))}
                </PostsScroller>
            </div>
        </div>
    )
}

export const postType = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    type: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    shortDescription: PropTypes.string,
    videoYoutubeUrl: PropTypes.string,
    description: PropTypes.string
}

Post.propTypes = {
    post: PropTypes.shape(postType),
    related: PropTypes.arrayOf(PropTypes.shape(postType))
};

export default Post
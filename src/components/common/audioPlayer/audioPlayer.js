"use client"

import React, { useState, useRef, useEffect } from "react"
import styles from "./audioPlayer.module.css"
import { FaPlay, FaPause } from "react-icons/fa";

import PropTypes from 'prop-types';

const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const AudioPlayer = ({ src }) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const audioRef = useRef()

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }, [isPlaying])

    useEffect(() => {
        const audio = audioRef.current

        const setAudioData = () => {
            setDuration(audio.duration)
        }

        const setAudioTime = () => {
            setCurrentTime(audio.currentTime)
        }

        audio.addEventListener("loadedmetadata", setAudioData)
        audio.addEventListener("timeupdate", setAudioTime)

        return () => {
            audio.removeEventListener("loadedmetadata", setAudioData)
            audio.removeEventListener("timeupdate", setAudioTime)
        }
    }, [])

    const onTimelineChange = (e) => {
        const time = e.target.value
        audioRef.current.currentTime = time
        setCurrentTime(time)
    }

    return (
        <div className={styles.main}>
            <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? <FaPause/> : <FaPlay/>}
            </button>
            <div>
                {formatTime(Math.floor(currentTime))} / {formatTime(Math.floor(duration))}
            </div>
            <audio ref={audioRef} src={src} preload="metadata" style={{ visibility: 'hidden' }}/>
            <input
                type="range"
                value={currentTime}
                max={duration}
                onChange={onTimelineChange}
            />
        </div>
    )
}

AudioPlayer.propTypes = {
    src: PropTypes.string.isRequired
};

export default AudioPlayer

import { useEffect, useState } from 'react';
import { Video } from './Video';
import { getVideos } from './VideoService';
import { VideoItem } from './VideoItem';

export const VideoList = () => {
    const [videos, setVideos] = useState<Video[]>([])

    const fetchVideos = async () => {
        const response = await getVideos();
        setVideos(response)
    }

    useEffect(() => {
        fetchVideos();
    }, [])

    return (
        <>
            {
                videos.map(video => (
                    <VideoItem key={video._id} video={video} />
                ))
            }
        </>
    )
}

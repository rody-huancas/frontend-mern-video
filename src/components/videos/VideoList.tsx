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
        <div className='grid grid-cols-4 gap-5 place-items-center'>
            {
                videos.map(video => (
                    <VideoItem key={video._id} video={video} />
                ))
            }
        </div>
    )
}

import { useEffect, useState } from 'react';
import { Video } from './Video';
import { getVideos } from './VideoService';
import { VideoItem } from './VideoItem';

export const VideoList = () => {
    const [videos, setVideos] = useState<Video[]>([])

    const fetchVideos = async () => {
        const response = await getVideos();

        const formatedVideos = response.map(video => {
            return {
                ...video,
                createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
                updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date(),
            }
        })
        .sort((a,b) => b.createdAt.getTime() - a.createdAt.getTime());

        setVideos(formatedVideos)
    }

    useEffect(() => {
        fetchVideos();
    }, [])

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 place-items-center'>
            {
                videos.map(video => (
                    <VideoItem key={video._id} video={video} fetchVideos={fetchVideos} />
                ))
            }
        </div>
    )
}

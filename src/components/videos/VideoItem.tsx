import ReactPlayer from "react-player"
import { Video } from "./Video"

interface Props {
    video: Video
}

export const VideoItem = ({ video }: Props) => {
    return (
        <div className="bg-gray-600  text-white flex flex-col items-center gap-4 p-4 rounded-xl shadow-xl overflow-hidden">
                <div className="p-2 w-[350px] h-[500px]">
                <div className="w-full flex justify-end">
                    <button className="bg-red-600 rounded-md w-7 h-7 flex items-center justify-center">x</button>
                </div>
                <h2 className="text-lg uppercase font-medium"> {video.title}</h2>
                <div className="w-full h-full flex justify-center mt-5">
                    <ReactPlayer url={video.url} className="object-cover" />
                </div>
                <p>{video.description}</p>
            </div>
        </div>
    )
}

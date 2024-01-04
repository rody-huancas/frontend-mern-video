import ReactPlayer from "react-player"
import {Link} from "react-router-dom"
import { Video } from "./Video"
import "./Video.item.css"

interface Props {
    video: Video
}

export const VideoItem = ({ video }: Props) => {
    return (
        <div className="bg-gray-600  text-white flex flex-col items-center gap-4 p-4 rounded-xl shadow-xl overflow-hidden video-card">
                <div className="p-2 w-[350px]">
                <div className="w-full flex items-center justify-between">
                    <Link className="bg-blue-600 py-1 px-3 rounded-lg font-medium" to={`/update/${video._id}`}>Editar</Link>
                    <button className="bg-red-600 rounded-md w-7 h-7 flex items-center justify-center">x</button>
                </div>
                <h2 className="text-lg uppercase font-medium text-center"> {video.title}</h2>
                <div className="w-full h-full flex justify-center mt-5">
                    <ReactPlayer url={video.url} className="object-cover" />
                </div>
                <p className="mt-5 text-center">{video.description}</p>
            </div>
        </div>
    )
}

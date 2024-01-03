import { Video } from "./Video"

interface Props {
    video: Video
}

export const VideoItem = ({ video }: Props) => {
    return (
        <div className="bg-gray-600 w-[250px] h-56 text-white flex flex-col items-center gap-4 p-4 rounded-xl shadow-xl">
            <div className="w-full flex justify-end">
                <button className="bg-red-600 rounded-md w-7 h-7 flex items-center justify-center">x</button>
            </div>
            <h2 className="text-lg uppercase font-medium"> {video.title}</h2>
            <p>{video.description}</p>
        </div>
    )
}

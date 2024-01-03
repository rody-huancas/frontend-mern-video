import { ChangeEvent, FormEvent, useState } from 'react';
import { Video } from './Video';
import * as videoService from './VideoService';

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export const VideoForm = () => {

    const [video, setVideo] = useState<Video>({title:"", description:"", url: "",})

    const handleInputChange = (e: InputChange)=>{
        setVideo({...video, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const response = await videoService.createVideo(video);
        console.log(response);
        
    }

    return (
        <div className="container mx-auto flex flex-col items-center justify-center gap-5">
            <h2 className="uppercase text-2xl font-bold text-gray-600">Nuevo Vídeo</h2>
            <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
                <input type="text" 
                    name="title"
                    placeholder="Ingrese el título del vídeo"
                    className="py-2 px-3 rounded-lg w-full"
                    autoFocus
                    value={video.title}
                    onChange={handleInputChange}
                />

                <input type="text" 
                    name="url"
                    placeholder="Ingrese el título del vídeo"
                    className="py-2 px-3 rounded-lg w-full"
                    value={video.url}
                    onChange={handleInputChange}
                />

                <textarea 
                    name="description" 
                    className="py-2 px-3 rounded-lg w-full min-h-[80px] max-h-[100px]" placeholder="Ingrese una descripción"
                    value={video.description}
                    onChange={handleInputChange}
                ></textarea>

                <button className="bg-gray-600 py-3 uppercase text-white font-medium">
                    Guardar
                </button>
            </form>
        </div>
    )
}

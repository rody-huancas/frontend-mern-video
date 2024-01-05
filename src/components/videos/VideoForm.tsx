import { ChangeEvent, FormEvent, useEffect, useState} from 'react';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { Video } from './Video';
import * as videoService from './VideoService';

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export const VideoForm = () => {
    const navigate = useNavigate();
    const params = useParams();

    const initialState = {
        title:"",
        description:"",
        url: ""
    }
    const [video, setVideo] = useState<Video>(initialState)

    const handleInputChange = (e: InputChange)=>{
        setVideo({...video, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        if(!params.id){
            await videoService.createVideo(video);
            toast.success("Nuevo vídeo agregado");
        }else{ 
            await videoService.updateVideo(params.id, video);
            toast.success("Vídeo actualizado correctamente");
        }
        navigate("/");
    }

    const getVideo = async (id: string) => {
        const response = await videoService.getVideo(id);
        const { title, description, url } = response;
        setVideo({ title, description, url})
    }

    useEffect(()=> {
        if (params.id) getVideo(params.id);
    }, [])

    return (
        <div className="container mx-auto flex flex-col items-center justify-center gap-5">
            <h2 className="uppercase text-2xl font-bold text-gray-600">
                {
                    params.id ? "Editar vídeo" : "Nuevo Vídeo"
                }
            </h2>
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
                    {
                        params.id ?  "Actualizar vídeo" : "Registrar vídeo"
                    }
                </button>
            </form>
        </div>
    )
}

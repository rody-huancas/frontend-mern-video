import axios from "axios";
import { Video } from "./Video";

const API = "http://localhost:3000";

export const getVideos = async () => {
    const { data } = await axios<Video[]>(`${API}/videos/`);
    return data;
}

export const getVideo = async (id: string) => {
    const { data } = await axios<Video>(`${API}/videos/${id}`);
    return data;
}

export const createVideo = async (video: Video) => {
    const { data } = await axios.post(`${API}/videos`, video);
    return data;
}

export const updateVideo = async (id: string, video: Video) => {
    const { data } = await axios.put(`${API}/videos/${id}`, video);
    return data;
}

export const deleteVideo = async (id: string) => {
    const { data } = await axios.delete<Video>(`${API}/videos/${id}`);
    return data;
}
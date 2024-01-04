import axios from "axios";
import { Video } from "./Video";

const API = "http://localhost:3000";

export const getVideos = async () => {
    const { data } = await axios<Video[]>(`${API}/videos/`);
    return data;
}

export const createVideo = async (video: Video) => {
    const { data } = await axios.post(`${API}/videos`, video);
    return data;
}
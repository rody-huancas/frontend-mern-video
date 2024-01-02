import axios from "axios";

export const getVideos = async () => {
    const { data } = await axios("http://localhost:3000/videos");
    return data;
}
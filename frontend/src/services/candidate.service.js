import axios from "axios";
import { url } from "../utils/url";

const getVehicles = async () => {
    try {
        const response = await axios.get(`${url}/vehicles`);
        return response.data;
    } catch(e) {
        console.log(e);
    }
}

export { getVehicles }
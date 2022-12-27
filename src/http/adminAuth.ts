import axios from "axios";
import { adminLoginUrl } from "./endpoints/endpoints";

export const httpAdminLogin = async (data: any) => {
    await axios.post(adminLoginUrl, data)
};
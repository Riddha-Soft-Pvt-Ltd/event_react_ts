import axios from "axios";
import { deleteVisitors, editVisitors, getVisitors, saveVisitors } from "./endpoints/endpoints";
import { customHeader } from "./facilities";

export const httpGetVisitors = async (skip: string | number, take: string | number) => {
    let visitors: [] = [];
    await axios.get(getVisitors(skip, take), { headers: customHeader }).then((response) => {
        console.log(response);
        if (response && response.data && response.data.success) {
            visitors = response.data.data.visitors;
            return;
        }
    }).catch((err) => { visitors = [] })
    return visitors;
};

export const httpSaveVisitors = (data: any) => axios.post(saveVisitors, data);
export const httpEditVisitors = (data: any) => axios.post(editVisitors, data);
export const httpDeleteVisitors = (data: any) => axios.delete(deleteVisitors);
import axios from "axios";
import { customHeader } from "../utils/token.utils";
import { deleteFacilities, editFacilities, getFacilities, saveFacilities } from "./endpoints/endpoints";

// export const customHeader = {
//     "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNlb0BnbWFpbC5jb20iLCJpYXQiOjE2NzIwNjgyMTh9.bNjdyXeK-sypehzObx0Yh_UdM0jfH-H88scpC733q54`
// }

export const httpGetFacilities = async () => {
    let facilities: never[] = []
    await axios.get(getFacilities, { headers: customHeader }).then((response) => {
        if (response && response.data && response.data.success) {
            facilities = response.data.data
            return;
        }
    }).catch((err) => { console.log(err) });
    return facilities;
};

export const httpSaveFacilities = async (data: any) => {
    let success = false;
    await axios.post(saveFacilities, data, { headers: customHeader }).then((response) => {
        if (response && response.data && response.data.success) {
            success = response.data.success;
        }
        return success = response.data.success;
    }).catch((err) => { success = false })
    return success;
};

export const httpEditFacilities = async(id: string,data:any) => {
    let success = false;
    await axios.post(editFacilities(id),data, { headers: customHeader }).then((response) => {
        if (response && response.data && response.data.success) {
            success = response.data.success;
        }
        return success = response.data.success;
    }).catch((err) => { success = false })
    return success;
}

export const httpDeleteFacilities = async (id: string) => {
    let success = false;
    await axios.delete(deleteFacilities(id), { headers: customHeader }).then((response) => {
        if (response && response.data && response.data.success) {
            success = response.data.success;
        }
        return success = response.data.success;
    }).catch((err) => { success = false })
    return success;
};
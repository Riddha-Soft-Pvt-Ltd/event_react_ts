import axios from "axios";
import { customHeader } from "../utils/token.utils";
import { checkin, checkout } from "./endpoints/endpoints";
export const httpVisitorCheckinCheckOut = (data: any) => axios.post("", data);

export const httpVisitorFacilitiesCheckIn = async (data: any) => {
  const response = await axios
    .post(checkin, data, { headers: customHeader() })
    .then((response) => {
      if (response && response.data && response.data.success) {
        return response.data;
      }
      return response.data;
    })
    .catch((err) => err);
  return response;
};

export const httpVisitorFacilitiesCheckOut = async (data: any) => {
  const response = await axios
    .post(checkout, data, { headers: customHeader() })
    .then((response) => {
      if (response && response.data && response.data.success) {
        return response.data;
      }
      return response.data;
    })
    .catch((err) => err);
  return response;
};

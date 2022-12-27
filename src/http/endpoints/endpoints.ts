export const BaseUrl = "http://192.168.20.61:8002/";


export const adminLoginUrl = BaseUrl + 'admin/auth/login';

export const saveVisitors = BaseUrl + '';
export const getVisitors = (skip: string | number, take: string | number) => BaseUrl + `visitor/get-all?skip=${skip}&take=${take}`;
export const deleteVisitors = BaseUrl + '';
export const editVisitors = BaseUrl + '';


export const saveFacilities = BaseUrl + 'facility/create';
export const getFacilities = BaseUrl + 'facility/get-all';
export const deleteFacilities = (id: string) => BaseUrl + `facility/delete?id=${id}`;
export const editFacilities = BaseUrl + '';


export const visitorsCheckInCheckOut = BaseUrl + "";
export const visitorsFacilityCheckInCheckOut = BaseUrl + "";

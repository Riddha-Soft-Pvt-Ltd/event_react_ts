// export const BaseUrl = "http://202.51.74.187:8002/";
// export const BaseUrl = "http://192.168.1.73:8002/";

export const BaseUrl = "http://192.168.20.103:8002/";

export const adminLoginUrl = BaseUrl + "admin/auth/login";

export const saveVisitors = BaseUrl + "visitor/register";
export const getVisitors = (skip: string | number, take: string | number) =>
  BaseUrl + `visitor/get-all?skip=${skip}&take=${take}`;
export const deleteVisitors = BaseUrl + "";
export const editVisitors = BaseUrl + "";
export const searchVisitors = (search: string) => BaseUrl + `visitor/search?name=${search}`;

export const saveFacilities = BaseUrl + "facility/create";
export const getFacilities = BaseUrl + "facility/get-all";
export const deleteFacilities = (id: string) =>
  BaseUrl + `facility/delete?id=${id}`;
export const editFacilities = (id: string) =>
  BaseUrl + `facility/update?id=${id}`;

export const visitorsCheckInCheckOut = BaseUrl + "";

export const checkin = BaseUrl + "gate-checkin/check-in";
export const checkout = BaseUrl + "gate-checkin/check-out";
export const visitorsFacilityCheckInCheckOut = BaseUrl + "facility-checkin/check-in";

// export const BaseUrl = "http://202.51.74.187:8002/";
// export const BaseUrl = "http://192.168.1.159:8002/";

export const BaseUrl = "http://localhost:8002/";

export const adminLoginUrl = BaseUrl + "admin/auth/login";

export const saveVisitors = BaseUrl + "visitor/register";
export const getVisitors = (skip: string | number, take: string | number) =>
  BaseUrl + `visitor/get-all?skip=${skip}&take=${take}`;
export const deleteVisitors = (id: string) =>
  BaseUrl + `visitor/delete?id=${id}`;
export const editVisitors = (id: string) => BaseUrl + `visitor/update?id=${id}`;
export const searchVisitors = (search: string) =>
  BaseUrl + `visitor/search?name=${search}`;

export const saveFacilities = BaseUrl + "facility/create";
export const getFacilities = BaseUrl + "facility/get-all";
export const deleteFacilities = (id: string) =>
  BaseUrl + `facility/delete?id=${id}`;
export const editFacilities = (id: string) =>
  BaseUrl + `facility/update?id=${id}`;

export const visitorsCheckInCheckOut = BaseUrl + "";

export const checkin = BaseUrl + "gate-checkin/check-in";
export const checkout = BaseUrl + "gate-checkin/check-out";
export const visitorsFacilityCheckInCheckOut =
  BaseUrl + "facility-checkin/check-in";
export const visitorsReport = (skip: any, take: any) =>
  BaseUrl + `visitor/report?skip=${skip}&take=${take}`;
export const singleVisitorReport = BaseUrl + "visitor/report-visitor?code=";

//packages
export const allPackages = BaseUrl + "package/all"
export const savePackage = BaseUrl + "package/add"
export const deletePackage = BaseUrl + "package/delete?id="
export const updatePackage = BaseUrl + "package/update?id="
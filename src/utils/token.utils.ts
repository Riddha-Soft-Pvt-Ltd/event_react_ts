import Cookies from 'universal-cookie';

export const getToken =()=>{
    const cookie = new Cookies();
    var token = cookie.get("token");
    return token;
}
var token = getToken();
export const customHeader = {
    "Authorization": `Bearer ${token}`
}
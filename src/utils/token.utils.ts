import Cookies from 'universal-cookie';

export const getToken = () => {
    const cookie = new Cookies();
    var token = cookie.get("token");
    return token;
}

export const clearToken = () => {
    const cookie = new Cookies();
    cookie.remove("token");
}

export const setToken = () => {

}

export var token = getToken();

export const customHeader = () => {
    let token = getToken();

    return {
        "Authorization": `Bearer ${token}`
    }
}
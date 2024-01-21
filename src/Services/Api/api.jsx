import axios from 'axios';

const base_URL = 'http://localhost:3001/api/v1/user';
const ERROR_MESSAGE = 'Error. Please try again  :';
const CONTENT_TYPE_JSON = 'application/json';

/**
 * get login datas
 *
 * @param data
 * @returns {{message, status, token: any}|{message, status}}
 */
export function getLoginData(data) {
    if(data) {
        //if no connection error
        if((data.status !== 400) && (data.status !== 401) && (data.status !== 500)) {
            const obj = {
                status: data.status,
                message: data.message,
                token: data.body.token
            }
            return obj
            //if connection error
        } else {
            const obj = {
                status: data.status,
                message: data.message,
            }
            console.log(obj.status,obj.message)
            return obj
        }
    }
}

/**
 * get login fetch datas
 *
 * @param data
 * @returns {{firstName: string, lastName: string, id: null, email: string, status: number}|{firstName: (string|Reducer<{value: string}>|*), lastName: (string|Reducer<{value: string}>|*), id, email: *, status}}
 */
export function getLoginFetchData(data) {
    if (data){
        if(data.body !== undefined) {
            const obj = {
                id: data.body.id,
                status: data.status,
                email: data.body.email,
                firstName: data.body.firstName,
                lastName: data.body.lastName
            }
            return obj
        } else {
            console.log(data.status, "unauthorized")
            const obj = {
                id: null,
                status: 0,
                email: "",
                firstName: "",
                lastName: ""
            }
            return obj
        }
    }
}

/**
 * save user profil datas
 *
 * @param data
 * @returns {{message, status}|{message: string, status: number}}
 */
export function saveUserProfilData(data) {
    if (data) {
        if((data.status !== 400) && (data.status !== 401) && (data.status !== 500)){
            const obj = {
                status: data.status,
                message: data.message,
            }
            return obj
        }
        else{
            const obj = {
                status: 404,
                message: "Error",
            }
            return obj
        }
    }
}

/**
 * get user login and send a POST request to the api (with user's email and password)
 *
 * @param credentials
 * @returns {Promise<{message, status, token: *}|{message, status}>}
 */
export const getLogin = async (credentials) => {
    const API_URL = `${base_URL}/login`;

    try {
        const response = await axios.post(API_URL, credentials, {
            headers: {
                "Content-Type": CONTENT_TYPE_JSON,
            },
        });

        return getLoginData(response.data);
    } catch (error) {
        console.error("API error:", error);
        throw new Error(ERROR_MESSAGE + error);
    }
};

/**
 * user login fetch datas. Send a POST request to the api
 *
 * @param token
 * @returns {Promise<{firstName: string, lastName: string, id: null, email: string, status: number}|{firstName: (string|React.Reducer<{value: string}>|*), lastName: (string|React.Reducer<{value: string}>|*), id, email: *, status}>}
 */
export const getLoginFetch = async (token) => {
    const API_URL = `${base_URL}/profile`;

    try {
        const response = await axios.post(API_URL, {}, {
            headers: {
                "Content-Type": CONTENT_TYPE_JSON,
                "Authorization": `Bearer ${token}`,
            },
        });

        console.log(token)
        return getLoginFetchData(response.data);
    } catch (error) {
        console.error("API error:", error);
        throw new Error(ERROR_MESSAGE + error);
    }
};


/**
 * send the new first and last name from the edit form with a PUT request to the api
 *
 * @param token
 * @param fullName
 * @returns {Promise<{message, status}|{message: string, status: number}>}
 */
export const saveUserProfil = async (token, fullName) => {
    const URL_API = `${base_URL}/profile`;

    try {
        const response = await axios.put(URL_API, fullName, {
            headers: {
                "Content-Type": CONTENT_TYPE_JSON,
                "Authorization": `Bearer ${token}`,
            },
        });

        return saveUserProfilData(response.data);
    } catch (error) {
        throw new Error(ERROR_MESSAGE + error);
    }
};
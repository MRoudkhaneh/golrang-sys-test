import axios from 'axios'

axios.interceptors.request.use(
    config => {
        if (typeof window !== "undefined") {
            const authData = JSON.parse(localStorage.getItem("authData"));
            const confObj = {};

            confObj["Content-Type"] = 'application/json';
            confObj["Accept"] = "application/json";
            confObj["Accept-Language"] = "fa";

            if (!!authData) {
                confObj["Authorization"] = `Bearer ${authData.token.accessToken}`
            }

            config.headers = confObj
        }
        return config
    },
    null);


axios.interceptors.response.use(
    null,
    (error) => {
        const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
        if (!expectedError) {
            console.log(error)
        }
        return Promise.reject(error)
    }
);

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}

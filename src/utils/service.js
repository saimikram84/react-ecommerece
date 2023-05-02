/**
 * Created by ITShpere on 11/4/2021.
 */
import axios from 'axios';

/**
 * Setting up default base URL for axois
 * @type {string}
 */
axios.defaults.baseURL = '';

/**
 * Get auth token
 * @type {string|any}
 */
const token = localStorage.getItem('token');

/**
 * Setting up auth token
 * in axios Headers
 */
if (localStorage.getItem('token') !== null) {
    axios.defaults.headers.common = {'x-auth-token': token};
}

/**
 * Post util
 * @param url
 * @param data
 */
const postUtil = (url, data) =>
    axios.post(url, data, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

/**
 * Post util with options
 * for progress live tracking
 * @param url
 * @param data
 * @param options
 */
const postUtilWithProgress = (url, data, options) =>
    axios.post(url, data, options);

/**
 * Put util
 * for put requests
 * @param url
 * @param data
 * @param options
 */
const putUtil = (url, data) =>
    axios({
        method: 'put',
        url,
        data,
    });

/**
 * Patch util for patch requests
 * @param url
 * @param data
 */
const patchUtil = (url, data) =>
    axios({
        method: 'patch',
        url,
        data,
    });

/**
 * Get util for get requests
 * @param url
 * @param data
 */
const getUtil = (url, data = null) => axios.get(url, {params: data});

/**
 * Delete util for handling delete request
 * @param url
 * @param data
 */
const deleteUtil = (url, data = null) => axios.delete(url, {params: data});

/**
 * Delete util  with body
 * @param url
 * @param data
 */
const deleteUtilWithBody = (url, data) =>
    axios({
        method: 'delete',
        url,
        data
    });

/**
 * Setting Interceptors for handling errors
 * response interceptor
 */
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (
        error.response.status === 401 ||
        error.response.status === 400 ||
        error.response.status === 404 ||
        error.response.status === 500
    ) {
        return error.response;
    }
});

/**
 * Export all utils
 */
export {
    postUtil,
    postUtilWithProgress,
    putUtil,
    patchUtil,
    getUtil,
    deleteUtil,
    deleteUtilWithBody
}





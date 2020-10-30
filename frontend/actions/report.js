import fetch from "isomorphic-fetch";
import { API } from '../config';

export const create = (report, token) => {
    return fetch (`${API}/report`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'Application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(report)
    }).then(response => {
        return response.json();
    }).catch(err => console.log(err));
};

export const getReports = () => {
    return fetch(`${API}/list-reports`, {
        method: 'GET',
    }).then(response => {
        return response.json();
    }).catch(err => console.log(err))
}
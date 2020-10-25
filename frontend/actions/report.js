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

export const getReport = () => {
    return fetch(`${API}/reports`, {
        method: 'GET'
    }).then(response => {
        return response.json();
    }).catch(err => console.log(err))
}
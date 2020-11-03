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
    return fetch(`${API}/report`, {
        method: 'GET',
    }).then(response => {
        return response.json();
    }).catch(err => console.log(err))
}

export const removeReport = (_id, token) => {
    return fetch(`${API}/report/${_id}`, {
        method: 'DELETE',
        header: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return response.json();
    }).catch(err => console.log(err))
} 
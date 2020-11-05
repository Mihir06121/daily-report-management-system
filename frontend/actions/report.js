import fetch from "isomorphic-fetch";
import { API } from '../config';
// import _id from '../pages/report/[_id]'

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

export const singleReport = _id => {
    return fetch(`${API}/report/${_id}`, {
        method: 'GET'
    }).then(response => {
        {JSON.stringify(response)}
        return response.json;
    }).catch(err => {console.log(err)})
}

export const getReports = () => {
    return fetch(`${API}/report`, {
        method: 'GET',
    }).then(response => {
        return response.json();
    }).catch(err => console.log(err))
}

export const removeReport = (_id) => {
    return fetch(`${API}/report/${_id}`, {
        method: 'DELETE',
        header: {
            Accept: 'application/json',
        }
    }).then(response => {
        return response.json();
    }).catch(err => console.log(err))
} 
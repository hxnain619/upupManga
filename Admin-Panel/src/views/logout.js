import React from 'react';
import { Redirect } from 'react-router-dom';

export default function logout() {
    return fetch('https://lit-shelf-71550.herokuapp.com/panel', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "text": "adminLogout"
        })
    })
        .then(res => {
            if (res) {
                console.log(res.json(), "response")
                return window.location = "https://upupmanga-123.firebaseapp.com/login";
            }
        }).catch(err => {
            console.log(err);
        })
}
import React from 'react';
/* Constants used in multiple parts of the site */
// Pages in the nav menus
export const pages = ['About', 'Services', 'Blog', 'Contact'];
// The content typed at the start page
export const whatIAm = ['n engineering student', ' freelance developer', ' maker', 'n IT consultant', ' blogger', ' human'];
// Responsive design breakpoints
export const breakPoints = {
    mobile: 768,
    tablet: 1024,
    desktop: 1216,
    widescreen: 1408,
}
// Helper functions to do with email
export const validateEmail = (email) => {
    var foundEmail = email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return !!(foundEmail);
}
export const sendEmail = (form, callback_success, callback_error) => {
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    const email = data.get('email')

    if (validateEmail(email)) {
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                callback_success();
            } else {
                callback_error(<><b>Oops!</b> There seems to be a problem. Try again later or contact Flor in another way.</>);
            }
        };
        xhr.send(data);

    } else {
        callback_error(<><b>Oops!</b> Please enter a valid e-mail address.</>);
    }
}


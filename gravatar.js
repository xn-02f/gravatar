/**
 * This is a file that is used to generate gravatar image url.
 * (c) 2018-2019 | xn-02f Lab
 * License: MIT
 */

const md5 = require('@xn-02f/md5');

module.exports = (email, options) => {

    queryString = (options) ? handleOptions(options) : '';

    return gravatarUrl + md5Hash(email) + queryString;
}

const gravatarUrl = 'https://www.gravatar.com/avatar/';

const md5Hash = (email) => {

    const MD5REG = /^[0-9a-f]{32}$/;

    // http://en.gravatar.com/site/implement/hash/
    email = (typeof email === 'string') ? email.trim().toLowerCase() : 'unspecified';

    return email.match(MD5REG) ? email : md5(email);
}

const handleOptions = (obj) => {

    if (typeof obj === 'object') {

        let params = [];

        for (const key in obj) {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }

        return '?' + params.join('&');
    } else {
        throw Error('options must be object...');
    }
}

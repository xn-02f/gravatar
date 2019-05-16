/**
 * This is a file that is used to generate gravatar image url.
 * (c) 2018-2019 | xn-02f Lab
 * License: MIT
 */

const md5 = require('@xn-02f/md5');

const gravatarUrl = 'https://www.gravatar.com/avatar/';

module.exports = (email, options) => {
    queryString = (options) ? handleOptions(options) : '';

    return gravatarUrl + md5Hash(email) + queryString;
}

const md5Hash = email => {
    const MD5_REG = /^[0-9a-f]{32}$/;
    const UNSPECIFIED = '00000000000000000000000000000000'

    // http://en.gravatar.com/site/implement/hash/
    email = (typeof email === 'string') ? email.trim().toLowerCase() : UNSPECIFIED;

    return email.match(MD5_REG) ? email : md5(email);
}

const handleOptions = obj => {
    if (typeof obj === 'object') {
        let params = [];

        if (Object.keys(obj).length == 0) {
            return '';
        }

        for (const key in obj) {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }

        return '?' + params.join('&');
    } else {
        throw Error('options must be object...');
    }
}

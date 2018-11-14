/**
 * This is a file that is used to generate gravatar image url.
 * (c) 2018 | xn-02f Lab
 * License: MIT
 */

const md5 = require('@xn-02f/md5');

module.exports = (email) => {

    const gravatarUrl = 'http://www.gravatar.com/';

    return gravatarUrl + md5Hash(email);

}

const md5Hash = (email) => {

    const MD5_REGEX = /^[0-9a-f]{32}$/;

    email = (typeof email === 'string') ? email.trim().toLowerCase() : 'unspecified';

    return email.match(MD5_REGEX) ? email : md5(email);

}

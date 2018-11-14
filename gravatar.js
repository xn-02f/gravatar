const md5 = require('@xn-02f/md5');

const MD5_REGEX = /^[0-9a-f]{32}$/;

const gravatarUrl = 'http://www.gravatar.com/';

const md5Hash = (email) => {
    email = (typeof email === 'string') ? email.trim().toLowerCase() : 'unspecified';
    return email.match(MD5_REGEX) ? email : md5(email);
}

module.exports = (email) => {
    return gravatarUrl + md5Hash(email);
}

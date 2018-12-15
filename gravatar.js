/**
 * This is a file that is used to generate gravatar image url.
 * (c) 2018 | xn-02f Lab
 * License: MIT
 */

const md5 = require('@xn-02f/md5');

module.exports = (email, options, cdn) => {

    let gravatarUrl = (cdn) ? cdn : 'https://www.gravatar.com/avatar/';

    (options) ? null : null;

    return gravatarUrl + md5Hash(email);

}

const md5Hash = (email) => {

    const MD5REG = /^[0-9a-f]{32}$/;

    // http://en.gravatar.com/site/implement/hash/
    email = (typeof email === 'string') ? email.trim().toLowerCase() : 'unspecified';

    return email.match(MD5REG) ? email : md5(email);

}

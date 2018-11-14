/*
 * This file is used to test.
 */
const assert = require('assert');

const md5 = require('@xn-02f/md5');

const gravatar = require('../gravatar');

describe('Gravatar Test', () => {

    it('"i@huiyifyj.cn" Converted to Gravatar URL Test.', () => {
        assert.equal(gravatar('i@huiyifyj.cn'), 'http://www.gravatar.com/' + md5('i@huiyifyj.cn'));
    });

});

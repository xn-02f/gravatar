/*
 * This file is used to test.
 */
const {expect} = require('chai');
const md5 = require('@xn-02f/md5');

const gravatar = require('../gravatar');

const mailReg = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

describe('Gravatar API Test', () => {

    it('"i@huiyifyj.cn" Converted to Gravatar URL Test.', () => {

        const result = gravatar('i@huiyifyj.cn');

        expect(mailReg.test('i@huiyifyj.cn')).to.be.true;

        expect(result).to.include('https://www.gravatar.com/avatar/' + md5('i@huiyifyj.cn'));
    });

});

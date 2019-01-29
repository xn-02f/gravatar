/*
 * This file is used to test.
 */
const {expect} = require('chai');
const md5 = require('@xn-02f/md5');

const gravatar = require('../gravatar');

const baseURL = 'https://www.gravatar.com/avatar/'
const mailReg = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

describe('Only One E-mail String Parameter Test', () => {

    it('"i@huiyifyj.cn" converted to gravatar url test.', () => {

        const result = gravatar('i@huiyifyj.cn');

        expect(mailReg.test('i@huiyifyj.cn')).to.be.true;

        expect(result).to.be.equal(baseURL + md5('i@huiyifyj.cn'));
    });

});

describe('Two Parameters Test', () => {

    it('Options parameter is null object.', () => {

        expect(mailReg.test('i@huiyifyj.cn')).to.be.true;

        const result = gravatar('i@huiyifyj.cn', {});

        expect(result).to.be.equal(baseURL + md5('i@huiyifyj.cn'))
    });

    it('Options parameter is not null.', () => {

        expect(mailReg.test('i@huiyifyj.cn')).to.be.true;

        const result = gravatar('i@huiyifyj.cn', {
            a: 'a',
            b: 'b'
        });

        expect(result).to.be.equal(baseURL + md5('i@huiyifyj.cn') + '?a=a&b=b');
    });

});

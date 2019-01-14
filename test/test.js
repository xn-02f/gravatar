/*
 * This file is used to test.
 */
const {expect} = require('chai');
const md5 = require('@xn-02f/md5');

const gravatar = require('../gravatar');

const mailReg = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

console.log('Gravatar API Test:')

describe('Only One email Parameter Test', () => {

    it('"i@huiyifyj.cn" converted to gravatar url test.', () => {

        const result = gravatar('i@huiyifyj.cn');

        expect(mailReg.test('i@huiyifyj.cn')).to.be.true;

        expect(result).to.include('https://www.gravatar.com/avatar/' + md5('i@huiyifyj.cn'));
    });

});

describe('Two Parameters Test', () => {

    it('Test in options parameter.', () => {

        expect(mailReg.test('i@huiyifyj.cn')).to.be.true;

        const result = gravatar('i@huiyifyj.cn', {a: 'a', b: 'b'});

        expect(result).to.include('https://www.gravatar.com/avatar/' + md5('i@huiyifyj.cn') + '?a=a&b=b');
    });

});

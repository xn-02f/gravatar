/*
 * This file is used to test.
 */
const {expect} = require('chai');
const md5 = require('@xn-02f/md5');

const gravatar = require('../gravatar');

const baseURL = 'https://www.gravatar.com/avatar/'
const mailReg = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

describe('Only One Email Parameter Test', () => {
    it('"i@huiyifyj.cn" string converted to gravatar url test.', () => {
        const result = gravatar('i@huiyifyj.cn');

        expect(mailReg.test('i@huiyifyj.cn')).to.be.true;

        expect(result).to.be.equal(baseURL + md5('i@huiyifyj.cn'));
    });

    it('Non-string email parameter test.', () => {
        const UNSPECIFIED = '00000000000000000000000000000000'
        const result = gravatar(123);

        expect(result).to.be.equal(baseURL + UNSPECIFIED);
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
            s: 80,
            d: 'wavatar'
        });

        expect(result).to.be.equal(baseURL + md5('i@huiyifyj.cn') + '?s=80&d=wavatar');
    });
});

describe('Other Relevant Test', () => {
    it('Conversion of uppercase and lowercase letters.', () => {
        expect(mailReg.test('I@HuiyiFYJ.cn')).to.be.true;

        const result = gravatar('I@HuiyiFYJ.cn');

        expect(result).to.be.equal(baseURL + md5('i@huiyifyj.cn'));
    });
});

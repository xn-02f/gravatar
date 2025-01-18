/*
 * This file is used to test.
 */
import test from 'ava'
import md5 from '@xn-02f/md5'

import gravatar from '../gravatar.js'

const baseURL = 'https://www.gravatar.com/avatar/'
const mailReg = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/
const UNSPECIFIED = '00000000000000000000000000000000'

test('Only One Email Parameter Test', t => {
    t.is(
        gravatar('i@huiyifyj.cn'),
        baseURL + md5('i@huiyifyj.cn'),
        '"i@huiyifyj.cn" string converted to gravatar url test.'
    )

    t.is(
        gravatar(123),
        baseURL + UNSPECIFIED,
        'Non-string email parameter test.'
    )
})

test('Two Parameters Test',  t => {
    t.true(mailReg.test('i@huiyifyj.cn'))

    t.is(
        gravatar('i@huiyifyj.cn', {}),
        baseURL + md5('i@huiyifyj.cn'),
        'Options parameter is null object.'
    )

    t.is(
        gravatar('i@huiyifyj.cn', {
            s: 80,
            d: 'wavatar'
        }),
        baseURL + md5('i@huiyifyj.cn') + '?s=80&d=wavatar',
        'Options parameter is not null.'
    )
})

test('Other Relevant Test', t => {
    t.true(mailReg.test('I@HuiyiFYJ.cn'))

    t.is(
        gravatar('I@HuiyiFYJ.cn'),
        baseURL + md5('i@huiyifyj.cn'),
        'Conversion of uppercase and lowercase letters.'
    )
})

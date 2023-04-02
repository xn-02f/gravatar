# Gravatar

[![Actions](https://img.shields.io/github/actions/workflow/status/xn-02f/gravatar/test.yml?style=flat-square&logo=github)](https://github.com/xn-02f/gravatar/actions)
[![npm](https://img.shields.io/npm/v/@xn-02f/gravatar.svg?style=flat-square&logo=npm)](https://www.npmjs.com/package/@xn-02f/gravatar)
[![LICENSE](https://img.shields.io/github/license/xn-02f/gravatar.svg?style=flat-square&logo=opensourceinitiative)](https://github.com/xn-02f/gravatar/blob/master/LICENSE)

> 🖼 `Gravatar` is a node library to generate gravatar image url.

## Install

Via npm :

```bash
$ npm i @xn-02f/gravatar
```

## Usage

```javascript
const gravatar = require('@xn-02f/gravatar');
// import gravatar from '@xn-02f/gravatar'

const email = 'i@huiyifyj.cn';
const options = {size: '80', default: '404'};
gravatar(email, options);
```

| Parameter | Description |
| --- | --- |
| email | `string`<br>The gravatar email url. |
| options | `object`<br>Query string options. Like: `size`, `default`, `rating`, `forcedefault` and [others](https://en.gravatar.com/site/implement/images/). |

### About options parameter

| Property | Alias | Default | Description |
| --- | --- | --- | --- |
| size | `s` | 80 | Request a specific image size, which will be dynamically delivered from Gravatar and passing a single pixel dimension.<br>(since the images are square) |
|default | `d` | ![defaultImage](https://www.gravatar.com/avatar/00000000000000000000000000000000?s=25) | Set default image when an email address has no matching Gravatar image.<br>Gravatar has a number of built in options:<br>`404` do not load any image if none is associated with the email hash, instead return an HTTP 404 (File Not Found) response.<br> `mp` ![mp](https://www.gravatar.com/avatar/00000000000000000000000000000000?s=20&d=mp)<br> `identicon` ![identicon](https://www.gravatar.com/avatar/00000000000000000000000000000000?s=20&d=identicon)<br> `monsterid` ![monsterid](https://www.gravatar.com/avatar/00000000000000000000000000000000?s=20&d=monsterid)<br> `wavatar` ![wavatar](https://www.gravatar.com/avatar/00000000000000000000000000000000?s=20&d=wavatar)<br> `retro` ![retro](https://www.gravatar.com/avatar/00000000000000000000000000000000?s=20&d=retro)<br> `robohash` ![robohash](https://www.gravatar.com/avatar/00000000000000000000000000000000?s=20&d=robohash)<br> `blank` ![blank](https://www.gravatar.com/avatar/00000000000000000000000000000000?s=20&d=blank) |
| forcedefault<br>(Unrecommend) | `f` | (null) | If for some reason you wanted to force the default image to always load, you can do that by using the parameter, and setting its value to `y`.<br> Before: ![before](https://www.gravatar.com/avatar/11b334f003ef029c9d154f5dbae18b44?s=25)<br> After: ![after](https://www.gravatar.com/avatar/11b334f003ef029c9d154f5dbae18b44?s=25&f=y) |
| rating | `r` | g | This property allows users to self-rate their images so that they can indicate if an image is appropriate for a certain audience.<br> you can specify one of the following ratings to request images up to and including that rating:<br> `g`: suitable for display on all websites with any audience type.<br> `pg`: may contain rude gestures, provocatively dressed individuals, the lesser swear words, or mild violence.<br> `r`: may contain such things as harsh profanity, intense violence, nudity, or hard drug use.<br> `x`: may contain hardcore sexual imagery or extremely disturbing violence. |

### License

> [MIT](https://github.com/xn-02f/gravatar/blob/master/LICENSE)

<br>
<br>
<div align=center>
    <sub>
        &copy; 2023 | <a href="https://xn--02f.com">xn-02f</a>
    </sub>
</div>

# Gravatar
[![TravisCI](https://img.shields.io/travis/com/xn-02f/gravatar/master.svg?style=flat-square&logo=travis)](https://travis-ci.com/xn-02f/gravatar)
[![AzurePipeline](https://img.shields.io/azure-devops/build/xn-02f/gravatar/1/master.svg?style=flat-square&logo=azuredevops)](https://dev.azure.com/xn-02f/gravatar/_build?definitionId=1)
[![npm](https://img.shields.io/npm/v/@xn-02f/gravatar.svg?style=flat-square&logo=npm)](https://www.npmjs.com/package/@xn-02f/gravatar)
[![LICENSE](https://img.shields.io/github/license/xn-02f/gravatar.svg?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHZlcnNpb249IjEuMSI+PHBhdGggZD0iTTUxMiAxNkMyMzguMDY2IDE2IDE2IDIzOC4wNjYgMTYgNTEyczIyMi4wNjYgNDk2IDQ5NiA0OTYgNDk2LTIyMi4wNjYgNDk2LTQ5NlM3ODUuOTM0IDE2IDUxMiAxNnogbTIzNC4yNjggNjkzLjUwNmMtMy4xODQgMy43MzQtNzkuNTUyIDkxLjQ2Mi0yMTkuNzAyIDkxLjQ2Mi0xNjkuMzg0IDAtMjg4Ljk2OC0xMjYuNTItMjg4Ljk2OC0yOTEuMTM0IDAtMTYyLjYwNiAxMjQuMDA4LTI4Ni44MDIgMjg3LjUyNC0yODYuODAyIDEzMy45MTQgMCAyMDMuOTMgNzQuNjMgMjA2Ljg0NCA3Ny44MDhhMjQgMjQgMCAwIDEgMi40NzYgMjkuMjQ2bC00NC43NiA2OS4zMWMtOC4wOTggMTIuNTM0LTI1LjU0OCAxNC43MDItMzYuNDY4IDQuNTktMC40NjYtMC40MjgtNTMuMDU4LTQ3Ljc2LTEyMy43Ni00Ny43Ni05Mi4yMzIgMC0xNDcuODMyIDY3LjE1LTE0Ny44MzIgMTUyLjE2NCAwIDc5LjIwNCA1MS4wMjggMTU5LjM4NCAxNDguNTU0IDE1OS4zODQgNzcuMzk0IDAgMTMwLjU2LTU2LjY3NiAxMzEuMDg4LTU3LjI1IDEwLjI2NC0xMS4xMyAyOC4xMTgtMTAuMDY2IDM3LjAxNiAyLjEwNmw0OS4wOTQgNjcuMTQ0YTI0LjAwMiAyNC4wMDIgMCAwIDEtMS4xMDYgMjkuNzMyeiIgZmlsbD0iI2ZmZmZmZiIvPjwvc3ZnPg==)](https://github.com/xn-02f/gravatar/blob/master/LICENSE)
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
| options | `object`<br>Query string options. Like: `size`, `default`, `rating`, `forcedefault` and other [others](https://en.gravatar.com/site/implement/images/). |

## License
> [MIT](https://github.com/xn-02f/gravatar/blob/master/LICENSE)

<div align=center>
    &copy; 2019 &nbsp; | &nbsp; <a href="https://xn-02f.github.io" target="_blank">xn-02f</a>
</div>

import { expectType } from 'tsd';

import gravatar from '../gravatar.js';

expectType<string>(gravatar('i@xn--02f.com'));

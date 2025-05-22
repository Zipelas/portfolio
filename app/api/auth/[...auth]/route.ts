import { auth } from '../../../../app/signin/auth';

import { toNextJsHandler } from 'better-auth/next-js';

export const { POST, GET } = toNextJsHandler(auth);

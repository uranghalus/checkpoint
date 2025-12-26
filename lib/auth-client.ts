import { nextCookies } from 'better-auth/next-js';
import { createAuthClient } from 'better-auth/react';
import {
  adminClient,
  inferAdditionalFields,
  organizationClient,
  usernameClient,
} from 'better-auth/client/plugins';
import {
  ac,
  admin,
  generalManager,
  inspector,
  manager,
  orgAdmin,
  superadmin,
} from './auth-permission';
import { auth } from './auth';
// import { ac, admin, inspector, manager, superadmin } from './permissions';

export const authClient = createAuthClient({
  plugins: [
    adminClient({
      ac,
      roles: {
        admin,
        orgAdmin,
        superadmin,
        inspector,
        manager,
        generalManager,
      },
    }),
    inferAdditionalFields<typeof auth>(),
    nextCookies(),
    usernameClient(),
    organizationClient(),
  ],
});

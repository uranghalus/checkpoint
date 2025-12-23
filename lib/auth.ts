import { betterAuth } from 'better-auth';
import { admin as adminPg, organization, username } from 'better-auth/plugins';
import { nextCookies } from 'better-auth/next-js';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { prisma } from './prisma';
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'mysql', // or "mysql", "postgresql", ...etc
  }),
  //...
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },
  user: {
    changeEmail: {
      enabled: true,
      updateEmailWithoutVerification: true,
    },
    additionalFields: {
      role: {
        type: 'string',
        input: false,
      },
      username: {
        type: 'string',
        input: true,
      },
    },
  },
  plugins: [
    organization(),
    nextCookies(),
    username(),
    adminPg({
      // adminRoles: ['admin', 'superadmin'],
      //   ac,
      //   roles: {
      //     admin,
      //     superadmin,
      //     inspector,
      //     manager,
      //   },
    }),
  ],
});

import { auth } from './auth';
import { headers } from 'next/headers';
import { getServerSession } from './get-session';
type PermissionRequirement = {
  resource: string;
  action: string;
};

export async function requirePermission(permission?: PermissionRequirement) {
  const session = await getServerSession();

  if (!session) {
    return { allowed: false, reason: 'unauthenticated' };
  }

  // 🔥 ADMIN BYPASS
  if (session.user.role === 'admin') {
    return { allowed: true };
  }

  // ❌ USER TANPA ORGANIZATION
  if (!session.session.activeOrganizationId) {
    return { allowed: false, reason: 'no-organization' };
  }

  // ❌ PAGE TANPA PERMISSION → PUBLIC (IN ORG)
  if (!permission) {
    return { allowed: true };
  }

  const res = await auth.api.hasPermission({
    headers: await headers(),
    body: {
      permissions: {
        [permission.resource]: [permission.action],
      },
    },
  });

  return {
    allowed: res.success === true,
    reason: res.error ? undefined : 'forbidden',
  };
}

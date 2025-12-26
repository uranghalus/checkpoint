import { authClient } from '@/lib/auth-client';

type Permission = {
  resource: string;
  action: string;
};

export const hasPermissionClient = async (
  permission: Permission | undefined,
  isAdmin: boolean,
  hasOrg: boolean
) => {
  if (!permission) return true;

  // 🔥 ADMIN BYPASS
  if (isAdmin) return true;

  // ❌ Tidak ada org → langsung false
  if (!hasOrg) return false;

  const res = await authClient.organization.hasPermission({
    permissions: {
      [permission.resource]: [permission.action],
    },
  });

  return res.data?.success === true;
};

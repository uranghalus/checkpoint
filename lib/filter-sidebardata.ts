/* eslint-disable @typescript-eslint/no-explicit-any */

import { hasPermissionClient } from './auth-control';

export const filterNavItems = async (
  items: any[],
  isAdmin: boolean,
  hasOrg: boolean
) => {
  const result = [];

  for (const item of items) {
    const allowed = await hasPermissionClient(item.permission, isAdmin, hasOrg);

    if (!allowed) continue;

    if (item.items) {
      const children: any = await filterNavItems(item.items, isAdmin, hasOrg);

      if (children.length > 0) {
        result.push({ ...item, items: children });
      }
    } else {
      result.push(item);
    }
  }

  return result;
};

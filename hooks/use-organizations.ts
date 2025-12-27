/* eslint-disable @typescript-eslint/no-explicit-any */

import { getAllOrganization } from '@/action/organization-action';
import { useQuery } from '@tanstack/react-query';

// Query keys
export const organizationKeys = {
  all: ['organizations'] as const,
  lists: () => [...organizationKeys.all, 'list'] as const,
  list: (filters: any) => [...organizationKeys.lists(), filters] as const,
  details: () => [...organizationKeys.all, 'detail'] as const,
  detail: (id: string) => [...organizationKeys.details(), id] as const,
};

// Hook untuk get all organizations
export function useOrganizations(options?: {
  enabled?: boolean;
  search?: string;
}) {
  return useQuery({
    queryKey: organizationKeys.list({ search: options?.search }),
    queryFn: () => getAllOrganization(),
    enabled: options?.enabled ?? true,
    select: (result) => ({
      ...result,
      data: result.success ? result.data : [],
      total: result.success ? result.total : 0,
    }),
  });
}

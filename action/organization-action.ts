import { auth } from '@/lib/auth';

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Organization {
  id: string;
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  metadata?: Record<string, any>;
}

export interface OrganizationsResponse {
  success: boolean;
  data?: Organization[];
  error?: string;
  total?: number;
}

export interface OrganizationResponse {
  success: boolean;
  data?: Organization;
  error?: string;
}

export interface MutationResponse {
  success: boolean;
  data?: Organization;
  error?: string;
}

export async function getAllOrganization(): Promise<OrganizationsResponse> {
  try {
    const organizations = await auth.api.listOrganizations();
    return {
      success: true,
      data: organizations as any[],
      total: organizations.length,
    };
  } catch (error) {
    console.error('Error fetching organizations:', error);
    return {
      success: false,
      error: 'Failed to fetch organizations',
      data: [],
      total: 0,
    };
  }
}

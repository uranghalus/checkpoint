'use server';

import { auth } from '@/lib/auth';
import { getServerSession } from '@/lib/get-session';
import { revalidatePath } from 'next/cache';
import { headers } from 'next/headers';

type GetOrganizationsArgs = {
  page: number;
  pageSize: number;
};

export async function getOrganizations({
  page,
  pageSize,
}: GetOrganizationsArgs) {
  const session = await getServerSession();
  if (!session) {
    throw new Error('Unauthorized');
  }

  const organizations = await auth.api.listOrganizations({
    headers: await headers(),
  });

  const total = organizations.length;
  const safePage = Math.max(1, page);
  const safePageSize = Math.max(1, pageSize);

  const start = (safePage - 1) * safePageSize;
  const end = start + safePageSize;

  return {
    data: organizations.slice(start, end),
    total,
    pageCount: Math.ceil(total / safePageSize),
    page: safePage,
    pageSize: safePageSize,
  };
}
export async function createOrganization(formData: FormData) {
  const session = await getServerSession();

  if (!session) throw new Error('Unauthorized');

  const data = await auth.api.createOrganization({
    body: {
      name: formData.get('name') as string, // required
      slug: formData.get('slug') as string, // required
      userId: session.user.id,
      keepCurrentActiveOrganization: false,
    },
    // This endpoint requires session cookies.
    headers: await headers(),
  });

  revalidatePath('/organizations');
  return data;
}
export async function updateOrganization(
  organizationId: string,
  formData: FormData
) {
  const data = await auth.api.updateOrganization({
    body: {
      data: {
        name: formData.get('name') as string, // required
        slug: formData.get('slug') as string, // required
      },
      organizationId: organizationId,
    },
    // This endpoint requires session cookies.
    headers: await headers(),
  });
  revalidatePath('/organizations');
  return data;
}
export async function deleteOrganization(organizationId: string) {
  const session = await getServerSession();

  if (!session) {
    throw new Error('Unauthorized');
  }

  const data = await auth.api.deleteOrganization({
    body: {
      organizationId,
    },
    headers: await headers(),
  });

  revalidatePath('/organizations');
  return data;
}

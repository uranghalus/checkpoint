import { defaultStatements, adminAc } from 'better-auth/plugins/admin/access';
import { createAccessControl } from 'better-auth/plugins/access';

export const statement = {
  ...defaultStatements,

  project: ['view', 'create', 'edit', 'delete'],

  user: [
    'view',
    'list',
    'create',
    'edit',
    'delete',
    'set-role',
    'ban',
    'impersonate',
    'set-password',
  ],

  role: ['view', 'create', 'edit', 'delete'],

  apar: ['view', 'create', 'edit', 'delete'],

  hydrant: ['view', 'create', 'edit', 'delete'],

  cekpoint: ['view', 'create', 'edit', 'delete'],

  inspection: [
    'view',
    'create',
    'edit',
    'submit',
    'approve',
    'reject',
    'delete', // ONLY superadmin
  ],

  report: ['view', 'export'],
} as const;

export const ac = createAccessControl(statement);

export const admin = ac.newRole({
  ...adminAc.statements,
  project: ['view', 'create', 'edit', 'delete'],
  role: ['view', 'create', 'edit', 'delete'],
  user: [
    'view',
    'list',
    'create',
    'edit',
    'delete',
    'set-role',
    'ban',
    'impersonate',
    'set-password',
  ],

  apar: ['view', 'create', 'edit', 'delete'],
  hydrant: ['view', 'create', 'edit', 'delete'],
  cekpoint: ['view', 'create', 'edit', 'delete'],

  inspection: [
    'view',
    'create',
    'edit',
    'submit',
    'approve',
    'reject',
    'delete',
  ],

  report: ['view', 'export'],
});
// LINK Superadmin
export const superadmin = ac.newRole({
  ...adminAc.statements,

  project: ['view', 'create', 'edit', 'delete'],
  role: ['view', 'create', 'edit', 'delete'],

  user: [
    'view',
    'list',
    'create',
    'edit',
    'delete',
    'set-role',
    'ban',
    'impersonate',
    'set-password',
  ],

  apar: ['view', 'create', 'edit', 'delete'],
  hydrant: ['view', 'create', 'edit', 'delete'],
  cekpoint: ['view', 'create', 'edit', 'delete'],

  inspection: [
    'view',
    'create',
    'edit',
    'submit',
    'approve',
    'reject',
    'delete',
  ],

  report: ['view', 'export'],
});
// LINK org_admin
export const orgAdmin = ac.newRole({
  apar: ['view', 'create', 'edit'],
  hydrant: ['view', 'create', 'edit'],
  cekpoint: ['view', 'create', 'edit'],

  inspection: ['view'],
  report: ['view'],
});
// LINK inspector
export const inspector = ac.newRole({
  apar: ['view'],
  hydrant: ['view'],
  cekpoint: ['view'],

  inspection: ['view', 'create', 'edit', 'submit'],
  report: ['view'],
});
//LINK manager
export const manager = ac.newRole({
  apar: ['view'],
  hydrant: ['view'],
  cekpoint: ['view'],

  inspection: ['view', 'approve', 'reject'],
  report: ['view', 'export'],
});
// LINK GM
export const generalManager = ac.newRole({
  apar: ['view'],
  hydrant: ['view'],
  cekpoint: ['view'],

  inspection: ['view'],
  report: ['view'],
});

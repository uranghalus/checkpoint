import { Main } from '@/components/main'
import { requirePermission } from '@/lib/auth-control-server'

import { forbidden } from 'next/navigation'
import React from 'react'

export default async function OrganizationPage() {
    const { allowed } = await requirePermission({
        resource: 'project',
        action: 'view',
    })
    if (!allowed) forbidden()
    return (
        <Main fluid className='space-y-6'>
            <div>
                <h1 className="text-2xl font-semibold">
                    Organization
                </h1>
                <p className="text-sm text-muted-foreground">
                    manajemen pengaturan Organization
                </p>
            </div>
        </Main>
    )
}



'use client'

import { useOrganizationDetail } from '@/hooks/use-organization'
import { useParams } from 'next/navigation'


export default function OrganizationDetailClient() {
    const { orgId } = useParams<{ orgId: string }>()

    const { data, isLoading, error } = useOrganizationDetail({
        organizationId: orgId,
    })

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Failed to load organization</div>

    return (
        <div className="rounded-md bg-muted p-4">
            <pre className="text-sm overflow-auto">
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    )
}

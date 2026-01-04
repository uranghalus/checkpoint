/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@/components/ui/tabs'
import { OrganizationOverview } from './organization-overview-'


export function OrganizationTabs({ data }: { data: any }) {
    const router = useRouter()
    const searchParams = useSearchParams()

    const activeTab = searchParams.get('tab') ?? 'overview'

    const onTabChange = (value: string) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set('tab', value)
        router.replace(`?${params.toString()}`, { scroll: false })
    }

    return (
        <Tabs value={activeTab} onValueChange={onTabChange}>
            <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="members">
                    Members ({data.members.length})
                </TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
                <OrganizationOverview data={data.organization} />
            </TabsContent>

            <TabsContent value="members">
                {/* <OrganizationMembersTable
                    organizationId={data.organization.id}
                    members={data.members}
                /> */}
            </TabsContent>
        </Tabs>
    )
}

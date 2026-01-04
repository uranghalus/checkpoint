import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { format } from 'date-fns'

type OrganizationOverviewProps = {
    data: {
        id: string
        name: string
        slug: string
        createdAt: string
    }
}

export function OrganizationOverview({
    data,
}: OrganizationOverviewProps) {
    return (
        <div className="grid gap-4 sm:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle>Organization Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                    <div>
                        <span className="text-muted-foreground">Name</span>
                        <div className="font-medium">{data.name}</div>
                    </div>

                    <div>
                        <span className="text-muted-foreground">Slug</span>
                        <div className="font-medium">{data.slug}</div>
                    </div>

                    <div>
                        <span className="text-muted-foreground">Created At</span>
                        <div className="font-medium">
                            {format(new Date(data.createdAt), 'dd MMM yyyy')}
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Status</CardTitle>
                </CardHeader>
                <CardContent>
                    <Badge variant="default">Active</Badge>
                </CardContent>
            </Card>
        </div>
    )
}

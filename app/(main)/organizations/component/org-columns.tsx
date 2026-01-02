import { DataTableColumnHeader } from "@/components/datatable/datatable-column-header";
import { Checkbox } from "@/components/ui/checkbox";
import type { Organization } from "@/generated/prisma/client";
import { Column, ColumnDef } from "@tanstack/react-table";
import { OrgRowActions } from "./org-row-action";

export const orgColumns: ColumnDef<Organization>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"

            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
        size: 10
    },
    {
        accessorKey: "name",
        header: ({ column }: { column: Column<Organization, unknown> }) => (
            <DataTableColumnHeader column={column} title="Name" />
        ),
        cell: ({ cell }) => {
            return <div className="font-medium ps-2">{cell.getValue<Organization['name']>()}</div>
        },
        // size: 250
    },
    {
        accessorKey: "slug",
        header: ({ column }: { column: Column<Organization, unknown> }) => (
            <DataTableColumnHeader column={column} title="Slug" />
        ),
        cell: ({ cell }) => {
            return <div className="font-medium ps-2">{cell.getValue<Organization['slug']>()}</div>
        },
        size: 500
    },
    {
        id: 'actions',
        cell: OrgRowActions,
        size: 380
    }
] 
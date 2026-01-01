/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import { flexRender } from '@tanstack/react-table'
import { cn } from '@/lib/utils'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { Loader } from 'lucide-react'


type DataTableProps<TData> = {
    table: any
    emptyText?: string
    loading?: boolean
}

export function DataTable<TData>({
    table,
    emptyText = 'No results.',
    loading = false,
}: DataTableProps<TData>) {
    const columnCount = table.getAllColumns().length

    return (
        <div className="overflow-hidden rounded-md border">
            <Table className="min-w-xl">
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup: any) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header: any) => (
                                <TableHead
                                    key={header.id}
                                    colSpan={header.colSpan}
                                    className={cn(
                                        header.column.columnDef.meta?.className,
                                        header.column.columnDef.meta?.thClassName
                                    )}
                                >
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>

                <TableBody>
                    {loading ? (
                        Array.from({ length: 5 }).map((_, i) => (
                            <TableRow key={i}>
                                {Array.from({ length: columnCount }).map(
                                    (_, j) => (
                                        <TableCell key={j}>
                                            <div className="space-x-2">
                                                <Loader className='size-5' />
                                                Mohon Tunggu Sebentar...
                                            </div>
                                        </TableCell>
                                    )
                                )}
                            </TableRow>
                        ))
                    ) : table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row: any) => (
                            <TableRow
                                key={row.id}
                                data-state={
                                    row.getIsSelected() && 'selected'
                                }
                            >
                                {row.getVisibleCells().map((cell: any) => (
                                    <TableCell
                                        key={cell.id}
                                        className={cn(
                                            cell.column.columnDef.meta?.className,
                                            cell.column.columnDef.meta?.tdClassName
                                        )}
                                    >
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell
                                colSpan={columnCount}
                                className="h-24 text-center"
                            >
                                {emptyText}
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}

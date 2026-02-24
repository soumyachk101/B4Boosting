import { OrderStatus } from "@/types"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface OrderStatusBadgeProps {
    status: OrderStatus
    className?: string
}

export function OrderStatusBadge({ status, className }: OrderStatusBadgeProps) {
    const getStatusStyles = (status: OrderStatus) => {
        switch (status) {
            case 'PENDING':
                return "bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 border-amber-500/20"
            case 'IN_PROGRESS':
                return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border-blue-500/20"
            case 'COMPLETED':
                return "bg-green-500/10 text-green-500 hover:bg-green-500/20 border-green-500/20"
            case 'CANCELLED':
                return "bg-red-500/10 text-red-500 hover:bg-red-500/20 border-red-500/20"
            case 'DISPUTED':
                return "bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 border-orange-500/20"
            default:
                return ""
        }
    }

    return (
        <Badge variant="outline" className={cn(getStatusStyles(status), "uppercase tracking-wider font-mono text-[10px]", className)}>
            {status.replace('_', ' ')}
        </Badge>
    )
}

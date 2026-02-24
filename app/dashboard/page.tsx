
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { OrderStatusBadge } from "@/components/ui/OrderStatusBadge"
import { Separator } from "@/components/ui/separator"
import { ShoppingBag, Clock, CheckCircle2 } from "lucide-react"

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold font-display text-white">Dashboard Overview</h1>
                <p className="text-gray-400">Welcome back, here&apos;s what&apos;s happening with your account.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-bg-secondary border-border">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-400">Active Orders</CardTitle>
                        <ShoppingBag className="h-4 w-4 text-accent-green" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">3</div>
                        <p className="text-xs text-gray-500 mt-1">2 in progress, 1 pending</p>
                    </CardContent>
                </Card>
                <Card className="bg-bg-secondary border-border">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-400">Total Spent</CardTitle>
                        <CheckCircle2 className="h-4 w-4 text-accent-blue" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">$450.00</div>
                        <p className="text-xs text-gray-500 mt-1">+12% from last month</p>
                    </CardContent>
                </Card>
                <Card className="bg-bg-secondary border-border">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-400">Messages</CardTitle>
                        <Clock className="h-4 w-4 text-accent-amber" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-white">5</div>
                        <p className="text-xs text-gray-500 mt-1">2 unread messages</p>
                    </CardContent>
                </Card>
            </div>

            <div className="space-y-4">
                <h2 className="text-lg font-bold font-display text-white">Recent Orders</h2>
                <div className="bg-bg-secondary rounded-xl border border-border overflow-hidden">
                    {/* Header */}
                    <div className="grid grid-cols-5 p-4 text-sm font-medium text-gray-400 bg-bg-elevated/50 border-b border-border">
                        <div className="col-span-2">Service</div>
                        <div>Order ID</div>
                        <div>Total</div>
                        <div>Status</div>
                    </div>

                    {/* Items */}
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="grid grid-cols-5 p-4 items-center text-sm border-b border-border last:border-0 hover:bg-bg-elevated/30 transition-colors">
                            <div className="col-span-2 font-medium text-white">
                                League of Legends Boosting
                                <span className="block text-xs text-gray-500">Gold IV to Plat IV</span>
                            </div>
                            <div className="font-mono text-gray-400">#ORD-{1000 + i}</div>
                            <div className="font-mono text-white">$150.00</div>
                            <div>
                                <OrderStatusBadge status={i === 1 ? 'IN_PROGRESS' : i === 2 ? 'PENDING' : 'COMPLETED'} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

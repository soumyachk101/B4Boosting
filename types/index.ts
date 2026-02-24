export type UserRole = 'BUYER' | 'SELLER' | 'ADMIN'

export type ListingStatus = 'ACTIVE' | 'SOLD' | 'INACTIVE' | 'ARCHIVED'

export type OrderStatus = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED' | 'DISPUTED'

export type CategoryType = 'BOOSTING' | 'CURRENCY' | 'ACCOUNTS' | 'ITEMS' | 'SKINS' | 'TOP_UP' | 'GIFT_CARDS' | 'COACHING'

export interface Game {
  id: string
  name: string
  slug: string
  image: string
  categories: CategoryType[]
}

export interface SellerProfile {
  id: string
  name?: string
  displayName?: string
  avatar: string
  rating: number
  reviewCount: number
  completionRate: number
  totalOrders: number
  responseTime: string // e.g., "< 5 min"
  bio?: string
  joinedAt: string
  verified?: boolean
}

export interface Listing {
  id: string
  title: string
  description: string
  price: number
  gameSlug: string
  categoryType: CategoryType
  sellerId: string
  status: ListingStatus
  seller: SellerProfile
  options?: Record<string, unknown> // e.g., default rank, starting rank
  requirements?: string[]
  tags: string[]
  deliveryTimeHours: number // e.g., 2-4 hours -> avg 3
  images?: string[] // optional additional images for accounts/items
  viewCount: number
  ordersCount: number
  rating: number
  reviewCount: number
  createdAt: string
}

export interface Review {
  id: string
  listingId: string
  userId: string
  reviewerName: string
  reviewerAvatar: string
  rating: number // 1-5
  comment: string
  createdAt: string
  helpfulCount: number
}

export interface CartItem {
  id: string
  listingId: string
  title: string
  gameSlug: string
  gameImage: string
  sellerName: string
  price: number
  quantity: number
  options: Record<string, string> // e.g., { currentRank: "Silver", targetRank: "Gold" }
  addons: string[] // e.g., ["Express Delivery", "VPN"]
}

export interface Order {
  id: string
  buyerId: string
  sellerId: string
  items: CartItem[]
  totalAmount: number
  status: OrderStatus
  createdAt: string
  updatedAt: string
}

export interface Category {
  id: string
  name: string
  slug: string
  icon?: React.ElementType // Lucide icon
}

export interface NavItem {
  label: string
  href: string
  subItems?: NavItem[]
  featured?: boolean
}

export interface Breadcrumb {
  label: string
  href: string
  active?: boolean
}


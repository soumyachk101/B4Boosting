import { Game, Listing, Review, SellerProfile, CategoryType } from '@/types'

export const GAMES: Game[] = [
    { id: '1', name: 'League of Legends', slug: 'league-of-legends', image: 'https://placehold.co/384x216/0D1117/00FF88?text=League+of+Legends', categories: ['BOOSTING', 'ACCOUNTS', 'COACHING'] },
    { id: '2', name: 'Valorant', slug: 'valorant', image: 'https://placehold.co/384x216/0D1117/00FF88?text=Valorant', categories: ['BOOSTING', 'ACCOUNTS', 'COACHING'] },
    { id: '3', name: 'World of Warcraft', slug: 'world-of-warcraft', image: 'https://placehold.co/384x216/0D1117/00FF88?text=World+of+Warcraft', categories: ['BOOSTING', 'CURRENCY', 'ACCOUNTS'] },
    { id: '4', name: 'Old School RuneScape', slug: 'old-school-runescape', image: 'https://placehold.co/384x216/0D1117/00FF88?text=OSRS', categories: ['CURRENCY', 'ACCOUNTS', 'ITEMS', 'BOOSTING'] },
    { id: '5', name: 'Fortnite', slug: 'fortnite', image: 'https://placehold.co/384x216/0D1117/00FF88?text=Fortnite', categories: ['ACCOUNTS', 'ITEMS', 'BOOSTING'] },
    { id: '6', name: 'Call of Duty', slug: 'call-of-duty', image: 'https://placehold.co/384x216/0D1117/00FF88?text=Call+of+Duty', categories: ['BOOSTING', 'ACCOUNTS'] },
    { id: '7', name: 'GTA 5', slug: 'grand-theft-auto-5', image: 'https://placehold.co/384x216/0D1117/00FF88?text=GTA+5', categories: ['ACCOUNTS', 'CURRENCY', 'BOOSTING'] },
    { id: '8', name: 'Roblox', slug: 'roblox', image: 'https://placehold.co/384x216/0D1117/00FF88?text=Roblox', categories: ['CURRENCY', 'ACCOUNTS', 'ITEMS'] },
    { id: '9', name: 'Clash Royale', slug: 'clash-royale', image: 'https://placehold.co/384x216/0D1117/00FF88?text=Clash+Royale', categories: ['BOOSTING', 'ACCOUNTS'] },
    { id: '10', name: 'Path of Exile 2', slug: 'path-of-exile-2', image: 'https://placehold.co/384x216/0D1117/00FF88?text=PoE+2', categories: ['CURRENCY', 'ITEMS', 'BOOSTING'] },
]

export const SELLER_PROFILES: SellerProfile[] = [
    { id: 's1', name: 'ProBoosterX', avatar: 'https://placehold.co/64x64/00FF88/000000?text=PB', rating: 4.9, reviewCount: 1240, completionRate: 99.5, totalOrders: 5400, responseTime: '< 5 min', bio: 'Professional boosting team with 5 years of experience.', joinedAt: '2021-05-12' },
    { id: 's2', name: 'GoldMiner', avatar: 'https://placehold.co/64x64/FFB800/000000?text=GM', rating: 4.8, reviewCount: 890, completionRate: 98.2, totalOrders: 3200, responseTime: '< 10 min', bio: 'Fast and reliable currency delivery.', joinedAt: '2022-01-20' },
    { id: 's3', name: 'EliteAccounts', avatar: 'https://placehold.co/64x64/3B82F6/000000?text=EA', rating: 5.0, reviewCount: 450, completionRate: 100, totalOrders: 600, responseTime: '< 15 min', bio: 'Premium accounts with lifetime warranty.', joinedAt: '2023-08-05' },
    { id: 's4', name: 'SpeedyService', avatar: 'https://placehold.co/64x64/FF5555/000000?text=SS', rating: 4.7, reviewCount: 2100, completionRate: 97.0, totalOrders: 8900, responseTime: '< 2 min', bio: 'Cheapest and fastest service on the market.', joinedAt: '2020-11-15' },
    { id: 's5', name: 'SafeCarry', avatar: 'https://placehold.co/64x64/A855F7/000000?text=SC', rating: 4.9, reviewCount: 670, completionRate: 99.0, totalOrders: 1500, responseTime: '< 8 min', bio: 'Privacy focused boosting service.', joinedAt: '2022-06-30' },
]

export const LISTINGS: Listing[] = [
    {
        id: 'l1', title: 'Power Leveling 1-30 | Fast & Safe | VPN Included', description: 'Get your account leveled up quickly by our professional boosters. We verify all boosters and ensure account safety.',
        price: 24.99, gameSlug: 'league-of-legends', categoryType: 'BOOSTING', sellerId: 's1', status: 'ACTIVE', seller: SELLER_PROFILES[0],
        deliveryTimeHours: 24, viewCount: 1205, ordersCount: 450, rating: 4.9, reviewCount: 120, createdAt: '2023-10-01', tags: ['Leveling', 'Safe', 'VPN'], requirements: ['Account access']
    },
    {
        id: 'l2', title: '100M OSRS Gold | Instant Delivery | Best Price', description: 'Cheap and fast OSRS Gold. We deliver within 5 minutes of purchase.',
        price: 19.99, gameSlug: 'old-school-runescape', categoryType: 'CURRENCY', sellerId: 's2', status: 'ACTIVE', seller: SELLER_PROFILES[1],
        deliveryTimeHours: 0.1, viewCount: 5400, ordersCount: 2200, rating: 4.8, reviewCount: 500, createdAt: '2023-09-15', tags: ['Gold', 'Instant', 'Cheap']
    },
    {
        id: 'l3', title: 'Valorant Radiant Account | All Agents | Vandal Skins', description: 'High tier Valorant account with premium skins and high rank.',
        price: 199.99, gameSlug: 'valorant', categoryType: 'ACCOUNTS', sellerId: 's3', status: 'ACTIVE', seller: SELLER_PROFILES[2],
        deliveryTimeHours: 1, viewCount: 890, ordersCount: 12, rating: 5.0, reviewCount: 5, createdAt: '2023-10-20', tags: ['Radiant', 'Skins', 'Email Change']
    },
    {
        id: 'l4', title: 'WoW Dragonflight Mythic+ Carry | +20 Key', description: 'Complete a +20 Mythic dungeon with our pro team.',
        price: 15.00, gameSlug: 'world-of-warcraft', categoryType: 'BOOSTING', sellerId: 's4', status: 'ACTIVE', seller: SELLER_PROFILES[3],
        deliveryTimeHours: 1, viewCount: 300, ordersCount: 80, rating: 4.7, reviewCount: 20, createdAt: '2023-11-05', tags: ['Dungeon', 'Mythic+', 'Loot']
    },
    {
        id: 'l5', title: 'Fortnite Galaxy Skin Account | Rare', description: 'Exclusive Fortnite account with Galaxy skin and other rare items.',
        price: 49.99, gameSlug: 'fortnite', categoryType: 'ACCOUNTS', sellerId: 's3', status: 'ACTIVE', seller: SELLER_PROFILES[2],
        deliveryTimeHours: 1, viewCount: 1500, ordersCount: 45, rating: 5.0, reviewCount: 30, createdAt: '2023-10-10', tags: ['Galaxy Skin', 'Rare', 'Full Access']
    },
    {
        id: 'l6', title: 'Apex Legends Rank Boost to Predator', description: 'Reach the top rank in Apex Legends with our help.',
        price: 150.00, gameSlug: 'apex-legends', categoryType: 'BOOSTING', sellerId: 's1', status: 'ACTIVE', seller: SELLER_PROFILES[0],
        deliveryTimeHours: 72, viewCount: 600, ordersCount: 20, rating: 4.9, reviewCount: 15, createdAt: '2023-11-01', tags: ['Rank', 'Predator', 'Safe']
    },
    {
        id: 'l7', title: 'Robux 10,000 | Best Rate | Tax Covered', description: 'Get Robux for your Roblox account. We cover the transfer tax.',
        price: 85.00, gameSlug: 'roblox', categoryType: 'CURRENCY', sellerId: 's2', status: 'ACTIVE', seller: SELLER_PROFILES[1],
        deliveryTimeHours: 24, viewCount: 2000, ordersCount: 300, rating: 4.8, reviewCount: 100, createdAt: '2023-09-20', tags: ['Robux', 'Tax Covered']
    },
    {
        id: 'l8', title: 'GTA 5 Modded Account with $1B', description: 'Fully modded GTA 5 account with cash, rank, and unlocks.',
        price: 29.99, gameSlug: 'grand-theft-auto-5', categoryType: 'ACCOUNTS', sellerId: 's5', status: 'ACTIVE', seller: SELLER_PROFILES[4],
        deliveryTimeHours: 1, viewCount: 3500, ordersCount: 600, rating: 4.6, reviewCount: 200, createdAt: '2023-10-05', tags: ['Modded', 'Cash', 'Unlocks']
    },
    {
        id: 'l9', title: 'Clash Royale Max Level Account', description: 'Maxed out cards and tower level.',
        price: 120.00, gameSlug: 'clash-royale', categoryType: 'ACCOUNTS', sellerId: 's3', status: 'ACTIVE', seller: SELLER_PROFILES[2],
        deliveryTimeHours: 1, viewCount: 400, ordersCount: 15, rating: 5.0, reviewCount: 8, createdAt: '2023-10-25', tags: ['Max Level', 'All Cards']
    },
    {
        id: 'l10', title: 'PoE 2 Exalted Orbs x10', description: 'Prepare for the new league with currency.',
        price: 12.50, gameSlug: 'path-of-exile-2', categoryType: 'CURRENCY', sellerId: 's2', status: 'ACTIVE', seller: SELLER_PROFILES[1],
        deliveryTimeHours: 0.5, viewCount: 800, ordersCount: 150, rating: 4.8, reviewCount: 50, createdAt: '2023-11-10', tags: ['Currency', 'Fast']
    },
    // Added more variety to reach ~20 listings as requested
    { id: 'l11', title: 'LoL Coaching 1 Hour', description: 'One hour of personalized coaching with a Challenger player.', price: 20.00, gameSlug: 'league-of-legends', categoryType: 'COACHING', sellerId: 's1', status: 'ACTIVE', seller: SELLER_PROFILES[0], deliveryTimeHours: 1, viewCount: 100, ordersCount: 10, rating: 5.0, reviewCount: 5, createdAt: '2023-11-12', tags: ['Coaching', 'Replay Review'] },
    { id: 'l12', title: 'Tarkov Rubles 10M', description: 'Fast delivery of 10 million Tarkov Rubles to your stash.', price: 5.99, gameSlug: 'escape-from-tarkov', categoryType: 'CURRENCY', sellerId: 's2', status: 'ACTIVE', seller: SELLER_PROFILES[1], deliveryTimeHours: 0.2, viewCount: 250, ordersCount: 90, rating: 4.9, reviewCount: 30, createdAt: '2023-11-12', tags: ['Rubles', 'Tarkov'] },
    { id: 'l13', title: 'Rust 50k Sulfur', description: 'Get 50,000 sulfur delivered to your base in Rust.', price: 4.99, gameSlug: 'rust', categoryType: 'ITEMS', sellerId: 's2', status: 'ACTIVE', seller: SELLER_PROFILES[1], deliveryTimeHours: 0.5, viewCount: 150, ordersCount: 40, rating: 4.7, reviewCount: 15, createdAt: '2023-11-12', tags: ['Sulfur', 'Resources'] },
    { id: 'l14', title: 'CS2 Knife Skin (Doppler)', description: 'Rare Doppler knife skin for Counter-Strike 2.', price: 350.00, gameSlug: 'counter-strike-2', categoryType: 'ITEMS', sellerId: 's3', status: 'ACTIVE', seller: SELLER_PROFILES[2], deliveryTimeHours: 1, viewCount: 900, ordersCount: 2, rating: 5.0, reviewCount: 1, createdAt: '2023-11-12', tags: ['Skin', 'Rare'] },
    { id: 'l15', title: 'Steam $50 Gift Card', description: 'Digital Steam gift card delivered instantly via code.', price: 52.00, gameSlug: 'steam', categoryType: 'GIFT_CARDS', sellerId: 's4', status: 'ACTIVE', seller: SELLER_PROFILES[3], deliveryTimeHours: 0.1, viewCount: 1200, ordersCount: 500, rating: 5.0, reviewCount: 400, createdAt: '2023-11-12', tags: ['Gift Card', 'Steam'] },
]

export const REVIEWS: Review[] = [
    { id: 'r1', listingId: 'l1', userId: 'u1', reviewerName: 'Gamer123', reviewerAvatar: 'https://placehold.co/40x40/3B82F6/FFFFFF?text=G1', rating: 5, comment: 'Super fast delivery and great communication.', createdAt: '2023-11-01', helpfulCount: 5 },
    { id: 'r2', listingId: 'l2', userId: 'u2', reviewerName: 'OSRS_Main', reviewerAvatar: 'https://placehold.co/40x40/00FF88/000000?text=OM', rating: 5, comment: 'Instant delivery as promised. Legit seller.', createdAt: '2023-10-28', helpfulCount: 12 },
    { id: 'r3', listingId: 'l1', userId: 'u3', reviewerName: 'NoobMaster', reviewerAvatar: 'https://placehold.co/40x40/FF5555/FFFFFF?text=NM', rating: 4, comment: 'Good service but took a bit longer than expected.', createdAt: '2023-10-30', helpfulCount: 2 },
    { id: 'r4', listingId: 'l3', userId: 'u4', reviewerName: 'ValoPro', reviewerAvatar: 'https://placehold.co/40x40/FFB800/000000?text=VP', rating: 5, comment: 'Amazing account, exactly as described.', createdAt: '2023-11-05', helpfulCount: 8 },
    { id: 'r5', listingId: 'l4', userId: 'u5', reviewerName: 'WoWFan', reviewerAvatar: 'https://placehold.co/40x40/A855F7/FFFFFF?text=WF', rating: 5, comment: 'Smooth run, these guys are pros.', createdAt: '2023-11-08', helpfulCount: 4 },
]

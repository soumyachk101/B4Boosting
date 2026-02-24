import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
    console.log('🌱 Seeding database...')

    // Clean existing data
    await prisma.review.deleteMany()
    await prisma.orderItem.deleteMany()
    await prisma.order.deleteMany()
    await prisma.listing.deleteMany()
    await prisma.game.deleteMany()
    await prisma.sellerProfile.deleteMany()
    await prisma.user.deleteMany()

    // Create test users with seller profiles
    const passwordHash = await hash('password123', 12)

    const sellerUsers = await Promise.all([
        prisma.user.create({
            data: {
                email: 'proboosterx@b4boosting.com', firstName: 'Pro', lastName: 'BoosterX', passwordHash, role: 'SELLER',
                sellerProfile: {
                    create: {
                        displayName: 'ProBoosterX', avatar: 'https://placehold.co/64x64/00FF88/000000?text=PB',
                        bio: 'Professional boosting team with 5 years of experience.', rating: 4.9, reviewCount: 1240,
                        completionRate: 99.5, totalOrders: 5400, responseTime: '< 5 min', verified: true,
                    }
                }
            },
            include: { sellerProfile: true }
        }),
        prisma.user.create({
            data: {
                email: 'goldminer@b4boosting.com', firstName: 'Gold', lastName: 'Miner', passwordHash, role: 'SELLER',
                sellerProfile: {
                    create: {
                        displayName: 'GoldMiner', avatar: 'https://placehold.co/64x64/FFB800/000000?text=GM',
                        bio: 'Fast and reliable currency delivery.', rating: 4.8, reviewCount: 890,
                        completionRate: 98.2, totalOrders: 3200, responseTime: '< 10 min', verified: true,
                    }
                }
            },
            include: { sellerProfile: true }
        }),
        prisma.user.create({
            data: {
                email: 'eliteaccounts@b4boosting.com', firstName: 'Elite', lastName: 'Accounts', passwordHash, role: 'SELLER',
                sellerProfile: {
                    create: {
                        displayName: 'EliteAccounts', avatar: 'https://placehold.co/64x64/3B82F6/000000?text=EA',
                        bio: 'Premium accounts with lifetime warranty.', rating: 5.0, reviewCount: 450,
                        completionRate: 100, totalOrders: 600, responseTime: '< 15 min', verified: true,
                    }
                }
            },
            include: { sellerProfile: true }
        }),
        prisma.user.create({
            data: {
                email: 'speedyservice@b4boosting.com', firstName: 'Speedy', lastName: 'Service', passwordHash, role: 'SELLER',
                sellerProfile: {
                    create: {
                        displayName: 'SpeedyService', avatar: 'https://placehold.co/64x64/FF5555/000000?text=SS',
                        bio: 'Cheapest and fastest service on the market.', rating: 4.7, reviewCount: 2100,
                        completionRate: 97.0, totalOrders: 8900, responseTime: '< 2 min',
                    }
                }
            },
            include: { sellerProfile: true }
        }),
        prisma.user.create({
            data: {
                email: 'safecarry@b4boosting.com', firstName: 'Safe', lastName: 'Carry', passwordHash, role: 'SELLER',
                sellerProfile: {
                    create: {
                        displayName: 'SafeCarry', avatar: 'https://placehold.co/64x64/A855F7/000000?text=SC',
                        bio: 'Privacy focused boosting service.', rating: 4.9, reviewCount: 670,
                        completionRate: 99.0, totalOrders: 1500, responseTime: '< 8 min',
                    }
                }
            },
            include: { sellerProfile: true }
        }),
    ])

    const sellers = sellerUsers.map(u => u.sellerProfile!)

    // Create a test buyer
    await prisma.user.create({
        data: {
            email: 'test@b4boosting.com', firstName: 'Test', lastName: 'User', passwordHash, role: 'BUYER',
        }
    })

    // Create games
    const games = await Promise.all([
        prisma.game.create({ data: { name: 'League of Legends', slug: 'league-of-legends', image: 'https://placehold.co/384x216/0D1117/00FF88?text=League+of+Legends', categories: JSON.stringify(['BOOSTING', 'ACCOUNTS', 'COACHING']) } }),
        prisma.game.create({ data: { name: 'Valorant', slug: 'valorant', image: 'https://placehold.co/384x216/0D1117/00FF88?text=Valorant', categories: JSON.stringify(['BOOSTING', 'ACCOUNTS', 'COACHING']) } }),
        prisma.game.create({ data: { name: 'World of Warcraft', slug: 'world-of-warcraft', image: 'https://placehold.co/384x216/0D1117/00FF88?text=World+of+Warcraft', categories: JSON.stringify(['BOOSTING', 'CURRENCY', 'ACCOUNTS']) } }),
        prisma.game.create({ data: { name: 'Old School RuneScape', slug: 'old-school-runescape', image: 'https://placehold.co/384x216/0D1117/00FF88?text=OSRS', categories: JSON.stringify(['CURRENCY', 'ACCOUNTS', 'ITEMS', 'BOOSTING']) } }),
        prisma.game.create({ data: { name: 'Fortnite', slug: 'fortnite', image: 'https://placehold.co/384x216/0D1117/00FF88?text=Fortnite', categories: JSON.stringify(['ACCOUNTS', 'ITEMS', 'BOOSTING']) } }),
        prisma.game.create({ data: { name: 'Call of Duty', slug: 'call-of-duty', image: 'https://placehold.co/384x216/0D1117/00FF88?text=Call+of+Duty', categories: JSON.stringify(['BOOSTING', 'ACCOUNTS']) } }),
        prisma.game.create({ data: { name: 'GTA 5', slug: 'grand-theft-auto-5', image: 'https://placehold.co/384x216/0D1117/00FF88?text=GTA+5', categories: JSON.stringify(['ACCOUNTS', 'CURRENCY', 'BOOSTING']) } }),
        prisma.game.create({ data: { name: 'Roblox', slug: 'roblox', image: 'https://placehold.co/384x216/0D1117/00FF88?text=Roblox', categories: JSON.stringify(['CURRENCY', 'ACCOUNTS', 'ITEMS']) } }),
        prisma.game.create({ data: { name: 'Clash Royale', slug: 'clash-royale', image: 'https://placehold.co/384x216/0D1117/00FF88?text=Clash+Royale', categories: JSON.stringify(['BOOSTING', 'ACCOUNTS']) } }),
        prisma.game.create({ data: { name: 'Path of Exile 2', slug: 'path-of-exile-2', image: 'https://placehold.co/384x216/0D1117/00FF88?text=PoE+2', categories: JSON.stringify(['CURRENCY', 'ITEMS', 'BOOSTING']) } }),
    ])

    // Helper to find game by slug
    const g = (slug: string) => games.find(g => g.slug === slug)!

    // Create listings
    const listings = await Promise.all([
        prisma.listing.create({ data: { title: 'Power Leveling 1-30 | Fast & Safe | VPN Included', description: 'Get your account leveled up quickly by our professional boosters.', price: 24.99, gameId: g('league-of-legends').id, categoryType: 'BOOSTING', sellerId: sellers[0].id, deliveryTimeHours: 24, viewCount: 1205, ordersCount: 450, rating: 4.9, reviewCount: 120, tags: JSON.stringify(['Leveling', 'Safe', 'VPN']) } }),
        prisma.listing.create({ data: { title: '100M OSRS Gold | Instant Delivery | Best Price', description: 'Cheap and fast OSRS Gold. We deliver within 5 minutes.', price: 19.99, gameId: g('old-school-runescape').id, categoryType: 'CURRENCY', sellerId: sellers[1].id, deliveryTimeHours: 0.1, viewCount: 5400, ordersCount: 2200, rating: 4.8, reviewCount: 500, tags: JSON.stringify(['Gold', 'Instant', 'Cheap']) } }),
        prisma.listing.create({ data: { title: 'Valorant Radiant Account | All Agents | Vandal Skins', description: 'High tier Valorant account with premium skins and high rank.', price: 199.99, gameId: g('valorant').id, categoryType: 'ACCOUNTS', sellerId: sellers[2].id, deliveryTimeHours: 1, viewCount: 890, ordersCount: 12, rating: 5.0, reviewCount: 5, tags: JSON.stringify(['Radiant', 'Skins', 'Email Change']) } }),
        prisma.listing.create({ data: { title: 'WoW Dragonflight Mythic+ Carry | +20 Key', description: 'Complete a +20 Mythic dungeon with our pro team.', price: 15.00, gameId: g('world-of-warcraft').id, categoryType: 'BOOSTING', sellerId: sellers[3].id, deliveryTimeHours: 1, viewCount: 300, ordersCount: 80, rating: 4.7, reviewCount: 20, tags: JSON.stringify(['Dungeon', 'Mythic+', 'Loot']) } }),
        prisma.listing.create({ data: { title: 'Fortnite Galaxy Skin Account | Rare', description: 'Exclusive Fortnite account with Galaxy skin and other rare items.', price: 49.99, gameId: g('fortnite').id, categoryType: 'ACCOUNTS', sellerId: sellers[2].id, deliveryTimeHours: 1, viewCount: 1500, ordersCount: 45, rating: 5.0, reviewCount: 30, tags: JSON.stringify(['Galaxy Skin', 'Rare', 'Full Access']) } }),
        prisma.listing.create({ data: { title: 'Apex Legends Rank Boost to Predator', description: 'Reach the top rank in Apex Legends with our help.', price: 150.00, gameId: g('league-of-legends').id, categoryType: 'BOOSTING', sellerId: sellers[0].id, deliveryTimeHours: 72, viewCount: 600, ordersCount: 20, rating: 4.9, reviewCount: 15, tags: JSON.stringify(['Rank', 'Predator', 'Safe']) } }),
        prisma.listing.create({ data: { title: 'Robux 10,000 | Best Rate | Tax Covered', description: 'Get Robux for your Roblox account. We cover the transfer tax.', price: 85.00, gameId: g('roblox').id, categoryType: 'CURRENCY', sellerId: sellers[1].id, deliveryTimeHours: 24, viewCount: 2000, ordersCount: 300, rating: 4.8, reviewCount: 100, tags: JSON.stringify(['Robux', 'Tax Covered']) } }),
        prisma.listing.create({ data: { title: 'GTA 5 Modded Account with $1B', description: 'Fully modded GTA 5 account with cash, rank, and unlocks.', price: 29.99, gameId: g('grand-theft-auto-5').id, categoryType: 'ACCOUNTS', sellerId: sellers[4].id, deliveryTimeHours: 1, viewCount: 3500, ordersCount: 600, rating: 4.6, reviewCount: 200, tags: JSON.stringify(['Modded', 'Cash', 'Unlocks']) } }),
        prisma.listing.create({ data: { title: 'Clash Royale Max Level Account', description: 'Maxed out cards and tower level.', price: 120.00, gameId: g('clash-royale').id, categoryType: 'ACCOUNTS', sellerId: sellers[2].id, deliveryTimeHours: 1, viewCount: 400, ordersCount: 15, rating: 5.0, reviewCount: 8, tags: JSON.stringify(['Max Level', 'All Cards']) } }),
        prisma.listing.create({ data: { title: 'PoE 2 Exalted Orbs x10', description: 'Prepare for the new league with currency.', price: 12.50, gameId: g('path-of-exile-2').id, categoryType: 'CURRENCY', sellerId: sellers[1].id, deliveryTimeHours: 0.5, viewCount: 800, ordersCount: 150, rating: 4.8, reviewCount: 50, tags: JSON.stringify(['Currency', 'Fast']) } }),
        prisma.listing.create({ data: { title: 'LoL Coaching 1 Hour', description: 'One hour of personalized coaching with a Challenger player.', price: 20.00, gameId: g('league-of-legends').id, categoryType: 'COACHING', sellerId: sellers[0].id, deliveryTimeHours: 1, viewCount: 100, ordersCount: 10, rating: 5.0, reviewCount: 5, tags: JSON.stringify(['Coaching', 'Replay Review']) } }),
        prisma.listing.create({ data: { title: 'Tarkov Rubles 10M', description: 'Fast delivery of 10 million Tarkov Rubles to your stash.', price: 5.99, gameId: g('path-of-exile-2').id, categoryType: 'CURRENCY', sellerId: sellers[1].id, deliveryTimeHours: 0.2, viewCount: 250, ordersCount: 90, rating: 4.9, reviewCount: 30, tags: JSON.stringify(['Rubles', 'Tarkov']) } }),
        prisma.listing.create({ data: { title: 'CS2 Knife Skin (Doppler)', description: 'Rare Doppler knife skin for Counter-Strike 2.', price: 350.00, gameId: g('valorant').id, categoryType: 'ITEMS', sellerId: sellers[2].id, deliveryTimeHours: 1, viewCount: 900, ordersCount: 2, rating: 5.0, reviewCount: 1, tags: JSON.stringify(['Skin', 'Rare']) } }),
        prisma.listing.create({ data: { title: 'Steam $50 Gift Card', description: 'Digital Steam gift card delivered instantly via code.', price: 52.00, gameId: g('roblox').id, categoryType: 'GIFT_CARDS', sellerId: sellers[3].id, deliveryTimeHours: 0.1, viewCount: 1200, ordersCount: 500, rating: 5.0, reviewCount: 400, tags: JSON.stringify(['Gift Card', 'Steam']) } }),
        prisma.listing.create({ data: { title: 'Rust 50k Sulfur', description: 'Get 50,000 sulfur delivered to your base in Rust.', price: 4.99, gameId: g('fortnite').id, categoryType: 'ITEMS', sellerId: sellers[1].id, deliveryTimeHours: 0.5, viewCount: 150, ordersCount: 40, rating: 4.7, reviewCount: 15, tags: JSON.stringify(['Sulfur', 'Resources']) } }),
    ])

    // Create reviews for the first couple of listings
    const testBuyer = await prisma.user.findUnique({ where: { email: 'test@b4boosting.com' } })
    if (testBuyer) {
        await Promise.all([
            prisma.review.create({ data: { listingId: listings[0].id, userId: testBuyer.id, reviewerName: 'Gamer123', rating: 5, comment: 'Super fast delivery and great communication.', helpfulCount: 5 } }),
            prisma.review.create({ data: { listingId: listings[1].id, userId: testBuyer.id, reviewerName: 'OSRS_Main', rating: 5, comment: 'Instant delivery as promised. Legit seller.', helpfulCount: 12 } }),
            prisma.review.create({ data: { listingId: listings[0].id, userId: testBuyer.id, reviewerName: 'NoobMaster', rating: 4, comment: 'Good service but took a bit longer than expected.', helpfulCount: 2 } }),
            prisma.review.create({ data: { listingId: listings[2].id, userId: testBuyer.id, reviewerName: 'ValoPro', rating: 5, comment: 'Amazing account, exactly as described.', helpfulCount: 8 } }),
            prisma.review.create({ data: { listingId: listings[3].id, userId: testBuyer.id, reviewerName: 'WoWFan', rating: 5, comment: 'Smooth run, these guys are pros.', helpfulCount: 4 } }),
        ])
    }

    console.log('✅ Seeded successfully!')
    console.log(`   - 6 users (1 buyer, 5 sellers)`)
    console.log(`   - 5 seller profiles`)
    console.log(`   - 10 games`)
    console.log(`   - 15 listings`)
    console.log(`   - 5 reviews`)
    console.log(`\n   Test buyer: test@b4boosting.com / password123`)
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect())

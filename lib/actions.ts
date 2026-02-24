"use server"

import prisma from "./prisma"

export async function getGames() {
    return prisma.game.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })
}

export async function getGameBySlug(slug: string) {
    return prisma.game.findUnique({
        where: { slug }
    })
}

export async function getTopListingsByCategory(categoryType: string, take: number = 6) {
    return prisma.listing.findMany({
        where: { categoryType, status: 'ACTIVE' },
        take,
        include: {
            game: true,
            seller: true
        },
        orderBy: {
            viewCount: 'desc'
        }
    })
}

export async function getListingById(id: string) {
    return prisma.listing.findUnique({
        where: { id },
        include: {
            game: true,
            seller: true,
            reviews: {
                include: {
                    user: true
                }
            }
        }
    })
}

export async function getListingsByGame(gameId: string) {
    return prisma.listing.findMany({
        where: { gameId, status: 'ACTIVE' },
        include: {
            seller: true,
            game: true
        }
    })
}

export async function getSellerProfile(id: string) {
    return prisma.sellerProfile.findUnique({
        where: { id },
        include: {
            user: true,
            listings: {
                where: { status: 'ACTIVE' },
                include: { game: true }
            }
        }
    })
}

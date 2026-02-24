import { NavItem, CategoryType } from '@/types'
import { Sword, CheckCircle2, MessageCircle, RefreshCw, Zap, Trophy, Coins, User, Gift, Monitor } from 'lucide-react'

export const NAV_ITEMS: NavItem[] = [
    {
        label: 'Boosting',
        href: '/categories/boosting',
        featured: true,
        subItems: [
            { label: 'League of Legends', href: '/games/league-of-legends' },
            { label: 'Valorant', href: '/games/valorant' },
            { label: 'World of Warcraft', href: '/games/world-of-warcraft' },
            { label: 'Apex Legends', href: '/games/apex-legends' },
        ]
    },
    {
        label: 'Currency',
        href: '/categories/currency',
        subItems: [
            { label: 'OSRS Gold', href: '/games/old-school-runescape' },
            { label: 'WoW Gold', href: '/games/world-of-warcraft' },
            { label: 'PoE Orbs', href: '/games/path-of-exile-2' },
            { label: 'Lost Ark Gold', href: '/games/lost-ark' },
        ]
    },
    {
        label: 'Accounts',
        href: '/categories/accounts',
        subItems: [
            { label: 'Fortnite Accounts', href: '/games/fortnite' },
            { label: 'LoL Accounts', href: '/games/league-of-legends' },
            { label: 'Valorant Accounts', href: '/games/valorant' },
            { label: 'CS2 Accounts', href: '/games/counter-strike-2' },
        ]
    },
    {
        label: 'Items',
        href: '/categories/items',
        subItems: [
            { label: 'Dota 2 Skins', href: '/games/dota-2' },
            { label: 'CS2 Skins', href: '/games/counter-strike-2' },
            { label: 'Rust Items', href: '/games/rust' },
        ]
    },
    {
        label: 'Gift Cards',
        href: '/categories/gift-cards',
        subItems: [
            { label: 'Steam', href: '/gift-cards/steam' },
            { label: 'PSN', href: '/gift-cards/psn' },
            { label: 'Xbox', href: '/gift-cards/xbox' },
        ]
    },
]

export const GAMES_LIST = [
    { slug: 'league-of-legends', name: 'League of Legends', categories: ['BOOSTING', 'ACCOUNTS', 'COACHING'] as CategoryType[] },
    { slug: 'valorant', name: 'Valorant', categories: ['BOOSTING', 'ACCOUNTS', 'COACHING'] as CategoryType[] },
    { slug: 'world-of-warcraft', name: 'World of Warcraft', categories: ['BOOSTING', 'CURRENCY', 'ACCOUNTS'] as CategoryType[] },
    { slug: 'old-school-runescape', name: 'Old School RuneScape', categories: ['CURRENCY', 'ACCOUNTS', 'ITEMS', 'BOOSTING'] as CategoryType[] },
    { slug: 'fortnite', name: 'Fortnite', categories: ['ACCOUNTS', 'ITEMS', 'BOOSTING'] as CategoryType[] },
    { slug: 'call-of-duty', name: 'Call of Duty', categories: ['BOOSTING', 'ACCOUNTS'] as CategoryType[] },
    { slug: 'grand-theft-auto-5', name: 'GTA 5', categories: ['ACCOUNTS', 'CURRENCY', 'BOOSTING'] as CategoryType[] },
    { slug: 'roblox', name: 'Roblox', categories: ['CURRENCY', 'ACCOUNTS', 'ITEMS'] as CategoryType[] },
    { slug: 'clash-royale', name: 'Clash Royale', categories: ['BOOSTING', 'ACCOUNTS'] as CategoryType[] },
    { slug: 'path-of-exile-2', name: 'Path of Exile 2', categories: ['CURRENCY', 'ITEMS', 'BOOSTING'] as CategoryType[] },
]

export const PAYMENT_METHODS = [
    { name: 'Visa', icon: 'visa' },
    { name: 'Mastercard', icon: 'mastercard' },
    { name: 'Amex', icon: 'amex' },
    { name: 'Google Pay', icon: 'google-pay' },
    { name: 'Apple Pay', icon: 'apple-pay' },
    { name: 'Discover', icon: 'discover' },
    { name: 'PayPal', icon: 'paypal' },
]

export const TRUST_BADGES = [
    {
        title: 'Money-Back Guarantee',
        description: 'Not satisfied? Get a full refund within 24 hours of your purchase if requirements aren\'t met.',
        icon: CheckCircle2
    },
    {
        title: '24/7 Live Support',
        description: 'Our support team is always online to help you with any questions or issues.',
        icon: MessageCircle
    }
]

export const HOW_IT_WORKS_STEPS = [
    {
        step: 1,
        title: 'Find The Best Product',
        description: 'Browse thousands of offers from verified sellers.',
        icon: CheckCircle2
    },
    {
        step: 2,
        title: 'Make a Payment',
        description: 'Pay securely with your preferred method.',
        icon: Gift
    },
    {
        step: 3,
        title: 'Receive Your Order',
        description: 'Get your boost, account, or currency instantly.',
        icon: Coins
    },
    {
        step: 4,
        title: 'Back To Game',
        description: 'Enjoy your upgraded gaming experience.',
        icon: Monitor
    }
]

export const RANK_TIERS = {
    'league-of-legends': ['Iron', 'Bronze', 'Silver', 'Gold', 'Platinum', 'Emerald', 'Diamond', 'Master', 'Grandmaster', 'Challenger'],
    'valorant': ['Iron', 'Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Ascendant', 'Immortal', 'Radiant'],
    'overwatch-2': ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Master', 'Grandmaster', 'Top 500'],
}

// ═══ END OF FILE ═══

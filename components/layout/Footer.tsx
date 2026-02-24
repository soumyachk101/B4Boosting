import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Github, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-bg-secondary border-t border-border pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="h-8 w-8 bg-accent-green rotate-45 flex items-center justify-center">
                                <div className="h-4 w-4 bg-black -rotate-45" />
                            </div>
                            <span className="font-display font-bold text-2xl tracking-tight text-white">
                                B4Boosting
                            </span>
                        </Link>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                            The #1 marketplace for gamers. Buy and sell boosting, accounts, currency, and items securely. Level up your gaming experience today.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Instagram, Youtube, Github].map((Icon, i) => (
                                <a key={i} href="#" className="h-10 w-10 rounded-full bg-bg-elevated flex items-center justify-center text-gray-400 hover:bg-accent-green hover:text-black transition-all">
                                    <Icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider">Services</h4>
                        <ul className="space-y-4">
                            {['Boosting', 'Currency', 'Accounts', 'Items', 'Coaching', 'Gift Cards'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-sm text-gray-400 hover:text-accent-green transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider">Support</h4>
                        <ul className="space-y-4">
                            {['Help Center', 'Terms of Service', 'Privacy Policy', 'Refund Policy', 'Contact Us', 'Seller Application'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-sm text-gray-400 hover:text-accent-green transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-gray-400">
                                <MapPin className="h-5 w-5 text-accent-green shrink-0" />
                                <span>123 Gaming Street, Suite 404<br />San Francisco, CA 94107</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-400">
                                <Mail className="h-5 w-5 text-accent-green shrink-0" />
                                <span>support@b4boosting.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-400">
                                <Phone className="h-5 w-5 text-accent-green shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">
                        © 2026 B4Boosting Inc. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-600 uppercase tracking-widest font-bold">Secure Payment</span>
                        {/* Payment icons could go here */}
                    </div>
                </div>
            </div>
        </footer>
    )
}

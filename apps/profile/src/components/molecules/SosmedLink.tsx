import React from 'react'
import { FaTiktok, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

type Props = {}

const socialMediaLinks = [
    { href: "https://tiktok.com", icon: <FaTiktok />, color: "text-black hover:text-gray-700" },
    { href: "https://twitter.com", icon: <FaTwitter />, color: "text-blue-400 hover:text-blue-600" },
    { href: "https://instagram.com", icon: <FaInstagram />, color: "text-pink-500 hover:text-pink-700" },
    { href: "https://youtube.com", icon: <FaYoutube />, color: "text-red-600 hover:text-red-800" },
];

export default function SosmedLink({}: Props) {
    return (
        <div className="flex gap-4 mb-4">
            {socialMediaLinks.map((link, index) => (
                <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={link.color}
                >
                    {link.icon}
                </a>
            ))}
        </div>
    );
}
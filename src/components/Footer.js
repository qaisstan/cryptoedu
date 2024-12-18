"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaDiscord } from "react-icons/fa"; // Discord icon from react-icons
import { AiOutlineTwitter } from "react-icons/ai"; // Use as X logo (from react-icons)

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-gray-300"
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Crypto Edu</h2>
            <p className="text-sm">
              Empowering you with the knowledge to master cryptocurrency and
              blockchain.
            </p>
            <ul className="space-y-2 mt-4">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="flex space-x-4">
              {/* Discord */}
              <Link
                href="https://discord.com/invite/example"
                aria-label="Discord"
              >
                <FaDiscord className="h-6 w-6 hover:text-blue-400 transition-colors" />
              </Link>
              {/* X */}
              <Link href="https://twitter.com/example" aria-label="X">
                <AiOutlineTwitter className="h-6 w-6 hover:text-blue-400 transition-colors" />
              </Link>
            </div>
          </div>

          {/* Educational Resources Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Learn Crypto
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/guides/basics"
                  className="hover:text-white transition-colors"
                >
                  Cryptocurrency Basics
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/blockchain"
                  className="hover:text-white transition-colors"
                >
                  Blockchain Explained
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/security"
                  className="hover:text-white transition-colors"
                >
                  Crypto Security Tips
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Stay Updated
            </h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for the latest crypto insights and
              educational content.
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm">
            © {currentYear} Crypto Edu. All rights reserved.
          </div>
          <div className="flex space-x-4 text-sm">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookie-policy"
              className="hover:text-white transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

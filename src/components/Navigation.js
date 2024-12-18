"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Menu,
  Home,
  Briefcase,
  BookOpen,
  Globe,
  Wallet,
  Search,
  Cpu,
  ChartBar,
  PhoneCall,
  Code,
  ChevronDown,
  Zap,
  Repeat,
  PieChart,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle } from "@/components/ui/dialog";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  {
    name: "Learn Crypto",
    href: "/learn",
    icon: BookOpen,
    dropdownItems: [
      { name: "What is Crypto?", href: "/learn/what-is-crypto", icon: Globe },
      { name: "Crypto Wallets", href: "/learn/wallets", icon: Wallet },
      { name: "Blockchain Basics", href: "/learn/blockchain", icon: Cpu },
      { name: "Trading Strategies", href: "/learn/trading", icon: ChartBar },
      { name: "DeFi Explained", href: "/learn/defi", icon: PieChart },
      { name: "Security Tips", href: "/learn/security", icon: Search },
    ],
  },
  { name: "Resources", href: "/resources", icon: Briefcase },
  { name: "About", href: "/about", icon: PhoneCall },
  { name: "Contact", href: "/contact", icon: PhoneCall },
];

export default function Navbar({ isMobile = false }) {
  const [isSheetOpen, setSheetOpen] = useState(false);

  if (isMobile) {
    return (
      <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="h-6 w-6" aria-label="Menu" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <DialogTitle className="sr-only">Navigation Menu</DialogTitle>
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <React.Fragment key={item.name}>
                {item.dropdownItems ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="flex items-center justify-between w-full"
                      >
                        <div className="flex items-center space-x-2">
                          <item.icon className="h-4 w-4" />
                          <span>{item.name}</span>
                        </div>
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {item.dropdownItems.map((dropdownItem) => (
                        <DropdownMenuItem key={dropdownItem.name} asChild>
                          <Link
                            href={dropdownItem.href}
                            className="flex items-center space-x-2"
                            onClick={() => setSheetOpen(false)}
                          >
                            <dropdownItem.icon className="h-4 w-4" />
                            <span>{dropdownItem.name}</span>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button
                    variant="ghost"
                    asChild
                    className="flex items-center space-x-2 w-full justify-start"
                  >
                    <Link href={item.href} onClick={() => setSheetOpen(false)}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  </Button>
                )}
              </React.Fragment>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex space-x-4 border-none"
    >
      {navItems.map((item) =>
        item.dropdownItems ? (
          <DropdownMenu key={item.name}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-1">
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {item.dropdownItems.map((dropdownItem) => (
                <DropdownMenuItem key={dropdownItem.name} asChild>
                  <Link
                    href={dropdownItem.href}
                    className="flex items-center space-x-2"
                  >
                    <dropdownItem.icon className="h-4 w-4" />
                    <span>{dropdownItem.name}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button
            key={item.name}
            variant="ghost"
            asChild
            className="flex items-center space-x-1"
          >
            <Link href={item.href}>
              <item.icon className="h-4 w-4" />
              <span>{item.name}</span>
            </Link>
          </Button>
        )
      )}
    </motion.nav>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  Home,
  BookOpen,
  Users,
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
    name: "Learn",
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
  { name: "Resources", href: "/resources", icon: Code },
  { name: "About Us", href: "/about", icon: Users },
  { name: "Contact", href: "/contact", icon: PhoneCall },
];

export default function Header() {
  return (
    <header className="relative z-50 flex items-center justify-between p-4 bg-white shadow-md">
      {/* Company Logo */}
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="CryptoEdu"
            width={100}
            height={40}
            priority
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-4">
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
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet>
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
                      <Link href={item.href}>
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
      </div>
    </header>
  );
}

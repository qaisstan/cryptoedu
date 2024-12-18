"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image src="/logo.svg" alt="CryptoEdu" width={40} height={40} />
        <span className="ml-2 text-lg font-semibold">CryptoEdu</span>
      </Link>

      {/* Navigation Menu */}
      <NavigationMenu>
        <NavigationMenuList>
          {/* Getting Started Section */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Welcome to CryptoEdu
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Learn crypto and blockchain concepts with ease.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Introduction">
                  A beginner's guide to CryptoEdu.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to set up your learning environment.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Typography styles for your projects.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Components Section */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Docs</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem href="/docs" title="Documentation">
                  Access full documentation for CryptoEdu.
                </ListItem>
                <ListItem href="/docs/primitives/hover-card" title="Hover Card">
                  Learn to use interactive UI components.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Login Link */}
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className="px-4 py-2 text-blue-500 hover:underline">
                Documentation
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuViewport />
      </NavigationMenu>

      {/* Login Button */}
      <Link href="/login" className="text-blue-500 hover:underline">
        Login
      </Link>
    </header>
  );
};

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;

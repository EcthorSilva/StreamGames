"use client"

import Link from "next/link" 
import * as React from "react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar/navbar.jsx"
import { ThemeToggle } from "./ThemeToggle";
import { MobileNavbar } from "./MobileNavbar" 

export function Header() {
  return (
    <nav className="py-2 border-0">
      <div className="container mx-auto flex flex-wrap justify-around">
        <ThemeToggle />
        <div className="hidden md:flex">
          <Navbar />
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Link href="/login">Login</Link>
          </Button>
          <Button className={"hidden md:flex"}>
            <Link href="/signup">Sign Up</Link>
          </Button>
          {/* Mobile Menu */}
          <div className="md:hidden">
            <div className="md:hidden">
            <MobileNavbar />
          </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
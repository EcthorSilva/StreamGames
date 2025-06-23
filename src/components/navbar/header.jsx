"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar/navbar.jsx"
import { Logo } from "./logo";

export function Header() {
  return (
    <nav className="py-2 border-0">
      <div className="container mx-auto flex flex-wrap justify-around">
        <Logo/>
        <div className="hidden md:flex">
          <Navbar />
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            Login
          </Button>
          <Button>Sign Up</Button>
          {/* Mobile Menu */}
          <div className="md:hidden">
            {/* <MobileNavbar /> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const genres = [
    { title: "Ação", href: "/games/genero/acao" },
    { title: "Aventura", href: "/games/genero/aventura" },
    { title: "RPG", href: "/games/genero/rpg" },
    { title: "Estratégia", href: "/games/genero/estrategia" },
    { title: "Indie", href: "/games/genero/indie" },
    { title: "Esportes & Corrida", href: "/games/genero/esportes-corrida" },
]

export function MobileNavbar() {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="outline" size="icon">
                    <Menu className="h-5 w-5" />
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="flex flex-col gap-1 p-4 pb-20">
                    <MobileLink href="/">Home</MobileLink>
                    
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className="border-none">
                            <AccordionTrigger className="p-3 text-base font-medium hover:bg-muted rounded-md hover:no-underline">
                                Explorar
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-2 pl-6 pr-2">
                                <MobileLink href="/games/plataforma/pc">PC</MobileLink>
                                <MobileLink href="/games/plataforma/playstation">PlayStation</MobileLink>
                                <MobileLink href="/games/plataforma/xbox">Xbox</MobileLink>
                                <MobileLink href="/games/plataforma/nintendo">Nintendo Switch</MobileLink>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-none">
                            <AccordionTrigger className="p-3 text-base font-medium hover:bg-muted rounded-md hover:no-underline">
                                Gêneros
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-2 pl-6 pr-2">
                                {genres.map((genre) => (
                                    <MobileLink key={genre.href} href={genre.href}>{genre.title}</MobileLink>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <MobileLink href="/promocoes">Promoções</MobileLink>
                    <MobileLink href="/news">Notícias</MobileLink>
                    <MobileLink href="/sobrenos">Sobre</MobileLink>
                </div>
            </DrawerContent>
        </Drawer>
    )
}

function MobileLink({ href, children }) {
    return (
        <DrawerClose asChild>
            <Link 
                href={href} 
                className="block p-3 rounded-md hover:bg-muted text-base font-medium"
            >
                {children}
            </Link>
        </DrawerClose>
    )
}
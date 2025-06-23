"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"
import { Store, Gamepad2, Laptop, Tv, Newspaper, MessageSquare, HelpCircle, Star, Sparkles, Clock } from "lucide-react"


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function Navbar() {
    return (
        <NavigationMenu viewport={false} className={"z-50"}>
            <NavigationMenuList>
                {/* Menu Principal */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Explorar</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-2 md:w-[400px] lg:w-[600px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-4">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                                        href="/"
                                    >
                                        <div className="mt-4 mb-2 text-lg font-medium">
                                            Stream Games
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-tight">
                                            As melhores ofertas para todas as plataformas, em um só lugar.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/games/plataforma/pc" title="PC">
                                Encontre jogos para Steam, Epic Games, GOG e mais.
                            </ListItem>
                            <ListItem href="/games/plataforma/playstation" title="PlayStation">
                                Ofertas para PS4 e PS5. Jogos, DLCs e assinaturas.
                            </ListItem>
                            <ListItem href="/games/plataforma/xbox" title="Xbox">
                                Explore o catálogo do Xbox One e Series S | X.
                            </ListItem>
                            <ListItem href="/games/plataforma/nintendo" title="Nintendo Switch" >
                                Os melhores jogos para o console híbrido da Nintendo.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                {/* Menu de Generos */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Generos</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {genres.map((genre) => (
                                <ListItem
                                    key={genre.title}
                                    title={genre.title}
                                    href={genre.href}
                                >
                                    {genre.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                {/* Promoções */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/promocoes">Promoções</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                {/* Comunidade */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Comunidade</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[300px] gap-3 ">
                            <ListItem title="Noticias" href="/noticias" icon={Newspaper}>Fique por dentro das últimas notícias do mundo dos games.</ListItem>
                            <ListItem title="Fóruns" href="/foruns" icon={MessageSquare}>Converse com outros jogadores e tire suas dúvidas.</ListItem>
                            <ListItem title="Lojas Parceiras" href="/lojas-parceiras" icon={Store}>Conheça todas as lojas que confiamos.</ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                {/* Suporte */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Suporte</NavigationMenuTrigger>
                    <NavigationMenuContent>
                         <ul className="grid w-[300px] gap-3">
                           <ListItem title="FAQ (Dúvidas Frequentes)" href="/faq" icon={HelpCircle}>Encontre respostas para as perguntas mais comuns.</ListItem>
                           <ListItem title="Fale Conosco" href="/contato" icon={MessageSquare}>Entre em contato com nossa equipe de suporte.</ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                {/* Sobre Nós */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link href="/sobrenos">Sobre</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

function ListItem({ title, children, href, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

// Dados para os Gêneros mais populares
const genres = [
  {
    title: "Ação",
    href: "/games/genero/acao",
    description: "Prepare-se para combates intensos, tiroteios e muita adrenalina.",
  },
  {
    title: "Aventura",
    href: "/games/genero/aventura",
    description: "Explore mundos vastos, desvende mistérios e embarque em jornadas épicas.",
  },
  {
    title: "RPG",
    href: "/games/genero/rpg",
    description: "Crie seu personagem, evolua habilidades e mergulhe em histórias profundas.",
  },
  {
    title: "Estratégia",
    href: "/games/genero/estrategia",
    description: "Comande exércitos, gerencie recursos e prove sua genialidade tática.",
  },
  {
    title: "Indie",
    href: "/games/genero/indie",
    description: "Descubra pérolas criativas e experiências únicas de desenvolvedores independentes.",
  },
  {
    title: "Esportes & Corrida",
    href: "/games/genero/esportes-corrida",
    description: "Sinta a velocidade das pistas e a emoção das maiores competições esportivas.",
  },
]
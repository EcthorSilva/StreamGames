import { Separator } from "@/components/ui/separator";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import { Logo } from "../navbar/logo";

const footerSections = [
  {
    title: "Jogos",
    links: [
      { title: "Promoções", href: "/promocoes" },
      { title: "Próximos Lançamentos", href: "/lancamentos" },
      { title: "Jogos Gratuitos", href: "/jogos-gratuitos" },
      { title: "Mais Populares", href: "/populares" },
      { title: "Análises", href: "/analises" },
    ],
  },
  {
    title: "Plataformas",
    links: [
      { title: "PC", href: "/plataforma/pc" },
      { title: "PlayStation", href: "/plataforma/playstation" },
      { title: "Xbox", href: "/plataforma/xbox" },
      { title: "Nintendo Switch", href: "/plataforma/nintendo" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { title: "Notícias", href: "/noticias" },
      { title: "Comunidade", href: "/comunidade" },
      { title: "Apoie-um-Criador", href: "/apoie-um-criador" },
      { title: "Suporte (FAQ)", href: "/faq" },
      { title: "Lojas Parceiras", href: "/lojas-parceiras" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { title: "Sobre Nós", href: "/sobre-nos" },
      { title: "Contato", href: "/contato" },
      { title: "Termos de Serviço", href: "/termos" },
      { title: "Política de Privacidade", href: "/privacidade" },
    ],
  },
];

export default function Footer() {
    return (
        <footer className="">
            <div className="max-w-screen-xl mx-auto">
                <div className="py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-8 gap-y-10 px-6 xl:px-0">
                    <div className="col-span-full xl:col-span-2">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <Logo className="h-8 w-auto" />
                        </Link>

                        <p className="mt-4 text-muted-foreground">
                            As melhores ofertas para todas as plataformas, em um só lugar.
                        </p>
                    </div>

                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h6 className="font-semibold text-gray-900 dark:text-white">{section.title}</h6>
                            <ul className="mt-6 space-y-4">
                                {section.links.map((link) => (
                                    <li key={link.title}>
                                        <Link
                                            href={link.href}
                                            className="text-muted-foreground hover:text-foreground"
                                        >
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <Separator />

                <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
                    {/* Copyright */}
                    <span className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()}{" "}
                        <Link href="/" target="_blank" className="hover:underline">
                            StreamGames
                        </Link>
                        . All rights reserved.
                    </span>

                    {/* Social Icons */}
                    <div className="flex items-center gap-5 text-muted-foreground">
                        <Link href="#" target="_blank" className="hover:text-foreground">
                            <TwitterIcon className="h-5 w-5" />
                        </Link>
                        <Link href="#" target="_blank" className="hover:text-foreground">
                            <DribbbleIcon className="h-5 w-5" />
                        </Link>
                        <Link href="#" target="_blank" className="hover:text-foreground">
                            <TwitchIcon className="h-5 w-5" />
                        </Link>
                        <Link href="https://github.com/EcthorSilva" target="_blank" className="hover:text-foreground">
                            <GithubIcon className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
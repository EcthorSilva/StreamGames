"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { Header } from "@/components/navbar/header";
import Footer from "@/components/footer/Footer";
import { newsData } from "@/data/newsData";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, UserIcon } from "lucide-react";
import { formatTimeAgo } from "@/lib/timeAgo";

export default function NoticiaDetalhePage({ params }) {
    const noticia = newsData.find((n) => n.id.toString() === params.id);

    if (!noticia) {
        notFound();
    }

    return (
        <div>
            <Header />
            <main className="container mx-auto max-w-4xl px-4 py-8 md:py-16">
                <article>
                    <header className="mb-8">
                        <Badge variant="default" className="mb-4">{noticia.category}</Badge>
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight !leading-tight mb-4">{noticia.title}</h1>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <CalendarIcon className="h-4 w-4" />
                                <time dateTime={noticia.date}>{formatTimeAgo(noticia.date)}</time>
                            </div>
                            <div className="flex items-center gap-2">
                                <UserIcon className="h-4 w-4" />
                                <span>Por {noticia.author}</span>
                            </div>
                        </div>
                    </header>
                    
                    <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
                        <Image
                            src={noticia.imageUrl}
                            alt={`Imagem da notícia: ${noticia.title}`}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="prose dark:prose-invert prose-lg max-w-none text-foreground prose-p:text-muted-foreground prose-headings:text-foreground">
                        <p className="lead text-xl text-muted-foreground !leading-relaxed mb-6">
                            {noticia.description}
                        </p>
                        <div className="whitespace-pre-line">
                           {noticia.fullContent}
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
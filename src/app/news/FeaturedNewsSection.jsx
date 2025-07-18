import Link from "next/link";
import Image from "next/image";
import { formatTimeAgo } from "@/lib/timeAgo";
import { User } from "lucide-react";

export default function FeaturedNewsSection({ mainArticle, otherArticles }) {
    if (!mainArticle || !otherArticles) {
        return null;
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
            {/* Noticia em Destaque */}
            <div className="lg:col-span-2 mb-8 lg:mb-0">
                <article className="group">
                    <Link href={`/news/${mainArticle.id}`} className="block overflow-hidden rounded-lg mb-4">
                        <div className="w-full aspect-video relative">
                            <Image
                                src={mainArticle.imageUrl}
                                alt={mainArticle.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                priority
                            />
                        </div>
                    </Link>
                    <Link href={`/news/categoria/${encodeURIComponent(mainArticle.category)}`} className="text-sm font-bold uppercase text-primary">
                        {mainArticle.category}
                    </Link>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight !leading-tight line-clamp-3">
                        <Link href={`/news/${mainArticle.id}`} className="hover:text-muted-foreground">
                            {mainArticle.title}
                        </Link>
                    </h2>
                    <p className="mt-3 text-muted-foreground line-clamp-2">
                        {mainArticle.description}
                    </p>
                    <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
                        <Link href={`/news/autor/${encodeURIComponent(mainArticle.author)}`} className="flex items-center gap-2 hover:text-primary">
                            <User className="h-4 w-4" /> {mainArticle.author}
                        </Link>
                        <span>{formatTimeAgo(mainArticle.date)}</span>
                    </div>
                </article>
            </div>

            {/* Outras Notícias */}
            <div className="lg:col-span-1">
                {/* <h3 className="text-2xl font-bold mb-4">Mais Destaques</h3> */}
                <div className="flex flex-col gap-6">
                    {otherArticles.map((article) => (
                        <article key={article.id} className="flex items-start gap-4 group">
                            <Link href={`/news/${article.id}`} className="block w-24 h-24 sm:w-32 sm:h-24 flex-shrink-0 overflow-hidden rounded-lg">
                                <div className="w-full h-full relative">
                                    <Image
                                        src={article.imageUrl}
                                        alt={article.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </Link>
                            <div>
                                <Link href={`/news/categoria/${encodeURIComponent(article.category)}`} className="text-xs font-bold uppercase text-primary">
                                    {article.category}
                                </Link>
                                <h4 className="font-semibold leading-tight mt-1 line-clamp-2">
                                    <Link href={`/news/${article.id}`} className="hover:text-muted-foreground">
                                        {article.title}
                                    </Link>
                                </h4>
                                <div className="mt-2 text-xs text-muted-foreground">
                                    <span>{formatTimeAgo(article.date)}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
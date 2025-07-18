import Image from "next/image";
import Link from "next/link";
import { formatTimeAgo } from "@/lib/timeAgo";
import { User } from "lucide-react";

export default function MoreNews({ articles }) {
  if (!articles || articles.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="text-3xl font-bold tracking-tight mb-8">Mais Notícias</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <article key={article.id} className="group flex flex-col">
            <Link href={`/news/${article.id}`} className="block overflow-hidden rounded-lg mb-4">
              <div className="w-full aspect-video relative">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </Link>
            <div className="flex flex-col flex-grow">
              <Link href={`/news/categoria/${encodeURIComponent(article.category)}`} className="text-sm font-bold uppercase text-primary">
                {article.category}
              </Link>
              <h3 className="mt-2 text-xl font-bold tracking-tight !leading-tight line-clamp-3 flex-grow">
                <Link href={`/news/${article.id}`} className="hover:text-muted-foreground">
                  {article.title}
                </Link>
              </h3>
              <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
                <Link href={`/news/autor/${encodeURIComponent(article.author)}`} className="flex items-center gap-2 hover:text-primary">
                    <User className="h-4 w-4" /> {article.author}
                </Link>
                <span>{formatTimeAgo(article.date)}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
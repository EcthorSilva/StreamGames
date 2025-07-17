"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatTimeAgo } from "@/lib/timeAgo";
import { Badge } from "@/components/ui/badge";
import { newsData } from "@/data/newsData";


export default function FeaturedNews() {
  return (
    <section className="w-full max-w-7xl mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold"> Notícias em destaque </h2>
        <Link href="/news" className="text-sm text-neutral-600 hover:underline hover:text-neutral-500 transition" > Ver todas </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsData
          .filter((item) => item.featured)
          .map((item) => (
            <article key={item.id} className="flex flex-col group">
              <Link href={`/news/${item.id}`} className="block overflow-hidden rounded-lg">
                <div className="w-full h-60 relative">
                  <Image
                    src={item.imageUrl}
                    alt={`Imagem da notícia: ${item.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
              <div className="flex flex-col flex-grow mt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Badge variant="secondary">{item.category}</Badge>
                  <span>•</span>
                  <time dateTime={item.date}>{formatTimeAgo(item.date)}</time>
                </div>
                <h3 className="mt-2 text-xl font-semibold line-clamp-2">
                  {item.title}
                </h3>
                <p className="mt-2 text-muted-foreground text-sm line-clamp-3 flex-grow">
                  {item.description}
                </p>
                <Link href={`/news/${item.id}`} className="mt-4 font-semibold text-primary hover:underline">
                  Leia mais &rarr;
                </Link>
              </div>
            </article>
        ))}
      </div>
    </section>
  );
}
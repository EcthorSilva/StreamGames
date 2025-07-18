import { Header } from "@/components/navbar/header";
import Footer from "@/components/footer/Footer";
import { newsData } from "@/data/newsData";
import { Separator } from "@/components/ui/separator";

import FeaturedNewsSection from "./FeaturedNewsSection";
import MoreNews from "./MoreNews";

const sortedNews = newsData.sort((a, b) => new Date(b.date) - new Date(a.date));
const mainArticle = sortedNews[0];
const otherArticles = sortedNews.slice(1, 6); 
const moreArticles = sortedNews.slice(6);

export default function NewsPage() {
    return (
        <div>
            <Header />
            <main className="container mx-auto max-w-7xl px-4 py-8">
                <h1 className="text-4xl font-bold tracking-tight mt-6 mb-8">Notícias</h1>
                <FeaturedNewsSection mainArticle={mainArticle}  otherArticles={otherArticles}  />
                <Separator className="my-12" />
                <MoreNews articles={moreArticles} />
            </main>
            <Footer />
        </div>
    );
}
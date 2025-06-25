import { Header } from "@/components/navbar/header";
import Footer from "@/components/footer/Footer";

import HeroCarousel from "./HeroCarousel";
import FeaturedNews from "./FeaturedNews";
import FeaturedGames from "./FeaturedGames";
import DiscoverCarousel from "./DiscoverCarousel";
import PublisherHighlight from "./PublisherHighlight";


export default function HomePage() {
    return (
        <div>
            <Header />
            <HeroCarousel />
            <DiscoverCarousel />
            <PublisherHighlight publisherName="PlayStation Publishing LLC" />
            {/* <PublisherHighlight publisherName="Ubisoft Entertainment" />
            <PublisherHighlight publisherName="Electronic Arts" /> */}
            <FeaturedGames featuredGameIds={[11, 10]} />
            <DiscoverCarousel />
            <FeaturedNews />
            <DiscoverCarousel />
            <Footer />
        </div>
    );
}
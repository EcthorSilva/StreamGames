import HighlightCarousel from "@/components/Home/HighlightCarousel";
import PublisherHighlight from '@/components/Home/PublisherHighlight';
import BannerHighlight from '@/components/Home/BannerHighlight';
import Bestsellers from '@/components/Home/Bestsellers';

import {Header, Footer} from '@/components/Layout';

export const metadata = {
  title: 'Home | StreamGames',
  description: 'Página inicial da loja',
};

export default function Home() {
  return (
    <main>
      <Header />
      {/* Destaques - It’ll blow your mind */}
      <HighlightCarousel title="It’ll blow your mind." items={HighlightCarouselItems} />
      {/* Destaques - Publicadora */}
      <PublisherHighlight title="CAPCOM" products={PublisherHighlightItems} />
      {/* Dastaque - Banner */}
      <BannerHighlight
        img="https://assets.nuuvem.com/image/upload/t_quality_80/v1/highlights/64a55b9a56062d0016292782/ev6lg4t9pg9whbx4yqma.jpg"
        alt="Banner destaque"
        price="R$99,99"
        discount="-50%"
      />
      {/* Destaques - Publicadora */}
      <PublisherHighlight title="CAPCOM" products={PublisherHighlightItems} />
      {/* Dastaque - Banner */}
      <BannerHighlight
        img="https://assets.nuuvem.com/image/upload/t_quality_80/v1/highlights/65257415850bd90019a891d3/gzdstpzumebn04yjmeko.jpg"
        alt="Banner destaque"
        price="R$54,79"
        discount="-60%"
      />
      {/* Destaques - Mais vendidos */}
      <Bestsellers />
      <Footer />
    </main>
  );
}
{/* Itens dos Destaques - It’ll blow your mind */}
const HighlightCarouselItems = [
  {
    image: "https://assets.nuuvem.com/image/upload/t_quality_80/v1/highlights/6317966c632c3d0015f472ec/q9zx384trfvtixe46opy.jpg",
    price: "R$99,99",
    discount: "-50%",
    link: "#",
    alt: "Destaque 1"
  },
  {
    image: "https://assets.nuuvem.com/image/upload/t_quality_80/v1/highlights/623cdb26b88a8a0015c57798/swew2dln6nfzdsmbf2ou.jpg",
    price: "R$47,99",
    discount: "-60%",
    link: "#",
    alt: "Destaque 2"
  },
  {
    image: "https://assets.nuuvem.com/image/upload/t_quality_80/v1/highlights/64da95c6d6cc6e0018ccedde/bxhu05h67vulmu5wajpv.jpg",
    price: "R$54,50",
    discount: "-50%",
    link: "#",
    alt: "Destaque 3"
  },
  {
    image: "https://assets.nuuvem.com/image/upload/t_quality_80/v1/highlights/610c5eb4c883e602c467759f/kaxtu6uycb6jbbeu78jb.jpg",
    price: "R$119,96",
    discount: "-60%",
    link: "#",
    alt: "Destaque 4"
  }
];
{/* Itens dos Destaques - Publicadora */}
const PublisherHighlightItems = [
  {
    title: "Resident Evil",
    img: "https://assets.nuuvem.com/image/upload/t_banner_big/v1/products/635951f2bdc65c2b68ecb095/banners/etxq8vej3ebm0pz0s5rs.jpg",
    price: "R$47,99",
    discount: "-60%",
  },
  {
    title: "Street Fighter V",
    img: "https://assets.nuuvem.com/image/upload/t_banner_big/v1/products/564c95ef69702d648a00011d/banners/jpoaxzjljzw1wiqot603.jpg",
    price: "R$47,99",
    discount: "-60%",
  },
  {
    title: "Resident Evil Village",
    img: "https://assets.nuuvem.com/image/upload/t_banner_big/v1/products/600f36b1c883e6464c052882/banners/tdgiqqtvxmycwabbatg3.jpg",
    price: "R$47,99",
    discount: "-60%",
  },
  {
    title: "Resident Evil 3",
    img: "https://assets.nuuvem.com/image/upload/t_banner_big/v1/products/5df7db71e8d4f2071032bbd1/banners/bt35weatc5dorv6da9jf.jpg",
    price: "R$47,99",
    discount: "-60%",
  }
];
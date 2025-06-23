"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function DiscoverCarousel() {
  return (
    <div className="w-full max-w-7xl mx-auto py-8 px-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        >
        <div className="relative mb-4 h-9">
            <h2 className="text-2xl font-bold hover:text-gray-800 cursor-pointer">
                Descubra algo novo &rsaquo;
            </h2>
            <div className="absolute top-1/2 right-6 -translate-y-1/2 hidden md:flex items-center gap-x-2">
                <CarouselPrevious className="right-0" />
                <CarouselNext className=" right-2 translate-x-full" />
            </div>
        </div>

        <CarouselContent className="-ml-4">
          {games.map((game) => (
            <CarouselItem
            key={game.id}
            className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
            >
              <div className="group cursor-pointer">
                <Card className="bg-transparent border-none overflow-hidden rounded-lg py-0">
                  <CardContent className="p-0 relative">
                    <div className="absolute bottom-2 right-2 z-10">
                        <h6 className="text-white bg-black/50 px-2 py-1 rounded text-sm flex items-center gap-2 backdrop-blur-sm">
                            R$ 50,00
                            <span className="bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded">
                                -60%
                            </span>
                        </h6>
                    </div>
                    <Image
                      src={game.imageUrl}
                      alt={`Capa do jogo ${game.title}`}
                      width={300}
                      height={400}
                      className="w-full h-auto object-cover rounded-lg aspect-[3/4] group-hover:brightness-110 transition-all duration-300"
                      />
                  </CardContent>
                </Card>
                <div className="mt-3">
                    <p className="text-sm text-gray-400">{game.type}</p>
                    <h3 className="font-semibold truncate">{game.title}</h3>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

const games = [
  {
    id: "1",
    title: "The Last of Us™ Parte II Remastered",
    type: "Jogo base",
    imageUrl: "https://cdn1.epicgames.com/offer/7713e3fa4b234e0d8f553044205d53b6/EGS_TheLastofUsPartIIRemastered_NaughtyDogLLCNixxesSoftwareIronGalaxy_S2_1200x1600-2e13755a6b3fec2ee9dbcc231a1cf39c?resize=1&w=360&h=480&quality=medium", 
    price: "R$ 199,90",
  },
  {
    id: "2",
    title: "Marvel's Spider-Man 2",
    type: "Jogo base",
    imageUrl: "https://cdn1.epicgames.com/offer/b2818b59c0bb420e9647983dfd254931/EGS_Octopus_InsomniacGamesNixxesSoftware_S2_1200x1600-5831c61378872a1fe233b295fbf3140f?resize=1&w=360&h=480&quality=medium", 
    price: "R$ 171,30",
  },
  {
    id: "3",
    title: "Clair Obscur: Expedition 33",
    type: "Jogo base",
    imageUrl: "https://cdn1.epicgames.com/spt-assets/330dace5ffc74156987f91d454ac544b/project-w-1vp1b.jpg?resize=1&w=360&h=480&quality=medium", 
    price: "R$ 39,99",
  },
  {
    id: "4",
    title: "Assassin's Creed Shadows",
    type: "Jogo base",
    imageUrl: "https://cdn1.epicgames.com/offer/14a28903e3d14bd5aa3e6dbf10868126/EN_EGST_StorePortrait_1200x1600_1200x1600-a010fb65414cbbc48e055d1f6eac41b8?resize=1&w=360&h=480&quality=medium", 
    price: "R$ 189,50",
  },
  {
    id: "5",
    title: "Battlefield 4™ Edição Premium",
    type: "Jogo base",
    imageUrl: "https://cdn1.epicgames.com/spt-assets/8141dd49fe39421989a02983a3bbdb00/battlefield-4-13z58.jpg?resize=1&w=360&h=480&quality=medium", 
    price: "Gratuito",
    isFree: true,
    isExclusive: true,
  },
  {
    id: "6",
    title: "TankHead",
    type: "Jogo base",
    imageUrl: "https://cdn1.epicgames.com/spt-assets/ce3cfe56d21147dcb398823206cf9073/tankhead-c7n4p.jpg?resize=1&w=360&h=480&quality=medium", 
    price: "R$ 199,00",
    prePurchase: "Disponível em 23/07/25",
  },
  {
    id: "7",
    title: "Sid Meier's Civilization® VII",
    type: "Jogo base",
    imageUrl: "https://cdn1.epicgames.com/offer/eb9cdf6dbe4b47fc8ba474017023476a/STANDART--METADATA-PRODUCT_OFFER_PORTRAIT_IMAGE-STATIC-ENUS-NO_RATING-EPIC-1200X1600-QA_1200x1600-7a2a0b7697c6355fed8da2a407ff17b2?resize=1&w=360&h=480&quality=medium", 
    price: "R$ 99,90",
  },
];
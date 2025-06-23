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

const publisher = [
    {
        id: "1",
        name: "PlayStation Publishing LLC",
    }
]

export default function PublisherHighlight() {
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
                {publisher[0].name}
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
    title: "Days Gone",
    type: "Jogo base",
    imageUrl: "https://cdn1.epicgames.com/9f4875c1b0cf4cf19b28e203fc7aff07/offer/EGS_Brutalopenworldactionadventuregame_BendStudio_S2-1200x1600-e1c183cc11fdb47e26581e5ba19aa10a.jpg?resize=1&w=360&h=480&quality=medium",
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
    title: "Horizon Zero Dawn™ Remastered",
    type: "Jogo base",
    imageUrl: "https://cdn1.epicgames.com/offer/f4bfcee7af9b46f182ac93bd01494595/EGS_HorizonZeroDawnRemastered_GuerrillaGames_S2_1200x1600-541e79c6bba05a77fd7995d815f80374?resize=1&w=360&h=480&quality=medium",
    price: "R$ 39,99",
  },
  {
    id: "4",
    title: "Horizon Forbidden West™ Edição Completa",
    type: "Jogo base",
    imageUrl: "https://cdn1.epicgames.com/offer/24cc2629b0594bf29340f6acf9816af8/EGS_HorizonForbiddenWestCompleteEdition_GuerrillaGamesNixxesSoftware_S2_1200x1600-6eeadae1c58ebaaa74b109bd26d96645?resize=1&w=360&h=480&quality=medium", 
    price: "R$ 189,50",
  },
  {
    id: "5",
    title: "UNCHARTED™: Coleção Legado dos Ladrões",
    type: "Jogo base",
    imageUrl: "https://cdn1.epicgames.com/offer/8b2d6cf2b45b41f1abe91bc5b7c1e8f9/EGS_UNCHARTEDLegacyofThievesCollection_NaughtyDogLLC_S2_1200x1600-9deaa177d8716bde5478cdd75d850c9c?resize=1&w=360&h=480&quality=medium",
    price: "Gratuito",
    isFree: true,
    isExclusive: true,
  },
  {
    id: "6",
    title: "The Last of Us™ Part I",
    type: "Jogo base",
    imageUrl: "https://cdn1.epicgames.com/offer/0c40923dd1174a768f732a3b013dcff2/EGS_TheLastofUsPartI_NaughtyDogLLC_S2_1200x1600-41d1b88814bea2ee8cb7986ec24713e0?resize=1&w=360&h=480&quality=medium", 
    price: "R$ 199,00",
    prePurchase: "Disponível em 23/07/25",
  },
  {
    id: "7",
    title: "The Last of Us™ Parte II Remastered",
    type: "Jogo base",
    imageUrl: "https://cdn1.epicgames.com/offer/7713e3fa4b234e0d8f553044205d53b6/EGS_TheLastofUsPartIIRemastered_NaughtyDogLLCNixxesSoftwareIronGalaxy_S2_1200x1600-2e13755a6b3fec2ee9dbcc231a1cf39c?resize=1&w=360&h=480&quality=medium", 
    price: "R$ 99,90",
  },
];

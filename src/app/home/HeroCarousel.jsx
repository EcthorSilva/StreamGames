"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { PlusIcon, Gamepad2Icon } from "lucide-react";

export default function HeroCarousel() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const autoplayIntervalRef = useRef(null);

  // A lógica de autoplay e controle do carrossel permanece a mesma
  const stopAutoplay = () => {
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  };

  const startAutoplay = React.useCallback(() => {
    stopAutoplay();
    autoplayIntervalRef.current = setInterval(() => {
      api?.scrollNext();
    }, 5000);
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
        setCurrent(api.selectedScrollSnap());
    };

    onSelect(); // Define o slide inicial
    api.on("select", onSelect);
    startAutoplay();
    api.on("pointerDown", stopAutoplay);

    return () => {
      stopAutoplay();
      api.off("select", onSelect);
    };
  }, [api, startAutoplay]);

  const handleIndicatorClick = (index) => {
    stopAutoplay();
    api?.scrollTo(index);
  }

  const heroGames = [
    {
      id: "1",
      name: "The Last of Us™ Part II Remastered",
      description: "Experimente a premiada história de Ellie e Abby com melhorias gráficas e novos modos de jogo.",
      imageUrl: "https://media.rawg.io/media/games/909/909974d1c7863c2027241e265fe7011f.jpg",
      imageBlurUrl: "https://media.rawg.io/media/crop/600/400/games/909/909974d1c7863c2027241e265fe7011f.jpg",
      href: "/games/1",
    },
    {
      id: "2",
      name: "Black Myth: Wukong",
      description: "Um RPG de ação inspirado na mitologia chinesa, baseado na clássica jornada para o Oeste.",
      imageUrl: "https://media.rawg.io/media/games/779/77988e89f7862afeede524420aa251b0.jpg",
      imageBlurUrl: "https://media.rawg.io/media/crop/600/400/games/779/77988e89f7862afeede524420aa251b0.jpg",
      href: "/games/20", 
    },
    {
        id: "3",
        name: "Death Stranding 2: On The Beach",
        description: "A sequência do aclamado Death Stranding, expandindo o universo de Hideo Kojima com novas mecânicas e uma narrativa envolvente.",
        imageUrl: "https://media.rawg.io/media/games/b85/b85bc300d42588af66fb516b7563f74f.jpg",
        imageBlurUrl: "https://media.rawg.io/media/crop/600/400/games/b85/b85bc300d42588af66fb516b7563f74f.jpg",
        href: "/games/21", 
    },
    {
        id: "4",
        name: "METAL GEAR SOLID Δ: SNAKE EATER",
        description: "Um remake fiel da história de origem do icônico agente Naked Snake, agora com visuais de ponta.",
        imageUrl: "https://media.rawg.io/media/games/1c0/1c0548b761f7c4e4c0da71172b3362bf.jpg",
        imageBlurUrl: "https://media.rawg.io/media/crop/600/400/games/1c0/1c0548b761f7c4e4c0da71172b3362bf.jpg",
        href: "/games/22", 
    },
    {
        id: "5",
        name: "Mafia: The Old Country",
        description: "Explore a ascensão de uma nova família do crime na Sicília na prequela da aclamada saga Mafia.",
        imageUrl: "https://media.rawg.io/media/games/e0f/e0fc6554b6c0b5cd95037858898a1cc8.jpg",
        imageBlurUrl: "https://media.rawg.io/media/crop/600/400/games/e0f/e0fc6554b6c0b5cd95037858898a1cc8.jpg",
        href: "/games/23", 
    },
  ];

  return (
    <>
      {/* desktop */}
      <section
        className="relative w-full h-[85vh] min-h-[600px] hidden md:flex items-center justify-center overflow-hidden"
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
      >
        <div className="absolute inset-0">
          <Image
            src={heroGames[current]?.imageBlurUrl || heroGames[0].imageBlurUrl}
            alt=""
            fill
            quality={1}
            className="object-cover"
            style={{ filter: "blur(30px) brightness(0.5)", transform: "scale(1.1)" }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Image
            src={heroGames[current]?.imageUrl || heroGames[0].imageUrl}
            alt={heroGames[current]?.name || ''}
            fill
            quality={50}
            className="object-contain"
          />
        </div>
        <div className="container mx-auto px-4 w-full z-10">
          <Carousel setApi={setApi} className="w-full max-w-6xl mx-auto relative" opts={{ loop: true }}>
            <CarouselContent>
              {heroGames.map((game) => (
                <CarouselItem key={game.id}>
                  <div className="relative aspect-video p-0">
                    <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white w-full">
                      <h2 className="text-2xl lg:text-5xl font-bold leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.75)]">
                        {game.name}
                      </h2>
                      <p className="mt-4 text-base lg:text-lg max-w-2xl text-gray-200 drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)]">
                        {game.description}
                      </p>
                      <div className="mt-8 flex flex-wrap items-center gap-4">
                        <Button asChild size="lg" className="bg-white text-black font-bold rounded-md hover:bg-gray-200">
                          <Link href={game.href}>
                            <Gamepad2Icon className="mr-2 h-5 w-5" />
                            Ver Ofertas
                          </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="bg-white/10 border-gray-500 backdrop-blur-sm text-white rounded-md hover:bg-white/20">
                          <PlusIcon className="mr-2 h-5 w-5" />
                          Lista de Desejos
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="flex items-center justify-center gap-2 mt-8">
            {heroGames.map((_, index) => (
              <button
                key={index}
                onClick={() => handleIndicatorClick(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  index === current ? "w-8 bg-white" : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* mobile */}
      <section className="md:hidden w-full bg-background flex flex-col">
         <Carousel
          setApi={setApi}
          className="w-full flex-1 flex flex-col"
          opts={{ loop: true }}
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          <CarouselContent className="-ml-0 h-full">
            {heroGames.map((game) => (
              <CarouselItem key={game.id} className="pl-0 h-full">
                <div className="flex flex-col h-full">
                  {/* Imagem */}
                  <div className="relative w-full aspect-video">
                    <Image
                      src={game.imageUrl}
                      alt={game.name}
                      fill
                      className="object-cover"
                      quality={75}
                    />
                    {/* Gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  </div>
                  {/* Conteúdo */}
                  <div className="flex-1 flex flex-col justify-between p-6 bg-background">
                    <div className="text-left">
                       <h2 className="text-2xl font-bold leading-tight">
                        {game.name}
                      </h2>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {game.description}
                      </p>
                    </div>
                    <div className="mt-6 flex flex-col gap-3">
                       <Button asChild size="lg" className="w-full">
                          <Link href={game.href}>
                            <Gamepad2Icon className="mr-2 h-5 w-5" />
                            Ver Ofertas
                          </Link>
                        </Button>
                        <Button size="lg" variant="secondary" className="w-full">
                          <PlusIcon className="mr-2 h-5 w-5" />
                          Lista de Desejos
                        </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        {/* Indicadores de slide */}
        <div className="flex items-center justify-center gap-2 py-4 bg-background">
          {heroGames.map((_, index) => (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === current ? "w-6 bg-primary" : "bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
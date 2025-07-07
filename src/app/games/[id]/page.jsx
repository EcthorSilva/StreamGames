"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { GamesData } from "@/data/gameData.js";
import { platforms } from "@/data/platforms.js";
import { genres } from "@/data/genres.js";
import { stores } from "@/data/stores.js";

import { Header } from "@/components/navbar/header";
import Footer from "@/components/footer/Footer";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Heart } from "lucide-react";

export default function GamePage({ params }) {
    const game = GamesData.find((g) => g.id.toString() === params.id);

    if (!game) {
        notFound();
    }

    const carouselImages = [...game.short_screenshots].filter(
        (img) => img.image && img.image.trim() !== ""
    );

    const originalPrice = parseFloat(game.price.replace(",", "."));
    const discountPercent = parseInt(game.discount.replace(/[^0-9]/g, ""), 10) || 0;
    let finalPrice = originalPrice;
    if (discountPercent > 0) {
        finalPrice = originalPrice * (1 - discountPercent / 100);
    }
    const displayPrice = finalPrice.toFixed(2).replace(".", ",");
    const originalDisplayPrice = originalPrice.toFixed(2).replace(".", ",");

    const displayImage = game.logo || game.gamecover;
    const imageAlt = game.logo ? `Logo do jogo ${game.name}` : `Capa do jogo ${game.name}`;

    return (
        <div>
            <Header />
            <main className="container mx-auto max-w-7xl px-4 py-8">
                {/* TÍTULO */}
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-8">{game.name}</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 lg:gap-12">
                    {/* Coluna Principal (Esquerda) */}
                    <div className="md:col-span-2">
                        <Carousel className="w-full mb-8">
                            <CarouselContent>
                                {carouselImages.map((img, index) => (
                                    <CarouselItem key={index}>
                                        <div className="aspect-video relative overflow-hidden rounded-lg">
                                            <Image
                                                src={img.image}
                                                alt={`Screenshot ${index + 1} de ${game.name}`}
                                                fill
                                                className="object-cover"
                                                priority={index === 0}
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="left-4" />
                            <CarouselNext className="right-4" />
                        </Carousel>

                        {/* Bloco de preço mobile */}
                        <div className="md:hidden mt-8 pb-6 space-y-4 ">
                            <div className="p-2 rounded-lg">
                                <div className="flex items-center justify-between gap-4">
                                    {discountPercent > 0 && (
                                        <Badge variant="destructive" className="text-base">{game.discount}</Badge>
                                    )}
                                    <div className="flex flex-col items-end">
                                        {discountPercent > 0 && (
                                            <span className="text-sm text-muted-foreground line-through">
                                                R$ {originalDisplayPrice}
                                            </span>
                                        )}
                                        <span className="text-2xl font-bold">R$ {displayPrice}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 grid grid-cols-1 gap-3">
                                <Button size="lg">
                                    <ShoppingCart className="mr-2" />
                                    Adicionar ao Carrinho
                                </Button>
                                <Button size="lg" variant="outline">
                                    <Heart className="mr-2" />
                                    Adicionar à Lista de Desejos
                                </Button>
                            </div>

                            <Separator className="my-6" />

                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Desenvolvedora</span>
                                    <span className="font-semibold text-right">{game.developer.filter(d => d.trim()).join(", ")}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Publicadora</span>
                                    <span className="font-semibold text-right">{game.publisher}</span>
                                </div>
                            </div>
                        </div>

                        {game.description && (
                            <div>
                                <h2 className="text-2xl font-bold border-b pb-2 mb-4">Sobre o Jogo</h2>
                                <p className="text-muted-foreground leading-relaxed">{game.description}</p>
                            </div>
                        )}

                        <span className="text-sm text-muted-foreground mt-4 block">Breve introdução ao jogo</span>
                        {/* Descrição do Jogo */}
                        <div className="mt-8">
                            <h2 className="text-xl font-bold border-b pb-2 mb-4">Sobre este Jogo</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Descrição detalhada do jogo, incluindo mecânicas de jogo, história, e outros aspectos importantes que os jogadores devem conhecer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quod, cumque! Doloribus, asperiores. Quisquam, voluptatum. Quod, cumque! Doloribus, asperiores.    
                            </p>                            
                        </div>
                        {/* Descrição de conteudo adulto */}
                        <div className="mt-8">
                            <h2 className="text-xl font-bold border-b pb-2 mb-4">Descrição de conteudo adulto</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Descrição dos desenvolvedores sobre o conteúdo: <br />
                                Este jogo pode conter conteúdo não apropriado para todas as idades ou para visualização no trabalho: Violência frequente ou detalhada, Conteúdo adulto não específico    
                            </p> 
                        </div>
                        {/* Requisitos de sistema  */}
                        <div className="mt-10">
                            <h2 className="text-xl font-bold border-b pb-2 mb-4">Requisitos de Sistema para {game.name}</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Requisitos mínimos: <br /> <br />
                                Sistema Operacional: Windows 10 <br />
                                Processador: Intel Core i5 <br />
                                Memória: 8 GB de RAM <br />
                                Placa de Vídeo: NVIDIA GTX 960 <br />
                                Armazenamento: 20 GB de espaço disponível
                            </p>
                        </div>

                    </div>

                    {/* Sidebar (Direita) */}
                    <aside className="md:col-span-1 mt-0 md:mt-0">
                        <div className="sticky top-24">
                            <div className="hidden md:block">
                            
                                <div className="hidden md:flex mb-4 items-center justify-center p-4 min-h-[280px]">
                                    <div className="relative w-full max-w-[250px] h-[100px]">
                                        <Image
                                            src={displayImage}
                                            alt={imageAlt}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>

                                <div className="p-2 rounded-lg">
                                    <div className="flex items-center justify-between gap-4">
                                        {discountPercent > 0 && (
                                            <Badge variant="destructive" className="text-base">{game.discount}</Badge>
                                        )}
                                        <div className="flex flex-col items-end">
                                            {discountPercent > 0 && (
                                                <span className="text-sm text-muted-foreground line-through">
                                                    R$ {originalDisplayPrice}
                                                </span>
                                            )}
                                            <span className="text-2xl font-bold">R$ {displayPrice}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 grid grid-cols-1 gap-3">
                                    <Button size="lg">
                                        <ShoppingCart className="mr-2" />
                                        Adicionar ao Carrinho
                                    </Button>
                                    <Button size="lg" variant="outline">
                                        <Heart className="mr-2" />
                                        Adicionar à Lista de Desejos
                                    </Button>
                                </div>

                                <Separator className="my-6" />

                                <div className="space-y-4 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Desenvolvedora</span>
                                        <span className="font-semibold text-right">{game.developer.filter(d => d.trim()).join(", ")}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Publicadora</span>
                                        <span className="font-semibold text-right">{game.publisher}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
            <Footer />
        </div>
    );
}
"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";
import { useState } from "react";

const faq = [
    // Categoria: Conta e Segurança
    {
        question: "Como eu crio uma conta?",
        answer:
            "É simples e rápido! Clique em 'Registrar' ou 'Criar Conta' no canto superior da página, preencha seu e-mail, crie uma senha segura e pronto! Você receberá um e-mail para confirmar seu cadastro.",
    },
    {
        question: "Esqueci minha senha, e agora?",
        answer:
            "Na página de login, clique em 'Esqueci minha senha'. Você receberá um link no seu e-mail para criar uma nova senha de forma segura.",
    },
    {
        question: "Como posso proteger minha conta?",
        answer:
            "Recomendamos fortemente que você ative a Autenticação de Dois Fatores (2FA) nas configurações da sua conta. Isso adiciona uma camada extra de segurança, protegendo suas compras e seus jogos.",
    },

    // Categoria: Compras e Pagamentos
    {
        question: "Quais formas de pagamento vocês aceitam?",
        answer:
            "Aceitamos as principais formas de pagamento para sua conveniência, incluindo Cartões de Crédito (Visa, MasterCard, etc.), PIX e Boleto Bancário. Todas as transações são processadas em um ambiente seguro.",
    },
    {
        question: "Como funcionam as compras em pré-venda (pre-order)?",
        answer:
            "Ao comprar um jogo em pré-venda, você garante sua cópia e eventuais bônus. A chave de ativação é entregue no dia do lançamento ou um pouco antes, conforme a liberação da desenvolvedora.",
    },
    {
        question: "Vocês vendem DLCs e Expansões?",
        answer:
            "Sim! É muito importante que a DLC ou expansão comprada seja da mesma plataforma do seu jogo base (Ex: uma DLC da Steam não funciona em um jogo base da Epic Games). Verifique sempre a compatibilidade.",
    },
    {
        question: "Posso comprar um jogo para dar de presente?",
        answer:
            "Sim! Durante o processo de compra, você terá a opção de marcar o item como 'presente'. Você poderá então enviar o jogo para o e-mail de um amigo, que receberá as instruções para o resgate.",
    },

    // Categoria: Chaves de Ativação e Jogos
    {
        question: "Após a compra, onde encontro meu jogo?",
        answer:
            "Assim que o pagamento for confirmado, a chave de ativação do seu jogo ficará disponível na sua biblioteca de jogos aqui no site. Acesse 'Minha Conta' > 'Meus Jogos' para visualizar todas as suas chaves.",
    },
    {
        question: "Onde eu ativo o meu jogo?",
        answer:
            "Na página do produto, sempre informamos em qual plataforma a chave deve ser ativada (Ex: 'Requer uma conta Steam'). Você precisará do aplicativo da plataforma correspondente instalado no seu PC.",
    },
    {
        question: "Minha chave não funciona. O que eu faço?",
        answer:
            "Primeiro, verifique se digitou a chave corretamente e na plataforma certa (uma chave Steam não funciona na Epic Games). Se o problema persistir, entre em contato com nosso suporte imediatamente.",
    },

    // Categoria: Reembolsos e Suporte Técnico
    {
        question: "Qual é a política de reembolso da loja?",
        answer:
            "Você pode solicitar o reembolso de uma compra desde que a chave de ativação do jogo ainda não tenha sido visualizada na sua conta. Após a chave ser revelada, a venda é considerada final e não pode ser reembolsada.",
    },
    {
        question: "O jogo não roda no meu PC. Posso pedir reembolso?",
        answer:
            "A responsabilidade por verificar os requisitos mínimos de sistema, que estão na página do produto, é do cliente. Problemas de performance não são elegíveis para reembolso após a chave ser revelada.",
    },
    {
        question: "Comprei um jogo para a região errada. Posso trocar?",
        answer:
            "As chaves de jogos podem ter travas de região. Nós sempre informamos na página do produto para qual região o jogo se destina. Infelizmente, após a visualização da chave, não é possível realizar trocas.",
    },
    {
        question: "Como entro em contato com o suporte?",
        answer:
            "Se sua dúvida for sobre sua compra, pagamento ou chave em nosso site, acesse nossa página de 'Contato' ou envie um e-mail para [seu-email-de-suporte@sua-loja.com]. Estamos prontos para ajudar!",
    },
];

export default function FAQ() {
    const [value, setValue] = useState();

    return (
        <div className="text-foreground">
            <div className="w-full h-auto min-h-[90vh] flex items-center justify-center px-6 py-12">
                <div className="w-full max-w-screen-lg">
                    <h2 className="text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tight">
                        Dúvidas Frequentes
                    </h2>

                    <div className="mt-6 w-full grid md:grid-cols-2 gap-x-10">
                        {/* --- COLUNA 1 --- */}
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                            value={value}
                            onValueChange={setValue}
                        >
                            {faq.slice(0, 7).map(({ question, answer }, index) => (
                                <AccordionItem key={question} value={`question-${index}`}>
                                    <AccordionPrimitive.Header className="flex">
                                        <AccordionPrimitive.Trigger
                                            className={cn(
                                                "flex flex-1 items-center justify-between py-4 font-semibold transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                                                "text-start text-lg"
                                            )}
                                        >
                                            {question}
                                            <PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                                        </AccordionPrimitive.Trigger>
                                    </AccordionPrimitive.Header>
                                    <AccordionContent>{answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>

                        {/* --- COLUNA 2 --- */}
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                            value={value}
                            onValueChange={setValue}
                        >
                            {faq.slice(7).map(({ question, answer }, index) => (
                                <AccordionItem key={question} value={`question-${index + 7}`}>
                                    <AccordionPrimitive.Header className="flex">
                                        <AccordionPrimitive.Trigger
                                            className={cn(
                                                "flex flex-1 items-center justify-between py-4 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                                                "text-start text-lg"
                                            )}
                                        >
                                            {question}
                                            <PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                                        </AccordionPrimitive.Trigger>
                                    </AccordionPrimitive.Header>
                                    <AccordionContent>{answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    );
}
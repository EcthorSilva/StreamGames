import { MailIcon, MessageCircle, HelpCircle, Users } from "lucide-react"; // Ícones atualizados
import { Header } from "@/components/navbar/header";
import Footer from "@/components/footer/Footer";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Header />
      <div className="min-h-screen flex items-center justify-center pt-12 md:pt-16 pb-16">
        <div className="w-full max-w-screen-xl mx-auto px-6 xl:px-0">
          <b className="text-muted-foreground">Fale Conosco</b>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
            Estamos aqui para ajudar
          </h2>
          <p className="mt-4 text-base sm:text-lg">
            Precisa de ajuda? Escolha um dos canais abaixo para falar com a gente.
          </p>
          <div className="mt-14 md:mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Suporte via Ticket (Email) */}
            <div className="bg-accent p-6 pb-10 rounded-lg">
              <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                <MailIcon />
              </div>
              <h3 className="mt-8 font-bold text-xl">Suporte via Ticket</h3>
              <p className="mt-2.5 mb-4 text-muted-foreground">
                Para problemas com compras, chaves ou sua conta.
              </p>
              <Link
                className="font-medium"
                href="mailto:suporte@streamgames.com"
              >
                Abrir um novo ticket
              </Link>
            </div>

            {/* Card 2: Chat ao Vivo */}
            <div className="bg-accent p-6 pb-10 rounded-lg">
              <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                <MessageCircle />
              </div>
              <h3 className="mt-8 font-bold text-xl">Chat ao Vivo</h3>
              <p className="mt-2.5 mb-4 text-muted-foreground">
                Tem uma dúvida rápida? Fale com a gente em tempo real.
              </p>
              <Link className="font-medium" href="#">
                Iniciar chat
              </Link>
            </div>

            {/* Card 3: Central de Ajuda (FAQ) */}
            <div className="bg-accent p-6 pb-10 rounded-lg">
              <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                <HelpCircle />
              </div>
              <h3 className="mt-8 font-bold text-xl">Central de Ajuda</h3>
              <p className="mt-2.5 mb-4 text-muted-foreground">
                Encontre respostas para as perguntas mais comuns em nosso FAQ.
              </p>
              <Link className="font-medium" href="/faq">
                Acessar nosso FAQ
              </Link>
            </div>

            {/* Card 4: Comunidade */}
            <div className="bg-accent p-6 pb-10 rounded-lg">
              <div className="h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                <Users />
              </div>
              <h3 className="mt-8 font-bold text-xl">Comunidade</h3>
              <p className="mt-2.5 mb-4 text-muted-foreground">
                Fique por dentro das novidades, promoções e participe de sorteios.
              </p>
              <Link
                className="font-medium"
                href="#"
                target="_blank"
              >
                Junte-se à nossa comunidade
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
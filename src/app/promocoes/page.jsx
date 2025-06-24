import { Header } from "@/components/navbar/header";
import Footer from "@/components/footer/Footer";
import ItensPage from "./itens";
import SearchHeader from "@/components/navbar/SearchHeader";

export default function PromocoesPage() {
  return (
    <div>
        <Header />
        <SearchHeader />
        <ItensPage />
        <Footer />
    </div>
  );
}
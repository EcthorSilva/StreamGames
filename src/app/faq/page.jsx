import FAQ from "./FAQ";
import Footer from "@/components/footer/Footer";
import { Header } from "@/components/navbar/header";

export default function Page() {
    return (
        <div className="">
            <Header />
            <FAQ />
            <Footer />
        </div>
    );
}
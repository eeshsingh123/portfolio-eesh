import { ModeToggle } from "@/components/dark-mode";
import Footer from "@/components/main/footer-section";
import Hero from "@/components/main/hero-section";
import Introduction from "@/components/main/intro-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12">
      <div className="max-w-xl">
          <ModeToggle />
          <Introduction />
        </div>
        <div className="max-w-xxl">
          <Hero />
        </div>
        <div className="max-w-xl pt-8">
          <Footer />
        </div>
    </main>
  );
}

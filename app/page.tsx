import Footer from "@/components/main/footer-section";
import Hero from "@/components/main/hero-section";
import Introduction from "@/components/main/intro-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-200">
      <div className="max-w-xl">
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

import { ModeToggle } from "@/components/dark-mode";
import Footer from "@/components/main/footer-section";
import Introduction from "@/components/main/intro-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-start p-8 lg:p-12 max-w-4xl mx-auto">
      <div className="flex justify-end mb-8">
        <ModeToggle />
      </div>
      <Introduction />
      <Footer />
    </main>
  );
}

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { CursorGlow } from "@/components/cursor-glow";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

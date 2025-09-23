import IgButtom from "@/components/IgButton";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex flex-col bg-[radial-gradient(80%_50%_at_50%_0%,rgba(255,126,0,0.10),transparent_60%),radial-gradient(70%_50%_at_50%_100%,rgba(170,0,0,0.10),transparent_60%)]">
        <section className="flex-1">
          <div className="mx-auto max-w-5xl px-6 md:px-8 pt-20 md:pt-28 pb-14 md:pb-20">
            <div className="relative isolate rounded-3xl">
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl " />
              <div className="flex flex-col items-center text-center gap-7 md:gap-9 px-6 md:px-10 py-12 md:py-16">
                <h1
                  className="text-4xl md:text-6xl font-semibold tracking-tight"
                  style={{ color: "#FF7E00" }}
                >
                  selam
                </h1>
                <p className="text-base md:text-xl text-foreground/80 leading-relaxed max-w-2xl">
                  Learn Tigrinya anywhere, anytime.
                </p>

                <Image
                  src="/selam-appicon.png"
                  alt="Selam app icon"
                  width={128}
                  height={128}
                  className="rounded-2xl shadow-sm"
                />

                <p className="text-sm md:text-base text-foreground/70">
                  Coming 2026 to the App Store and Google Play.
                </p>

                <div className="pt-1">
                  <IgButtom />
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-black/5 dark:border-white/10">
          <div className="mx-auto max-w-5xl px-6 md:px-8 py-6 md:py-8 text-center text-sm text-foreground/60">
            © {new Date().getFullYear()} selam — All rights reserved.
          </div>
        </footer>
      </main>
    </>
  );
}

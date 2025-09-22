import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center px-6">
        <section className="w-full max-w-2xl text-center">
          <div className="px-6 py-14 md:px-10 md:py-20">
            <div className="flex flex-col items-center gap-7 md:gap-9">
              <Image
                src="/selam-appicon.png"
                alt="Selam app icon"
                width={80}
                height={80}
                className="mx-auto my-5"
              />
              <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
                selam
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                Learn Tigrinya anywhere, anytime.
              </p>
              <p className="text-sm md:text-base text-foreground/70">
                Coming 2026 to the App Store and Google Play.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Learn Tigrinya the new way!",
  description:
    "Learn Tigrinya (Tigrigna) the modern way with kemey. Join the waitlist to get updates for iOS, Android, and Web.",
  keywords: [
    "Learn Tigrinya",
    "Tigrinya app",
    "Kemey language learning",
    "Kemey app",
    "Tigrigna",
    "Eritrean language",
    "Ethiopian language",
  ],
};

// const navigation = [
//   { name: "Product", href: "#" },
//   { name: "Features", href: "#" },
//   { name: "Marketplace", href: "#" },
//   { name: "Company", href: "#" },
// ];

export default function Example() {
  return (
    <div className="bg-black">
      <Script
        id="ld-json-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "kemey",
            url: "https://kemey.app",
            sameAs: ["https://www.instagram.com/kemey.app"],
            logo: "https://kemey.app/favicon.ico",
          }),
        }}
      />
      <Script
        id="ld-json-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "kemey – Learn Tigrinya",
            url: "https://kemey.app",
            inLanguage: "en",
          }),
        }}
      />
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex justify-between flex-1">
            <Link
              href="/"
              className="-m-1.5 p-1.5"
              aria-label="Go to kemey home"
            >
              <Image
                alt="Kemey logo"
                src="/clear-black-logo.png"
                width={40}
                height={40}
                className="h-8 w-auto invert"
              />
            </Link>
            <div className="flex items-center justify-center gap-x-4">
              <Link
                href="https://www.instagram.com/kemey.app"
                className="flex items-center"
              >
                <Image
                  src="/instagram-logo.png"
                  alt="Kemey Instagram profile"
                  width={50}
                  height={35}
                  className="invert hover:scale-110 transition duration-300 ease-in-out"
                />
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="relative isolate px-6 lg:px-8 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff3b30] via-[#ff9500] to-[#ffcc00] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-12 sm:py-20">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center ">
            <div className="flex flex-row justify-center my-12 gap-4 sm:gap-6">
              <Image
                src="/logo.png"
                alt="Kemey wordmark"
                width={130}
                height={100}
                className="w-[100px] h-auto sm:w-[130px] sm:h-auto"
                priority
              />
              <p
                className="text-5xl font-medium tracking-tight text-balance text-white sm:text-7xl font-poppins pt-8"
                aria-label="Kemey"
              >
                kemey
              </p>
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
              Learn Tigrinya the new way!
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
              Coming 2026 to the App Store, Google Play and the Web. <br />
            </p>
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
}

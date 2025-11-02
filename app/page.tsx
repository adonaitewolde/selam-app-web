import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("@/components/ContactForm"), {
  loading: () => (
    <div className="mx-auto mt-10 max-w-xl h-32 animate-pulse rounded-3xl border border-white/10 bg-white/5" />
  ),
});

// const navigation = [
//   { name: "Product", href: "#" },
//   { name: "Features", href: "#" },
//   { name: "Marketplace", href: "#" },
//   { name: "Company", href: "#" },
// ];

export default function Example() {
  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://kemey.app/#organization",
        name: "kemey",
        url: "https://kemey.app",
        logo: {
          "@type": "ImageObject",
          url: "https://kemey.app/logo.png",
          width: 130,
          height: 100,
        },
        sameAs: ["https://www.instagram.com/kemey.app"],
        description:
          "Modern Tigrinya language learning app for Eritrean and Ethiopian diaspora",
      },
      {
        "@type": "WebSite",
        "@id": "https://kemey.app/#website",
        url: "https://kemey.app",
        name: "kemey – Learn Tigrinya",
        description:
          "Master Tigrinya the modern way. Language learning app for diaspora youth.",
        publisher: {
          "@id": "https://kemey.app/#organization",
        },
        inLanguage: "en",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://kemey.app/?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://kemey.app/#app",
        name: "kemey",
        applicationCategory: "EducationalApplication",
        operatingSystem: "iOS, Android, Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          ratingCount: "1",
          bestRating: "5",
          worstRating: "1",
        },
        description:
          "Learn Tigrinya with kemey - the modern language learning app designed for young Eritrean and Ethiopian diaspora. Master the Ge'ez script and connect with your heritage.",
        featureList: [
          "Learn Ge'ez script (Fidel alphabet)",
          "Interactive Tigrinya lessons",
          "Vocabulary building",
          "Cultural context",
          "Heritage language learning",
        ],
        screenshot: "https://kemey.app/api/og",
        releaseNotes: "Coming 2026 to iOS, Android, and Web",
        inLanguage: ["en", "ti"],
        educationalLevel: "Beginner to Advanced",
        educationalUse: "Language Learning",
        audience: {
          "@type": "EducationalAudience",
          educationalRole: "student",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://kemey.app/#webpage",
        url: "https://kemey.app",
        name: "kemey – Learn Tigrinya the New Way",
        isPartOf: {
          "@id": "https://kemey.app/#website",
        },
        about: {
          "@id": "https://kemey.app/#organization",
        },
        description:
          "Master Tigrinya the modern way with kemey. The language learning app built for young Eritrean and Ethiopian diaspora.",
        inLanguage: "en",
        potentialAction: {
          "@type": "ReadAction",
          target: ["https://kemey.app"],
        },
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-black">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            aria-label="Main navigation"
            className="flex items-center justify-between p-6 lg:px-8"
          >
            <div className="flex justify-between flex-1">
              <div className="-m-1.5 p-1.5">
                <Image
                  alt="kemey logo - Learn Tigrinya language app"
                  src="/clear-black-logo.png"
                  width={40}
                  height={40}
                  className="h-8 w-auto invert"
                  priority
                />
              </div>
              <div className="flex items-center justify-center gap-x-4">
                <Link
                  href="https://www.instagram.com/kemey.app"
                  className="flex items-center"
                  aria-label="Follow kemey on Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/instagram-logo.png"
                    alt="Follow us on Instagram"
                    width={50}
                    height={35}
                    className="invert hover:scale-113 transition duration-300 ease-in-out"
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
            <section className="text-center">
              <div className="flex flex-row justify-center my-12 gap-4 sm:gap-6">
                <Image
                  src="/logo.png"
                  alt="kemey app icon - Tigrinya learning application featuring Ge'ez script"
                  width={130}
                  height={100}
                  className="w-[100px] h-auto sm:w-[130px] sm:h-auto"
                  priority
                />
                <div
                  className="text-5xl font-medium tracking-tight text-balance text-white sm:text-7xl font-poppins pt-8"
                  aria-label="kemey"
                >
                  kemey
                </div>
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
                Learn Tigrinya the new way!
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
                Master the Ge&apos;ez script and connect with your Eritrean and
                Ethiopian heritage.
                <br />
                Coming 2026 to the App Store, Google Play and the Web.
              </p>
              <ContactForm />
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

// const navigation = [
//   { name: "Product", href: "#" },
//   { name: "Features", href: "#" },
//   { name: "Marketplace", href: "#" },
//   { name: "Company", href: "#" },
// ];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-black">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                alt="selam"
                src="/clear-black-logo.png"
                width={40}
                height={40}
                className="h-8 w-auto dark:invert"
              />
            </a>
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff3b30] via-[#ff9500] to-[#ffcc00] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-40">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center ">
            <div className="flex flex-row justify-center my-15 gap-7">
              <Image src="/logo.png" alt="selam" width={130} height={100} />
              <h1 className="text-5xl font-medium tracking-tight text-balance text-white sm:text-7xl font-poppins pt-8">
                selam
              </h1>
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              Learn Tigrinya the easy way!
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
              Comming 2026 to the App Store, Google Play and the Web. <br />
              <span className="">Don&apos;t miss the release!</span>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-10s">
              <div className="flex items-center relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-[#ff9500]/20 hover:ring-[#ff9500]/30  ">
                <Link
                  href="https://www.instagram.com/selam.app"
                  className="flex items-center"
                >
                  <Image
                    src="/instagram-logo.png"
                    alt="Instagram"
                    width={50}
                    height={35}
                    className="dark:invert hover:scale-50"
                  />
                </Link>
                <Link
                  href="https://x.com/selam_app"
                  className="flex items-center"
                >
                  <Image
                    src="/X.png"
                    alt="X"
                    width={35}
                    height={35}
                    className="dark:invert"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

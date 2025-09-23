import Image from "next/image";
import Link from "next/link";

export default function IgButtom() {
  return (
    <>
      <Link
        href="https://www.instagram.com/selam.app"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow selam on Instagram"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white px-5 py-2.5 text-sm md:text-base font-medium shadow-sm ring-1 ring-white/10 hover:translate-y-[1px] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500 transition">
          <Image
            src="/instagram-logo.png"
            alt="Instagram"
            width={20}
            height={20}
            className="invert-0"
          />
          Follow on Instagram
        </span>
      </Link>
    </>
  );
}

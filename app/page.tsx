import Image from "next/image";
import heroImage from "@/public/hero.webp";
import Link from "next/link";

export default function Home() {
  return (
    <section className="h-full">
      <div className="relative isolate h-full overflow-hidden pt-14">
        <Image
          src={heroImage}
          alt="hero"
          className="fixed inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="bg-blend fixed inset-0 -z-10 bg-black/70 bg-blend-multiply"
        ></div>
        <div className="mx-auto max-w-2xl px-4 py-32 sm:py-48 md:px-6 lg:py-56 xl:px-8">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-stone-400 ring-1 ring-white/10 hover:ring-white/20">
              The new store is now open!{" "}
              <Link href="#" className="font-semibold text-white">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl"></h1>
            <p className="mt-6 text-lg leading-8 text-stone-300">
              I’m a jewelry designer and mixed media artist. You’re welcome so
              PM with any question. Enjoy and follow me for more news that’s
              coming.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/products"
                className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
              >
                Shop Products
              </Link>
              <Link
                href="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

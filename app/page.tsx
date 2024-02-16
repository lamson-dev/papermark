import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="flex flex-1 flex-col bg-white text-black">
        <div className="sticky top-0 z-50">
          <div className="flex h-14 w-full mx-auto items-center justify-center bg-white/75 backdrop-blur-lg">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between self-center px-4 md:px-8">
              <div className="flex items-center space-x-10">
                <Link
                  aria-label="Return home"
                  className="flex h-full flex-none items-center rounded-md text-black ring-0"
                  href="/"
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold tracking-tighter text-black">
                      dev
                    </span>
                  </div>
                </Link>
              </div>
              <div className="flex items-center gap-2 justify-self-end">
                <Link
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md px-2.5 py-1 font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  href="/login"
                >
                  <span className="relative z-[2] flex items-center gap-1">
                    <span>Log in</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl w-full mx-auto px-4 md:px-8">
          <div className="pt-24">
            <h1 className="text-4xl md:text-6xl text-balance">
              Unlocking Simplicity
            </h1>
            <p className="text-2xl mt-8 text-balance max-w-3xl">
              Your Guide to Mastering Complex Documents!
            </p>
            <div className="pt-8 space-x-2">
              <Link href="/login">
                <Button className="text-base rounded-3xl">Try it now?</Button>
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
    </footer>
  );
}

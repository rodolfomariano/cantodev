import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col min-h-screen items-center justify-center p-24 ${inter.className}`}
    >
      <div className="flex place-items-center absolute before:h-[500px] before:w-[500px] before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-amber-200 after:via-yellow-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-amber-700/10 after:dark:from-yellow-900 after:dark:via-[#fbff01]/40 before:lg:h-[360px]"></div>
      <Image
        // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        className="z-10"
        src="/cantodev-logo.svg"
        alt="Next.js Logo"
        width={280}
        height={67}
        priority
      />

      <h2 className="z-10 text-teal-800 dark:text-teal-200">Em manutenção</h2>
    </main>
  );
}

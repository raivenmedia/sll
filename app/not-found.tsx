import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-white px-4 text-center text-black">
      <p className="rounded-full bg-[#f4c400]/20 px-4 py-2 text-sm font-semibold">404</p>
      <h1 className="text-5xl font-black">Page not found</h1>
      <p className="max-w-xl text-neutral-600">The route you requested doesn&apos;t exist in the Yolic Platform. Head back to the homepage or the dashboard login.</p>
      <div className="flex gap-3">
        <Link href="/" className={buttonVariants({ variant: "primary", size: "lg" })}>Go home</Link>
        <Link href="/login" className={buttonVariants({ variant: "outline", size: "lg" })}>Staff login</Link>
      </div>
    </main>
  );
}

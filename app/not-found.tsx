import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="orb orb-purple w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
      <div className="relative z-10 space-y-6">
        <div className="text-8xl font-bold text-gradient">404</div>
        <h1 className="text-3xl font-bold text-white">Page Not Found</h1>
        <p className="text-brand-muted max-w-md">
          Looks like this page went on a digital vacation. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-purple to-brand-violet text-white font-semibold hover:shadow-glow-sm hover:scale-105 transition-all duration-300"
        >
          ← Go Home
        </Link>
      </div>
    </div>
  );
}

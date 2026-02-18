import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        404
      </p>
      <h1 className="mt-4 font-serif text-4xl text-text-primary md:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 text-text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-bg-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,168,83,0.3)] hover:scale-[1.02]"
      >
        Back to Home
      </Link>
    </div>
  );
}

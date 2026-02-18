export default function Footer() {
  return (
    <footer className="border-t border-border-subtle">
      <div className="mx-auto max-w-[1200px] px-6 py-10 md:px-8 md:py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo */}
          <div className="flex items-baseline gap-0 font-serif text-xl">
            <span className="text-text-primary">invox</span>
            <span className="text-accent">AI</span>
          </div>

          {/* Links */}
          <div className="flex gap-8">
            <a
              href="#"
              className="text-sm text-text-muted transition-colors hover:text-text-body"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-text-muted transition-colors hover:text-text-body"
            >
              Terms
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border-subtle pt-8 md:flex-row">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} InvoxAI. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Made by{" "}
            <span className="text-accent">InvoxAI</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

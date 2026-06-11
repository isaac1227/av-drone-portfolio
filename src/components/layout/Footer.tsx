export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-background/95 py-10 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          <p className="font-heading text-sm uppercase tracking-[0.32em] text-white/55">
            NATT Aerial Studio
          </p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-text-subtle">
            Fotografía y vídeo con dron para marcas, proyectos y espacios que
            necesitan una presencia visual precisa y cinematográfica.
          </p>
          <p className="mt-3 text-xs text-text-subtle/80">
            Diseño y desarrollo web por{" "}
            <a
              href="https://www.linkedin.com/in/isaac-marroqui-penalva/"
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 transition hover:text-foreground hover:underline"
            >
              Isaac Marroquí
            </a>
          </p>
        </div>
        <div className="flex items-center gap-6 text-sm text-text-subtle">
          <a href="#" className="transition hover:text-foreground">
            Instagram
          </a>
          <a href="#" className="transition hover:text-foreground">
            YouTube
          </a>
          <span className="hidden h-4 w-px bg-white/10 sm:block" />
          <p>© 2026</p>
        </div>
      </div>
    </footer>
  );
}

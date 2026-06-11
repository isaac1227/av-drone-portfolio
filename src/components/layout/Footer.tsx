export default function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-[#f5f5f5] py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-6 lg:flex-row lg:px-10">
        <p className="text-lg text-zinc-500">
          © 2026 NATT Aerial Studio. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-8 text-lg text-zinc-500">
          <a href="#" className="transition hover:text-zinc-800">
            Instagram
          </a>
          <a href="#" className="transition hover:text-zinc-800">
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
}

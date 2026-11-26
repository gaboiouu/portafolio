import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 bg-slate-950 px-6 text-center text-white">
      <p className="text-8xl text-violet-400">404</p>
      <h1 className="text-2xl">Página no encontrada</h1>
      <p className="font-sans text-slate-300">La página que buscas no existe o fue movida.</p>
      <Link href="/" className="rounded-md bg-white px-6 py-3 font-sans font-semibold text-slate-950">
        Volver al inicio
      </Link>
    </main>
  );
}

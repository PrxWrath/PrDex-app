import Link from "next/link";

export default function NavBar({children}:React.PropsWithChildren) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-6 text-slate-400">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-lg lg:flex p-2 border-b border-slate-500 shadow-xl shadow-slate-800">
        <Link href="/">
          <h2 className="text-2xl">PokeApp.</h2>
        </Link>
      </div>
    {children}
    </main>
  );
}

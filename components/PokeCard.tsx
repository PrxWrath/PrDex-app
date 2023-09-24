import Link from "next/link";

interface PokeCardProps {
    name: string,
    key: string
}
export default function PokeCard({name, key}: PokeCardProps) {
    return (
        <Link className="group rounded-md border dark:border-slate-400 px-5 py-4 transition-colors hover:bg-slate-800"
            href={`/${name}`}
            key={key}
        >
            {name}
        </Link>
    )
}
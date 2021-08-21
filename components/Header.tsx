import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between items-end my-4 flex-wrap">
      <h1 className="text-gray-800 dark:text-gray-300 text-3xl font-bold pl-0 sm:pl-6">
        <Link href="/">
          <a className="hover:text-blue-800 dark:hover:text-yellow-300 transition">
            CodingStarter
          </a>
        </Link>
      </h1>
    </div>
  )
}
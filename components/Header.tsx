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
        <span className="block sm:inline text-sm ml-0 mt-2 sm:mt-0 sm:ml-6 font-normal text-gray-400 dark:text-gray-500">
          <a href="https://github.com/blacktunes/codingstarter-next" target="_blank" className="text-purple-500 dark:text-purple-600 border-b-2 border-purple-800 border-opacity-20 dark:border-opacity-80" rel="noreferrer">GitHub Repository</a>
        </span>
      </h1>
    </div>
  )
}
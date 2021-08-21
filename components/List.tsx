import Link from "next/link"

export default function List({ list }) {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/4 bg-gray-200 dark:bg-gray-900 overflow-auto sidebar rounded sm:rounded-br-none sm:rounded-tr-none" style={{height: 'calc(100vh - 12.25rem - 2px)'}}>
      <ul className="w-full flex flex-row sm:flex-col">
        {
          list.map(item => (
            <li key={item.id} className="flex w-3/5 sm:w-full flex-shrink-0 flex-grow-0 text-blue-400 dark:text-purple-400 bg-gray-200 dark:bg-gray-900 group border-b border-gray-300 dark:border-gray-800 sidebar-active">
              <Link href="/post/[id]" as={`/post/${item.id}`}>
                <a className="w-full max-w-full py-4 px-6 block group-hover:bg-gray-300 dark:group-hover:bg-gray-800">
                  <h4 className="font-bold w-full break-all truncate">{item.title}</h4>
                  <p className="text-gray-400 dark:text-gray-600 leading-tight w-full break-all truncate">{item.text}</p>
                  <div className="text-sm mt-1 text-gray-400 dark:text-gray-700">Last: {item.time}</div>
                </a>
              </Link>
            </li>
          )
          )
        }
      </ul>
    </div>
  )
}
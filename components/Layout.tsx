import Header from './Header'

export default function Layout({ children }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-4 pt-4 sm:p-16 sm:pt-12">
      <Header />
      <div className="mx-auto dark:bg-gray-800 border border-purple-200 dark:border-blue-900 rounded shadow-2xl flex flex-wrap sm:overflow-hidden" style={{ height: "calc(100vh - 12.25rem)" }}>
        {
          children
        }
      </div>
      <footer className="text-center text-gray-500 w-full sm:fixed sm:bottom-6 sm:left-0 mt-6 sm:mt-0">
        Made with ❤️ in Macao
      </footer>
    </div>
  )
}

export default function Post({ id }) {
  const el = id
    ? (
      <div className="w-full sm:w-1/2 lg:w-3/4 bg-gray-100 dark:bg-gray-800 main-content relative">
        <div className="overflow-auto content-area-offset-bottom" style={{ height: "calc(100vh - 24.25rem)" }}>
          <div className="flex justify-between align-first">
            <h4 className="text-gray-900 dark:text-gray-200 font-bold text-2xl py-4 px-6 sticky top-0 dark:bg-gray-800 break-all">
              测试标题 {id}
            </h4>
          </div>
          <div className="px-6 py-4 pb-8 border-b dark:border-gray-700">
            <div className="flex justify-between">
              <h5 className="text-blue-700 dark:text-yellow-300">@test</h5>
              <span className="text-gray-400 dark:text-gray-500 text-sm">now</span>
            </div>
            <div className="content text-gray-700 dark:text-gray-300 mt-3 break-all">
              <div className="the-content">
                <p>测试内容 {id}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-300 dark:bg-gray-700 dark:text-gray-400 h-48 text-gray-200 flex">
          <div className="flex justify-center items-center flex-1">
            <div>
              <a href="" className="text-blue-700 dark:text-yellow-300">Sign in with Github</a> to continue.
            </div>
          </div>
        </div>
      </div>
    ) : null

  return el
}

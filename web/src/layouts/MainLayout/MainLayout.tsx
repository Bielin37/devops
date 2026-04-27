import { Link, routes } from '@redwoodjs/router'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header>
        <h1 className="m-6 px-4 text-center text-2xl sm:text-3xl md:m-10 md:text-4xl">
          Front-end Team Berlin
        </h1>
      </header>
      <nav className="sticky top-0 z-10 bg-white py-4 shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="flex justify-center gap-6">
            <li>
              <Link
                to={routes.home()}
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={routes.wochenplanung()}
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                Wochenplanung
              </Link>
            </li>
            <li>
              <Link
                to={routes.presentations()}
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                Vorträge
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className="mx-auto max-w-7xl flex-grow px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>
      <footer className="mt-auto bg-gray-800 py-6 text-gray-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul className="flex justify-center space-x-6">
            <li>
              <a
                href="https://miro.com/app/board/uXjVKePNKeM=/"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-white"
              >
                Unser Miro Board
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout

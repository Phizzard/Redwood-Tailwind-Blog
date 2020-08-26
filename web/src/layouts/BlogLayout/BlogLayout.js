import { useState } from 'react'
import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  return (
    <>
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-screen-xl min-h-screen mx-auto">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <Link to={routes.home()} aria-label="Home">
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                      alt="Logo"
                    />
                  </Link>
                  <div className="-mr-2 flex items-center md:hidden">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                      id="main-menu"
                      aria-label="Main menu"
                      aria-haspopup="true"
                      onClick={() => setIsMobileNavOpen(true)}
                    >
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:ml-10 md:pr-4">
                <Link
                  to={routes.about()}
                  className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  About
                </Link>
              </div>
              <div className="hidden md:block md:ml-10 md:pr-4">
                <Link
                  to={routes.contact()}
                  className="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Contact
                </Link>
              </div>
            </nav>
          </div>
          {/*<!--
              Mobile menu, show/hide based on menu open state.

              Entering: "duration-150 ease-out"
                From: "opacity-0 scale-95"
                To: "opacity-100 scale-100"
              Leaving: "duration-100 ease-in"
                From: "opacity-100 scale-100"
                To: "opacity-0 scale-95"
            -->*/}
          {isMobileNavOpen && (
            <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div className="rounded-lg shadow-md">
                <div
                  className="rounded-lg bg-white shadow-xs overflow-hidden"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="main-menu"
                >
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        aria-label="Close menu"
                        onClick={() => setIsMobileNavOpen(false)}
                      >
                        <svg
                          className="h-6 w-6"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3">
                    <Link
                      to={routes.about()}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                      role="menuitem"
                    >
                      About
                    </Link>
                  </div>
                  <div className="px-2 pt-2 pb-3">
                    <Link
                      to={routes.contact()}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                      role="menuitem"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
          <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            {children}
          </main>
        </div>
      </div>
    </>
  )
}

export default BlogLayout

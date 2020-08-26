import { Link } from '@redwoodjs/router'

export const Button = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-pink-600 hover:bg-pink-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
    >
      {children}
    </Link>
  )
}

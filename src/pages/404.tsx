import Link from 'next/link'

const errorPage = () => {
    return(
        <div className="bg-gradient-to-r from-gray-300 to-gay-200">
        <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
        <div className="border-t border-gray-200 text-center pt-8">
            <h1 className="text-9xl font-bold text-gray-600">404</h1>
            <h1 className="text-6xl font-medium py-8">oops! Page not found</h1>
            <p className="text-2xl pb-8 px-12 font-medium">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
            <button className="bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
            <Link href="/">HOME</Link>
            </button>
        </div>
        </div>
        </div>
        </div>)
}

export default errorPage;
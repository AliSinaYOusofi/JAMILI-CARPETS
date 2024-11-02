'use client'

import React from 'react'
import Link from 'next/link'

interface ErrorPageProps {
  error: Error
  reset: () => void
}

const Error: React.FC<ErrorPageProps> = ({ error, reset }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-10 rounded-xl shadow-2xl">
        <div className="text-center">
          <h1 className="block text-red-600 dark:text-red-400 text-7xl font-bold mb-6">
            Oops!
          </h1>
          
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              Something went wrong!
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {error.message || 'An unexpected error occurred'}
            </p>
            
            {process.env.NODE_ENV === 'development' && (
              <div className="text-left bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-4">
                <p className="font-mono text-sm text-gray-800 dark:text-gray-200 break-words">
                  {error.stack}
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
            >
              Try Again
            </button>
            
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 dark:text-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
            >
              Back to Home
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            If this problem persists, please contact support
          </p>
          <Link
            href="/contact"
            className="text-sm text-red-600 dark:text-red-400 hover:text-red-500 dark:hover:text-red-300 font-medium"
          >
            Contact Support →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Error 
import React from 'react'
import { Link } from 'react-router'

function Card({ link, head, paras }) {
  return (
    // <a href="#" className="block  p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    //   <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Wedding Loans</h5>
    //   <p className="font-normal text-gray-700 dark:text-gray-400">Maximum loan: PKR 5 lakhs</p>
    //   <p className="font-normal text-gray-700 dark:text-gray-400">Loan period: 3 years</p>
    // </a>

    <Link to={link} className="block  p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{head}</h5>
      {paras && paras.map((para) => <p className="font-normal text-gray-700 dark:text-gray-400">{para}</p>)}
    </Link>
  )
}

export default Card
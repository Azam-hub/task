import React from 'react'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="flex items-center gap-10">
          <h2 className="text-2xl">Logo</h2>

          <nav>

            {/* <ul className="flex gap-7">
              <li>
                <a href="#" className="flex items-center gap-2">Wedding Loans <FaChevronDown className="text-xs"/> </a>
                <ul>
                  <li>Valima</li>
                  <li>Furniture</li>
                  <li>Valima Food</li>
                  <li>Jahez</li>
                </ul>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2">Home Construction Loans <FaChevronDown className="text-xs"/> </a>
                <ul>
                  <li>Structure</li>
                  <li>Finishing</li>
                  <li>Loan</li>
                </ul>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2">Business Startup Loans <FaChevronDown className="text-xs"/> </a>
                <ul>
                  <li>Buy Stall</li>
                  <li>Advance Rent for Shop</li>
                  <li>Shop Assets</li>
                  <li>Shop Machinery</li>
                </ul>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2">Education Loans <FaChevronDown className="text-xs"/> </a>
                <ul>
                  <li>University Fees</li>
                  <li>Child Fees loan</li>
                </ul>
              </li>
            </ul> */}

          </nav>
        </div>

        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign In
          </button>
        </div>
      </header>
      <Outlet />
    </div>
  )
}

export default Layout
import React from "react"

function Navbar() {
  return (
    <aside className="md:col-span-1 bg-white border-r min-h-screen">

      <nav className="flex flex-col justify-start text-right h-full">

        {/* Logo */}
        <h1 className=" flex justify-start font-bold uppercase p-6 text-xl tracking-widest border-b border-2 bg-pink-100">
          <a href="/" className="hover:text-indigo-500 transition">
            Food Ninja
          </a>
        </h1>

        {/* Menu */}
        <ul className=" flex justify-end  space-y-2 border-2 bg-blue-500 ">

          <li>
            <a
              href="#"
              className="flex justify-end px-6 py-3 border-r-4 border-indigo-500 bg-indigo-50 font-semibold text-gray-800"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex justify-end px-6 py-3 border-r-4 border-transparent hover:bg-gray-100 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex justify-end px-6 py-3 border-r-4 border-transparent hover:bg-gray-100 transition"
            >
              Contact
            </a>
          </li>

        </ul>

      </nav>

    </aside>
  )
}

export default Navbar

// import React from 'react'

const Navbar = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-slate-400 justify-between px-6">
      <div className="flex font-bold text-2xl text-blue-500 p-2 content-center">NavBar</div>
      <div className="felx justif-right content-center w-1/2">
        <ul className="flex flex-col sm:flex-row gap-4  content-center justify-end">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Pricing</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
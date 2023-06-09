import { FaFacebookF,FaInstagram,FaLinkedin ,FaGoogle} from "react-icons/fa";

import React from 'react'

function Footer() {
  return (
    <div
      className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-3 px-4 px-xl-5 bg-primary position-absolute bottom-0 w-100">
      {/* <!-- Copyright --> */}
      <div className="text-white mb-3 mb-md-0">
        Copyright © {new Date().getFullYear()}. All rights reserved.
      </div>
      {/* <!-- Copyright --> */}

      {/* <!-- Right --> */}
      <div >
        <a href="" className="text-white me-4">
          <FaFacebookF/>
        </a>
        <a href="" className="text-white me-4">
          <FaInstagram />
        </a>
        <a href="mailto:krishnabansal2277@gmail.com" className="text-white me-4">
          <FaGoogle />
        </a>
        <a href="https://www.linkedin.com/in/krishna agarwal/" className="text-white">
          <FaLinkedin />
        </a>
      </div>
      {/* <!-- Right --> */}
    </div>
  )
}

export default Footer

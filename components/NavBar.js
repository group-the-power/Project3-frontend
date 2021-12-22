import React from "react";
import Link from "next/link";

import { useRouter } from "next/router";

const NavBar = ({children}) => {
  const router = useRouter();
  // console.log(router);
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand d-flex align-items-center">
            <span className="ms-2"> My teacher </span>
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
          <li className="nav-item">
              <Link href="/about">
                <a
                  className={
                    "nav-link " +
                    `${router.pathname === "/about" ? "active" : ""}`
                  }
                >
                  About
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/">
                <a
                  className={
                    "nav-link " + `${router.pathname === "/" ? "active" : ""}`
                  }
                  aria-current="page"
                >
                  Projects
                </a>
              </Link>
            </li>
            
            <li className="nav-item">
              <Link href="/Contact">
                <a
                  className={
                    "nav-link " +
                    `${router.pathname === "/Contact" ? "active" : ""}`
                  }
                >

                  Contact
                  
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/register">
                <a
                  className={
                    "nav-link " +
                    `${router.pathname === "/register" ? "active" : ""}`
                  }
                >
                  register
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {children}
    </>
  );
};

export default NavBar;


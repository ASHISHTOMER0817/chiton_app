'use client'

import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import React from "react";
import Logo from "../../public/static/icons/Logo.svg";
import { useRouter } from "next/navigation";
export default function Home() {

  const router = useRouter()
  const loginPath = () => {
    router.push('./login')
  }
  return (
    <div className="mx-5 mt-3 ">
      <header className=" d-flex bg-success ms-0 ">
        <Image
          src={Logo}
          className="border bg-danger border-primary w-10 h-10"
          alt="Chiton Logo"
        ></Image>

        <nav className="container row align-items-center text-center">
          <h5 className="border col border-primary ">Men</h5>
          <h5 className="border col border-primary ">Women</h5>
          <h5 className="border col border-primary ">Children</h5>
          <h5 className="border col border-primary  " onClick={loginPath}>Login</h5>
        </nav>
      </header>
      <section className="d-flex justify-content-center">
        <input placeholder="Search Here" className="" type="text" id="home_search" />
        <label htmlFor="home_search" className=" ms-2"> Search</label>{" "}
      </section>
      <section>
        <h3>Clothing</h3>
        {/* Clothing cards will come here */}
      </section>
      <section>
        <h3>T-shirt</h3>
        {/* T-shirt cards will come here */}
      </section>
      <section>
        <h3>Jeans</h3>
        {/* Jeans cards will come here */}
      </section>
      <footer className=" d-flex justify-content-around">
        <ul>
          <li>Custom Designs</li>
          <li>Seller Section</li>
          <li>Costumes</li>
        </ul>
        <ul>
          <li>Address</li>
          <li>Contact Us</li>
          <li>Connect With Us</li>
        </ul>
        <div>Space to draw</div>
      </footer>
    </div>
  );
}

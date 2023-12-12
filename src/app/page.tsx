import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import React from "react";
import Logo from "../../public/static/icons/Logo.svg";
export default function Home() {
  return (
    <div className="mt-4 ">
      <div className=" bg-success ms-0 ">

        <div className=" bg-danger">
          <Image
            src={Logo}
            className="border border-primary w-100 h-100"
            alt="Chiton Logo "
          ></Image>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <h5 className="border border-primary me-5 mb-auto ">Men</h5>
          <h5 className="border border-primary mb-auto me-5">Women</h5>
          <h5 className="border border-primary mb-auto me-5">Children</h5>
          <h5 className="border border-primary mb-auto me-5">Login</h5>
        </div>
      </div>
      <div></div>hggyug
    </div>
  );
}

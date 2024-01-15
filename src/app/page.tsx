// 'use client'

import React from "react";
import Header from "./components/header";
import CardLayout from "./components/cardlayout";
import fetchedData from "./components/fetchedData";
import Image from "next/image";
import homeImage from "../../public/homeImage.jpg"
// import Head from 'next/head'

interface Product {
	name: string;
	
}

export default async function Home() {

	// const data = await fetchedData("list")

	return (
		<div className=" ">
			<div  className="relative ">
			<Image src={homeImage} className="h-screen absolute z-10" alt="image"/>
			<Header/>
			<ul className="flex-col items-center z-30">
			 <li>FASHION AND SHOWS</li>
			 <li>WHAT NEWS </li>
			 <li>TODAY</li>
			 <li>Look at the sunset life is amazing life is beautiful, life is what you make it</li>
			</ul>
			</div>
		</div>
	);
}
			{/*<section>
				<h3>Clothing</h3>
				<div className="d-flex card-homePage flex-wrap mt-3 justify-content-center align-items-center">
					
					
					{data.results?.map(({images, name, price}: any)=> {
						
						return <CardLayout image={images[0]?.url} alternate= {images[0]?.baseUrl} name={name} price={price?.formattedValue} />
						
					})}
				</div>
			</section>
			<section>
				<h3>T-shirt</h3>
				<div className="d-flex card-homePage flex-wrap mt-3 justify-content-center align-items-center">
					<p>Card</p>
					<p>Card</p>
					<p>Card</p>
					<p>Card</p>
					<p>Card</p>
					<p>Card</p>
					<p>Card</p>
				</div>
			</section>
			<section>
				<h3>Jeans</h3>
				<div className="d-flex card-homePage flex-wrap mt-3 justify-content-center align-items-center">
					<p>Card</p>
					<p>Card</p>
					<p>Card</p>
					<p>Card</p>
					<p>Card</p>
					<p>Card</p>
					<p>Card</p>
				</div>
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
			</footer> */}

// 'use client'

// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./components/header";
import CardLayout from "./components/cardlayout";
import fetchedData from "./components/fetchedData";
import Image from "next/image";

interface Product {
	name: string;
	
}

export default async function Home() {

	const data = await fetchedData("list")

	return (
		<div className="mx-5 mt-3 ">
			<Header/>
			<section>
				<h3>Clothing</h3>
				{/* Clothing cards will come here */}
				<div className="d-flex card-homePage flex-wrap mt-3 justify-content-center align-items-center">
					
					<Image width={200} height={350} src={data.results[5]?.images[0]?.url} alt={data.results[0]?.images[0]?.baseUrl}/>
					{data.results?.map(({images, name, price}: any)=> {
						
						return <CardLayout image={images[0]?.url} alternate= {images[0]?.baseUrl} name={name} price={price?.formattedValue} />
						
					})}
				</div>
			</section>
			<section>
				<h3>T-shirt</h3>
				{/* T-shirt cards will come here */}
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
				{/* Jeans cards will come here */}
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
			</footer>
		</div>
	);
}

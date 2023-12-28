"use client";
import Image from "next/image";
import React from "react";

interface HomePage {
	image: string;
	alternate: string;
	title: string;
	price: string;
}

const HomeData:React.FC<HomePage> =({ image, alternate, title, price }) => {
	return (
		<div>
			<Image src={image} alt={alternate} width={200} height={350} />
			<p>{title}</p>
			<p>{price}</p>
		</div>
	);
};
export default HomeData;

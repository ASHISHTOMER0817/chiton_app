import Image from "next/image";
import React from "react";

interface HomePage {
	image: string;
	name: string;
	price: string;
	alternate: string

}

const CardLayout:React.FC<HomePage> =({ image, alternate, name, price }) => {
	return (
		<div >
			<Image src={image} alt={alternate} width={200} height={350} />
			<p>{name}</p>
			<p>{price}</p>
		</div>
	);
};
export default CardLayout;

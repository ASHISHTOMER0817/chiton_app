import axios from "axios";
import { useEffect, useState } from "react";

// import HomeData from "./homeData";

interface ProductItem {
	product: {
		ancestorProductCode: string;
		// Add other properties as needed
	};
	// Add other properties as needed
}

export function HomeCards() {
	const [data, setData] = useState<ProductItem[]>([]);
	useEffect(() => {
		const fetchingData = async () => {
			try {
				setData(await axios.get('/api/homePageData'));
			} catch (error: any) {
				console.log(error.message);
			}
		};
		fetchingData();
	}, []);
	const img =  data?[0].product?.ancestorProductCode: ""
	return img;
}

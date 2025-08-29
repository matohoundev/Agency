export interface Offer {
		id: string | number;
		title: string;
		price: string;
		priceNote: string;
		deliveryTime: string;
		description: string;
		isPopular: boolean;
		theme: string;
		themeBtn: string;
		features: string[];
}
export interface Product {
  id: number;
  image: string;
  title: string;
  rating: number;
  priceINR: number;
  priceUSD: number;
}

export const products: Product[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    title: "Wireless Bluetooth Headphones with Noise Cancellation",
    rating: 4.5,
    priceINR: 2999,
    priceUSD: 36.5,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    title: "Premium Smartwatch with Fitness Tracker",
    rating: 4.3,
    priceINR: 5499,
    priceUSD: 66.99,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    title: "Designer Sunglasses UV Protection Polarized",
    rating: 4.7,
    priceINR: 1799,
    priceUSD: 21.99,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=400&fit=crop",
    title: "Leather Casual Sneakers for Men and Women",
    rating: 4.2,
    priceINR: 3499,
    priceUSD: 42.5,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop",
    title: "Portable Wireless Speaker with Deep Bass",
    rating: 4.6,
    priceINR: 2299,
    priceUSD: 27.99,
  },
];

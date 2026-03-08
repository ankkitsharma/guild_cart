export interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
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
    description:
      "Experience premium sound quality with these wireless Bluetooth headphones featuring advanced noise cancellation technology. Perfect for music lovers and professionals who need to focus. With up to 30 hours of battery life and comfortable ear cushions, these headphones are your perfect companion for work and travel.",
    rating: 4.5,
    priceINR: 2999,
    priceUSD: 36.5,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    title: "Premium Smartwatch with Fitness Tracker",
    description:
      "Stay connected and track your fitness goals with this premium smartwatch. Features include heart rate monitoring, step counting, sleep tracking, and customizable watch faces. Water-resistant design with 5-day battery life. Compatible with both iOS and Android devices.",
    rating: 3.0,
    priceINR: 5499,
    priceUSD: 66.99,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    title: "Designer Sunglasses UV Protection Polarized",
    description:
      "Protect your eyes in style with these designer sunglasses featuring 100% UV protection and polarized lenses. The sleek frame design complements any face shape, while the durable construction ensures long-lasting wear. Comes with a premium carrying case and cleaning cloth.",
    rating: 4.7,
    priceINR: 1799,
    priceUSD: 21.99,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=400&fit=crop",
    title: "Leather Casual Sneakers for Men and Women",
    description:
      "Step out in comfort and style with these premium leather sneakers. Crafted from genuine leather with a cushioned insole for all-day comfort. The versatile design pairs perfectly with jeans, chinos, or casual wear. Available in multiple sizes with a durable rubber sole.",
    rating: 4.2,
    priceINR: 3499,
    priceUSD: 42.5,
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop",
    title: "Portable Wireless Speaker with Deep Bass",
    description:
      "Take your music anywhere with this portable wireless speaker featuring powerful deep bass and crystal-clear sound. Bluetooth 5.0 connectivity ensures stable connection up to 30 feet. IPX7 waterproof rating makes it perfect for outdoor adventures. Up to 12 hours of continuous playback.",
    rating: 4.6,
    priceINR: 2299,
    priceUSD: 27.99,
  },
];

export type CartItem = {
  productId: string;
  userId: number;
  quantity: number;
};

export const cart: CartItem[] = [
  // {
  //   productId: 1,
  //   userId: 1,
  //   quantity: 2,
  // },
];

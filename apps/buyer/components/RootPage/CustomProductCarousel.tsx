import * as React from "react";
import Link from "next/link";
import { Card, CardContent } from "@workspace/ui/components/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel";
import { Product } from "@/lib/products";
import Image from "next/image";

interface CustomProductCarouselProps {
  products: Product[];
}

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`} className="text-yellow-400">
          ★
        </span>
      ))}
      {hasHalfStar && <span className="text-yellow-400">★</span>}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} className="text-gray-300">
          ★
        </span>
      ))}
      <span className="ml-1 text-sm text-gray-600">({rating})</span>
    </div>
  );
};

export function CustomProductCarousel({
  products,
}: CustomProductCarouselProps) {
  return (
    <Carousel className="w-full max-w-5xl">
      <CarouselContent className="-ml-4">
        {products.map((product) => (
          <CarouselItem
            key={product.id}
            className="pl-4 md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <Link href={`/product/${product.id}`}>
                <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="relative w-full aspect-square mb-3">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <h3 className="font-semibold text-sm mb-2 line-clamp-2 h-10">
                      {product.title}
                    </h3>
                    <StarRating rating={product.rating} />
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-lg font-bold">
                        ₹{product.priceINR}
                      </span>
                      <span className="text-sm text-gray-500">
                        ${product.priceUSD}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

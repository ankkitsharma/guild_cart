import { notFound } from "next/navigation";
import Image from "next/image";
import { products } from "@/lib/mockData/products";
import { Button } from "@workspace/ui/components/button";
import { Card, CardContent } from "@workspace/ui/components/card";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`} className="text-yellow-400 text-xl">
          ★
        </span>
      ))}
      {hasHalfStar && <span className="text-yellow-400 text-xl">★</span>}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} className="text-gray-300 text-xl">
          ★
        </span>
      ))}
      <span className="ml-2 text-base text-gray-600">({rating})</span>
    </div>
  );
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <Card>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Product Image */}
              <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Product Details */}
              <div className="flex flex-col gap-6">
                <div>
                  <h1 className="text-3xl font-bold mb-3">{product.title}</h1>
                  <StarRating rating={product.rating} />
                </div>

                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-primary">
                    ₹{product.priceINR}
                  </span>
                  <span className="text-xl text-gray-500">
                    ${product.priceUSD}
                  </span>
                </div>

                <div className="border-t border-b py-4">
                  <h2 className="text-lg font-semibold mb-2">
                    Product Description
                  </h2>
                  <p className=" leading-relaxed">{product.description}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <Button
                    size="lg"
                    className="flex-1 text-lg py-6"
                    variant="default"
                  >
                    Buy Now
                  </Button>
                  <Button
                    size="lg"
                    className="flex-1 text-lg py-6"
                    variant="outline"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

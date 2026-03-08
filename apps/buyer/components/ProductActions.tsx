"use client";

import { useMemo, useState } from "react";
import { Button } from "@workspace/ui/components/button";
import { cart } from "@/lib/mockData/products";
import { user } from "@/lib/mockData/user";
import { useRouter } from "next/navigation";

interface ProductActionsProps {
  productId: string;
}

export function ProductActions({ productId }: ProductActionsProps) {
  const existingQuantity = useMemo(
    () => cart.find((item) => item.productId == productId)?.quantity ?? 0,
    [productId],
  );
  const [quantity, setQuantity] = useState(existingQuantity);
  const router = useRouter();

  const syncCart = (nextQuantity: number) => {
    const cartItem = cart.find((item) => item.productId == productId);
    if (cartItem) {
      cartItem.quantity = nextQuantity;
      return;
    }

    if (nextQuantity > 0) {
      cart.push({
        productId,
        userId: user.id,
        quantity: nextQuantity,
      });
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-auto">
      <Button size="lg" className="flex-1 text-lg py-6" variant="default">
        Buy Now
      </Button>
      {quantity >= 1 ? (
        <div>
          <Button
            onClick={() => {
              const nextQuantity = Math.max(0, quantity - 1);
              setQuantity(nextQuantity);
              syncCart(nextQuantity);
            }}
          >
            -
          </Button>
          <Button>Proceed to Buy ({quantity})</Button>
          <Button
            onClick={() => {
              const nextQuantity = quantity + 1;
              setQuantity(nextQuantity);
              syncCart(nextQuantity);
            }}
          >
            +
          </Button>
        </div>
      ) : (
        <Button
          size="lg"
          className="flex-1 text-lg py-6"
          variant="outline"
          onClick={() => {
            const nextQuantity = 1;
            setQuantity(nextQuantity);
            syncCart(nextQuantity);
          }}
        >
          Add to Cart
        </Button>
      )}
    </div>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { shopProducts } from '@/lib/shop-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ShoppingCart } from 'lucide-react';

export default function ShopPage() {
  const whatsappNumber = "916307712832";

  return (
    <div className="bg-muted">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Our Products
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Sustainable and effective home care solutions.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {shopProducts.map((product) => {
            const productImage = PlaceHolderImages.find(
              (img) => img.id === product.imageId
            );
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              `I want to buy ${product.name}.`
            )}`;
            return (
              <Card
                key={product.name}
                className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl"
              >
                {productImage && (
                  <div className="relative h-56 w-full">
                    <Image
                      src={productImage.imageUrl}
                      alt={productImage.description}
                      data-ai-hint={productImage.imageHint}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow"></CardContent>
                <CardFooter>
                  <Button asChild className="w-full" variant="accent">
                    <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <ShoppingCart className="mr-2 h-4 w-4" /> Buy Now
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

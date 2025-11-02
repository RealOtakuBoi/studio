import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NewsletterPage() {
  return (
    <div className="bg-muted">
        <div className="container mx-auto flex min-h-[80vh] flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                Subscribe to our Newsletter
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
                Stay up to date with our latest projects, events, and success stories by joining our mailing list.
            </p>
            </div>
            <div className="mt-12 w-full flex justify-center">
              <Button asChild size="lg" variant="accent">
                <Link href="https://enactimes.kit.com/6648f55af3" target="_blank" rel="noopener noreferrer">
                  Subscribe Now
                </Link>
              </Button>
            </div>
        </div>
    </div>
  );
}
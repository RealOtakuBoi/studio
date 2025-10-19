import Image from 'next/image';
import { aboutContent } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-us-team');

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            About Enactus Hansraj
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We are a community of student, academic and business leaders committed to using the power of entrepreneurial action to transform lives and shape a better, more sustainable world.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          {aboutImage && (
            <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="font-headline text-3xl font-bold">Our History</h2>
              <p className="text-muted-foreground">{aboutContent.history}</p>
            </div>
            <div className="space-y-4">
              <h2 className="font-headline text-3xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground">{aboutContent.mission}</p>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-center font-headline text-3xl font-bold">Our Core Values</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {aboutContent.values.map((value) => (
              <Card key={value.title} className="text-center transition-shadow duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                    <CheckCircle className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="mt-4 font-headline">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

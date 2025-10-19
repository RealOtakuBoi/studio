import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { projects } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Target, Users, Handshake } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-main');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl">
            Enactus Hansraj
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            Entrepreneurial action for a better world. Discover our projects, meet our team, and join our mission.
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild size="lg" variant="accent">
              <Link href="/about">Learn More</Link>
            </Button>
            <Button asChild size="lg" variant="accent">
              <Link href="/contact">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
                <Target className="h-12 w-12 text-accent" />
                <h3 className="font-headline mt-4 text-2xl font-semibold">Our Mission</h3>
                <p className="mt-2 text-muted-foreground">To create a better, more sustainable world through the positive power of business.</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-accent" />
                <h3 className="font-headline mt-4 text-2xl font-semibold">Our Team</h3>
                <p className="mt-2 text-muted-foreground">A passionate group of students dedicated to driving social innovation.</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <Handshake className="h-12 w-12 text-accent" />
                <h3 className="font-headline mt-4 text-2xl font-semibold">Our Impact</h3>
                <p className="mt-2 text-muted-foreground">Transforming lives and strengthening communities through entrepreneurial projects.</p>
            </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-muted py-16 md-py-24">
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              Our Projects
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We tackle real-world problems with innovative solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const projectImage = PlaceHolderImages.find(
                (img) => img.id === project.imageId
              );
              return (
                <Card
                  key={project.slug}
                  className="overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                >
                  {projectImage && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={projectImage.imageUrl}
                        alt={projectImage.description}
                        data-ai-hint={projectImage.imageHint}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline">{project.name}</CardTitle>
                    <CardDescription>{project.tagline}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link" className="p-0">
                      <Link href={`/projects/${project.slug}`}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto text-center">
              <h2 className="font-headline text-3xl font-bold md:text-4xl">Ready to make a difference?</h2>
              <p className="mt-4 text-lg text-muted-foreground">Join our team or support our cause. Together, we can create lasting change.</p>
              <Button asChild size="lg" className="mt-8">
                  <Link href="/contact">Join Enactus Hansraj</Link>
              </Button>
          </div>
      </section>
    </div>
  );
}

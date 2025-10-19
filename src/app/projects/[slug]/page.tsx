import { notFound } from 'next/navigation';
import Image from 'next/image';
import { projects } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const projectImage = PlaceHolderImages.find((img) => img.id === project.imageId);

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <Badge variant="secondary">{project.tagline}</Badge>
          <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight sm:text-6xl">
            {project.name}
          </h1>
        </div>

        {/* Main Content */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left Column (Image) */}
          <div className="lg:col-span-3">
            {projectImage && (
              <div className="relative h-[25rem] w-full overflow-hidden rounded-lg shadow-xl">
                <Image
                  src={projectImage.imageUrl}
                  alt={projectImage.description}
                  data-ai-hint={projectImage.imageHint}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>

          {/* Right Column (Details) */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.mission}</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Activities and Impact */}
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
           <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="font-headline">Key Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {project.activities.map((activity, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span className="text-muted-foreground">{activity}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Our Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.impact}</p>
              </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}

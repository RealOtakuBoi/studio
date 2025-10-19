import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Smile, Handshake } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const impactStats = [
  {
    icon: TrendingUp,
    value: "150%",
    label: "Avg. Income Increase for Artisans",
    description: "Women artisans in Project Mehr have seen a dramatic rise in their sustainable income.",
  },
  {
    icon: Users,
    value: "5,000+",
    label: "Individuals Impacted",
    description: "Across all our projects, thousands of lives have been positively changed through education and empowerment.",
  },
  {
    icon: Smile,
    value: "200+",
    label: "Women Empowered",
    description: "Through Project Mehr, we've fostered financial independence and preserved cultural heritage.",
  },
  {
    icon: Handshake,
    value: "10+",
    label: "Communities Engaged",
    description: "Project Ahsaas has established learning centers and skill development programs in over ten communities.",
  },
];

export default function ImpactPage() {
    const impactImage = PlaceHolderImages.find((img) => img.id === 'hero-main');

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Our Collective Impact
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We measure our success by the lives we change and the communities we strengthen. Here's a look at the difference we're making together.
          </p>
        </div>
        
        {impactImage && (
            <div className="my-12 relative h-96 w-full overflow-hidden rounded-lg shadow-xl">
              <Image
                src={impactImage.imageUrl}
                alt={impactImage.description}
                data-ai-hint={impactImage.imageHint}
                fill
                className="object-cover"
              />
               <div className="absolute inset-0 bg-black/30" />
            </div>
          )}


        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat, index) => (
            <Card key={index} className="text-center transition-shadow duration-300 hover:shadow-xl">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <stat.icon className="h-8 w-8" />
                </div>
                <p className="mt-4 text-4xl font-bold font-headline">{stat.value}</p>
                <CardTitle>{stat.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

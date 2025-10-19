import Image from 'next/image';
import { teamMembers } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Card,
  CardContent,
  CardHeader,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function TeamPage() {
  return (
    <div className="bg-muted">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Meet Our Team
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            The driving force behind our projects. A dedicated group of students passionate about creating social impact.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {teamMembers.map((member) => {
            const memberImage = PlaceHolderImages.find(
              (img) => img.id === member.imageId
            );
            return (
              <Card key={member.name} className="text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
                <CardHeader className="items-center">
                  <Avatar className="h-24 w-24 border-4 border-accent">
                    {memberImage && <AvatarImage src={memberImage.imageUrl} alt={member.name} data-ai-hint={memberImage.imageHint} />}
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </CardHeader>
                <CardContent>
                  <h3 className="font-headline text-xl font-semibold">{member.name}</h3>
                  <p className="text-accent">{member.role}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

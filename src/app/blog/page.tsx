import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { format } from 'date-fns';
import { ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Our Blog
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Updates from our team, stories from our community, and insights on social entrepreneurship.
        </p>
      </div>

      <div className="mt-16 mx-auto max-w-3xl grid grid-cols-1 gap-8">
        {allPostsData.map(({ slug, date, title, author }) => (
          <Link href={`/blog/${slug}`} key={slug}>
            <Card className="group transition-shadow duration-300 hover:shadow-xl cursor-pointer">
              <CardHeader>
                <CardTitle className="font-headline text-2xl group-hover:text-accent">{title}</CardTitle>
                <CardDescription>
                  By {author} on {format(new Date(date), 'MMMM d, yyyy')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-accent">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

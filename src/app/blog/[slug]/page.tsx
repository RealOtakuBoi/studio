import { getPostData, getAllPostSlugs } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths;
}

export default async function Post({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);

  if (!postData) {
    notFound();
  }

  return (
    <article className="container mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">{postData.title}</h1>
        <p className="mt-4 text-muted-foreground">
          By {postData.author} on {format(new Date(postData.date), 'MMMM d, yyyy')}
        </p>
      </div>
      <div 
        className="prose prose-lg dark:prose-invert mx-auto"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
      />
    </article>
  );
}

// Add some basic prose styling to globals.css if needed, or extend tailwind.config
// For now, let's add some styles to globals.css for prose

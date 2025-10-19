import { SuccessStoryForm } from "@/components/SuccessStoryForm";

export default function SuccessStoriesPage() {
  return (
    <div className="bg-muted">
        <div className="container mx-auto flex min-h-[80vh] flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                Share Your Success
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
                Use our AI-powered tool to craft compelling, bite-sized summaries of your project's impact. Perfect for sharing your achievements with the world.
            </p>
            </div>
            <div className="mt-12 w-full flex justify-center">
              <SuccessStoryForm />
            </div>
        </div>
    </div>
  );
}

import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function RecruitmentPage() {
  return (
    <main className="bg-muted/40">
      <section className="bg-background px-4 py-12 text-foreground sm:px-6 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Enactus Hansraj</p>
          <h1 className="mt-3 font-headline text-4xl font-bold md:text-5xl">Recruitment 2026</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Take the first step toward building meaningful change with our team.
          </p>

          <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
            <Button asChild variant="accent" size="lg" className="h-auto min-h-14 whitespace-normal px-5 py-3 text-center">
              <a href="https://forms.gle/9wsdYJGn5AFxESq67" target="_blank" rel="noopener noreferrer">
                Preliminary Recruitment Form 2026 <ExternalLink />
              </a>
            </Button>
            <Button asChild variant="accent" size="lg" className="h-auto min-h-14 whitespace-normal px-5 py-3 text-center">
              <a href="https://chat.whatsapp.com/HoneU1Kepzl7ly43Eux4x5?s=sh&p=a&ilr=0" target="_blank" rel="noopener noreferrer">
                Join Enactus Hansraj Community <ExternalLink />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:py-14">
        <div className="mx-auto max-w-2xl">
          <Image
            src="/recruitment/ada.webp"
            alt="Enactus Hansraj Recruitment 2026 recruitment poster"
            width={1485}
            height={1856}
            className="h-auto w-full rounded-md object-contain shadow-xl"
          />
        </div>
      </section>
    </main>
  );
}

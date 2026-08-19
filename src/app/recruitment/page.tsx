import Image from 'next/image';

export default function RecruitmentPage() {
  return (
    <main className="container mx-auto px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Enactus Hansraj</p>
        <h1 className="mt-3 font-headline text-4xl font-bold md:text-5xl">Recruitment 2026</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Join the batch of 2029-30 and help turn ordinary ideas into meaningful innovation.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-2xl">
        <Image
          src="/recruitment/recruitment-2026.png"
          alt="Enactus Hansraj Recruitment 2026 poster"
          width={1465}
          height={1754}
          className="h-auto w-full rounded-md border object-contain shadow-sm"
        />
      </div>

      <section className="mx-auto mt-10 grid max-w-2xl gap-6 text-center sm:grid-cols-2">
        <div>
          <h2 className="font-headline text-xl font-semibold">Eligibility</h2>
          <p className="mt-2 text-muted-foreground">Students from the batch of 2029-30.</p>
        </div>
        <div>
          <h2 className="font-headline text-xl font-semibold">Last date to apply</h2>
          <p className="mt-2 text-muted-foreground">27 August 2026, 11:59 PM.</p>
        </div>
      </section>

      <p className="mx-auto mt-8 max-w-2xl text-center text-muted-foreground">
        Scan the application QR code on the poster to apply, or scan the WhatsApp QR code to join the community.
        For queries, contact Asutosh Pattanayak at +91 9861467920 or Shikhar Pandey at +91 8115193817.
      </p>
    </main>
  );
}

'use client';

import Image from 'next/image';
import { useState } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';

export function RecruitmentAnnouncement() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="h-[90vh] w-[min(92vw,700px)] max-w-none border-0 bg-transparent p-0 shadow-none [&>button]:z-10 [&>button]:rounded-full [&>button]:bg-background/85 [&>button]:p-1">
        <DialogTitle className="sr-only">Enactus Hansraj Recruitment 2026</DialogTitle>
        <DialogDescription className="sr-only">
          Recruitment is open for the batch of 2029-30 until 27 August 2026 at 11:59 PM.
        </DialogDescription>
        <div className="relative h-[90vh] w-[min(92vw,700px)]">
          <Image
            src="/recruitment/recruitment-2026.png"
            alt="Enactus Hansraj Recruitment 2026 poster"
            fill
            priority
            sizes="(max-width: 640px) calc(100vw - 2rem), 672px"
            className="object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

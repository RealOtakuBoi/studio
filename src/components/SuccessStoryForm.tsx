'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { generateSummaryAction } from '@/app/success-stories/actions';
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

const initialState = {
  summary: '',
  error: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? 'Generating...' : 'Generate Summary'}
    </Button>
  );
}

export function SuccessStoryForm() {
  const [state, formAction] = useFormState(generateSummaryAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.summary) {
      formRef.current?.reset();
    }
  }, [state.summary]);
  
  return (
    <div className="w-full max-w-4xl space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Generate a Success Story</CardTitle>
          <CardDescription>
            Paste a long project report below to generate a concise, one-sentence summary perfect for social media.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form ref={formRef} action={formAction} className="space-y-4">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="projectReport">Project Report</Label>
              <Textarea
                id="projectReport"
                name="projectReport"
                placeholder="Paste your detailed project report here..."
                required
                className="min-h-[200px]"
              />
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
      
      {state.error && (
        <Alert variant="destructive">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{state.error}</AlertDescription>
        </Alert>
      )}

      {state.summary && (
        <Card className="bg-accent/10 border-accent">
          <CardHeader>
            <CardTitle className="font-headline text-accent">Generated Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <blockquote className="text-lg font-semibold leading-snug">
              &ldquo;{state.summary}&rdquo;
            </blockquote>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

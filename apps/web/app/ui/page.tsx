import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { APP_NAME } from "@askwell/shared";
import {
  Button,
  EmptyState,
  ErrorState,
  GlassPanel,
  Skeleton,
  Spinner,
} from "@/components/ui";

// Dev-only preview of the base UI on both surfaces, for review and
// screenshots. Hidden in production. Removed in Phase 6.

export const metadata: Metadata = {
  title: `UI preview · ${APP_NAME}`,
  robots: { index: false, follow: false },
};

type Surface = "dark" | "light";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-xs font-medium uppercase tracking-wider text-fg-subtle">{title}</h2>
      {children}
    </section>
  );
}

function SurfacePreview({ surface }: { surface: Surface }) {
  return (
    <div
      data-surface={surface}
      className="relative isolate overflow-hidden px-4 py-10 sm:px-8"
    >
      {/* Soft glows behind the glass so the blur is visible. */}
      <div
        aria-hidden="true"
        className="absolute -top-16 -left-16 -z-10 size-72 rounded-full bg-glow blur-glow"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 -right-20 -z-10 size-80 rounded-full bg-glow blur-glow"
      />

      <div className="mx-auto flex max-w-3xl flex-col gap-10">
        <header className="flex flex-col gap-1">
          <p className="font-mono text-xs text-fg-subtle">data-surface=&quot;{surface}&quot;</p>
          <h1 className="text-2xl font-semibold tracking-tight">
            {surface === "dark" ? "Dark surface · landing" : "Light surface · dashboard"}
          </h1>
        </header>

        <Section title="Button">
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button href="/ui" variant="secondary">
              As a link
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button loading>Saving</Button>
            <Button variant="secondary" disabled>
              Disabled
            </Button>
          </div>
        </Section>

        <Section title="GlassPanel">
          <div className="grid gap-4 sm:grid-cols-2">
            <GlassPanel>
              <h3 className="font-semibold">Default</h3>
              <p className="mt-1 text-sm text-fg-muted">
                Translucent fill, glass blur, hairline border.
              </p>
            </GlassPanel>
            <GlassPanel variant="strong">
              <h3 className="font-semibold">Strong</h3>
              <p className="mt-1 text-sm text-fg-muted">
                More opaque, stronger blur and a deeper shadow.
              </p>
            </GlassPanel>
          </div>
        </Section>

        <Section title="Spinner">
          <div className="flex items-center gap-6">
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
            <span className="text-fg-muted">
              <Spinner size="md" label="Loading in muted colour" />
            </span>
          </div>
        </Section>

        <Section title="Skeleton">
          <GlassPanel className="flex items-center gap-4">
            <Skeleton shape="circle" className="size-10 shrink-0" />
            <div className="flex w-full flex-col gap-2">
              <Skeleton shape="text" className="w-1/3" />
              <Skeleton shape="text" className="w-2/3" />
            </div>
          </GlassPanel>
          <Skeleton className="h-24 w-full" />
        </Section>

        <Section title="EmptyState">
          <GlassPanel padding="none">
            <EmptyState
              title="No bots yet"
              description="Create a bot, add your docs, and paste one script tag on your site."
              action={<Button>Create a bot</Button>}
            />
          </GlassPanel>
        </Section>

        <Section title="ErrorState">
          <GlassPanel padding="none">
            <ErrorState
              message="We couldn't load your conversations. Check your connection and try again."
              action={<Button variant="secondary">Try again</Button>}
            />
          </GlassPanel>
        </Section>
      </div>
    </div>
  );
}

export default function UiPreviewPage() {
  if (process.env.VERCEL_ENV === "production") notFound();

  return (
    <main className="min-h-dvh">
      <SurfacePreview surface="dark" />
      <SurfacePreview surface="light" />
    </main>
  );
}

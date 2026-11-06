<script setup lang="ts">
import { buttonVariants } from "@/components/ui/button";
import { CODE_SAMPLES, FAQS, FEATURES, STACK } from "@/lib/data";
import { SITE } from "@/lib/site";

useSeo({
  title: "The Vue 3 + TypeScript starter that ships momentum",
  description:
    "Vuetrix wires up Vite, TypeScript, Tailwind CSS, shadcn-vue components, file-based routing and static generation.",
  path: "/",
});
const steps = [
  [
    "01",
    "Clone the repo",
    "One git clone — or use GitHub’s template button. Rename the folder and the project is yours.",
  ],
  [
    "02",
    "Install and run",
    "pnpm install && pnpm dev. The dev server starts with HMR, linting and formatting already active.",
  ],
  [
    "03",
    "Ship a feature",
    "Add a file to src/pages/, style it with tokens, commit. Build gives you static HTML.",
  ],
];
const stats = [
  ["12", "features preconfigured"],
  ["40+", "components one command away"],
  ["8", "scripts cover the workflow"],
  ["MIT", "use it for anything"],
];
</script>
<template>
  <section class="relative overflow-hidden">
    <div class="hero-backdrop absolute inset-0" aria-hidden="true" />
    <div
      class="container-app relative flex flex-col items-center gap-8 pb-20 pt-20 text-center sm:pt-28"
    >
      <Reveal :delay="60" class="flex flex-col items-center gap-5">
        <h1
          class="max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-6xl lg:text-7xl"
        >
          The Vue 3 starter with the <span class="text-brand">boring parts</span> already solved
        </h1>
        <p class="max-w-2xl leading-relaxed text-muted-foreground sm:text-lg">
          Vuetrix wires up TypeScript, Tailwind CSS, shadcn-vue components, file-based routing and
          static generation — so your first commit is a feature, not a config file.
        </p>
      </Reveal>
      <Reveal :delay="120" class="w-full max-w-xl">
        <p class="mt-3 text-xs text-muted-foreground">
          Requires Node.js 20+. No global installs, no codegen surprises.
        </p>
      </Reveal>
      <Reveal :delay="160" class="flex flex-wrap justify-center gap-3">
        <RouterLink to="/docs" :class="buttonVariants({ size: 'lg' })">
          <IconRocket class="size-4" />Read the docs
        </RouterLink>
        <RouterLink to="/showcase" :class="buttonVariants({ variant: 'outline', size: 'lg' })"
          >Explore the components<IconArrowRight class="size-4" />
        </RouterLink>
      </Reveal>
    </div>
  </section>
  <section aria-label="Technology stack" class="border-y bg-muted/30">
    <div class="container-app grid grid-cols-2 gap-x-6 gap-y-5 py-8 sm:grid-cols-4">
      <div v-for="item in STACK.slice(0, 4)" :key="item.name" class="flex flex-col">
        <span class="font-display text-sm font-semibold">{{ item.name }}</span
        ><span class="text-xs text-muted-foreground">{{ item.role }} · {{ item.note }}</span>
      </div>
    </div>
  </section>
  <section class="border-y bg-muted/30">
    <div class="container-app grid min-w-0 items-center gap-10 py-20 lg:grid-cols-2">
      <Reveal class="flex min-w-0 flex-col gap-5">
        <span class="eyebrow">See for yourself</span>
        <h2 class="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          New file, new route. That’s the whole API.
        </h2>
        <p class="leading-relaxed text-muted-foreground">
          Drop <code class="rounded bg-muted px-1.5 font-mono text-sm">pricing.vue</code> into
          <code class="rounded bg-muted px-1.5 font-mono text-sm">src/pages</code> and /pricing
          exists — typed, lazy-loaded, with its own SEO meta. No router table to babysit.
        </p>
        <ul class="flex flex-col gap-2.5">
          <li
            v-for="p in [
              'Routes generated from the file tree at build time',
              'Per-page titles and meta via the useSeo composable',
              'Catch-all 404 route already wired up',
            ]"
            :key="p"
            class="flex gap-2.5 text-sm"
          >
            <IconCheck class="mt-0.5 size-4 shrink-0 text-brand" />{{ p }}
          </li>
        </ul>
        <div>
          <RouterLink to="/docs#routing" :class="buttonVariants({ variant: 'outline' })">
            Routing docs<ArrowRight class="size-4" />
          </RouterLink>
        </div>
      </Reveal>
    </div>
  </section>
  <section class="container-app flex flex-col gap-12 py-20">
    <SectionHeading
      eyebrow="From zero to deployed"
      title="Three commands between you and a shipping app"
    />
    <ol class="grid gap-6 md:grid-cols-3">
      <Reveal v-for="(s, i) in steps" :key="s[0]" as="li" :delay="i * 80">
        <div class="flex h-full flex-col gap-3 rounded-xl border bg-card p-6">
          <span class="font-mono text-sm text-brand">{{ s[0] }}</span>
          <h3 class="font-display text-lg font-semibold">{{ s[1] }}</h3>
          <p class="text-sm leading-relaxed text-muted-foreground">{{ s[2] }}</p>
        </div>
      </Reveal>
    </ol>
  </section>
  <section class="border-y bg-muted/30">
    <div class="container-app grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
      <div v-for="s in stats" :key="s[1]" class="flex flex-col items-center gap-1 text-center">
        <span class="font-display text-4xl font-semibold text-brand">{{ s[0] }}</span
        ><span class="text-sm text-muted-foreground">{{ s[1] }}</span>
      </div>
    </div>
  </section>
  <section class="border-t">
    <div class="container-app flex flex-col items-center gap-8 py-20 text-center">
      <Reveal class="flex flex-col items-center gap-4">
        <span class="eyebrow">Ready when you are</span>
        <h2 class="max-w-2xl font-display text-3xl font-semibold sm:text-5xl">
          Start your next Vue app tonight
        </h2>
        <p class="max-w-xl text-muted-foreground">
          Clone the repo, delete this website, keep the foundation. That’s what it’s for.
        </p>
      </Reveal>
      <div class="flex flex-wrap justify-center gap-3">
        <a :href="SITE.repo" target="_blank" rel="noopener" :class="buttonVariants({ size: 'lg' })">
          <IconBrandGithub class="size-4" />Get the starter on GitHub
        </a>
        <RouterLink to="/playground" :class="buttonVariants({ variant: 'outline', size: 'lg' })">
          Try the theme playground
        </RouterLink>
      </div>
    </div>
  </section>
</template>
